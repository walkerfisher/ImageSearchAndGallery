import React from "react";
import { useFlickrSearch } from "./FlickrSearch.hooks";

const FlickrSearch: React.FC = () => {
  
  const {
    error,
    fetchImages,
    handleInputChange,
    imageUrls,
    isLoading,
    query,
  } = useFlickrSearch();

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


