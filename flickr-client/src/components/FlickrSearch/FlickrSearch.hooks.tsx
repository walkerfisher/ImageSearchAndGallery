import { useState, useEffect } from "react";
import { APIResponse } from "../../types/FilckrSearch.types";
import { getImageURL } from "../../helpers/FilckrSearch.helpers";

const API_KEY = '513f1c3c888abd4225b7f9a3105a275f';

export const useFlickrSearch = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

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
    setError(null);
  }

  function toggleFavorite(url: string){
    setFavorites((prevFavorites) =>
      prevFavorites.includes(url)
        ? prevFavorites.filter((fav) => fav !== url)
        : [...prevFavorites, url]
    );
  };

  return {
    error,
    favorites,
    fetchImages,
    handleInputChange,
    imageUrls,
    isLoading,
    toggleFavorite,
    query,
  }
}