import { useState, useEffect } from "react";
import React from "react";
import { APIResponse } from "../types/FilckrSearch.types";
import { getImageURL } from "../helpers/FilckrSearch.helpers";

const API_KEY = '513f1c3c888abd4225b7f9a3105a275f';

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
      <label id='search-input-label' htmlFor='search-input'>Image Description: </label>
      <input id='search-input' type="text" placeholder="Type Keywords Here..." value={query} onChange={(e) => handleInputChange(e.target.value)} />
      <button id='search-button' type='submit' onClick={fetchImages}>Search</button>
      {isLoading && <p id='loading-p'>Is Loading...</p>}
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


