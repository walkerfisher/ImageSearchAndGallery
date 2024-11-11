import { useState, useEffect } from "react";
import React from "react";

const API_KEY = '513f1c3c888abd4225b7f9a3105a275f';

declare interface APIResponse {
  photos: {
    photo: Array<APIPhoto>;
  }
}

declare interface APIPhoto {
  id: string;
  owner: string;
  secret: string;
  title: string;
  server: string;
  // "farm": 0,
  // "title": "Stilo Car Institucional",
}

const FlickrSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchImages() {
    try {
      setIsLoading(true);

      const response = await fetch(`https://www.flickr.com/services/rest/?text=${query}&method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1`);
    
      if(!response.ok){
        setError('Server side error fetching photos.');
        return;
      }

      const data = await response.json() as APIResponse;
      setImages(data.photos.photo);

      setError(null);
    } catch (e) {
      setError('Error fetching photos.');
    } finally {
      setIsLoading(false);
    }
  }

  const imageUrls = images.map((image: any) => {
    return getImageURL(image);
  });

  function handleInputChange(value: string){
    setQuery(value);
    setImages([]);
  }

  return (
    <div id="main-container">
      <label htmlFor='search-input'>Image Description: </label>
      <input id='search-input' type="text" placeholder="Flickr Search" value={query} onChange={(e) => handleInputChange(e.target.value)} />
      <button type='submit' onClick={fetchImages}>Search</button>
      {isLoading && <p>Is Loading...</p>}
      <div className="App-SearchResults">
        {imageUrls.map(photo => 
        <div key={photo} className={'Image-Container'}>
          <img src={photo} alt="Flickr Search Photo Not Found" />
        </div>)}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FlickrSearch;

const getImageURL = (image: APIPhoto) => {
  return `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`;
};


