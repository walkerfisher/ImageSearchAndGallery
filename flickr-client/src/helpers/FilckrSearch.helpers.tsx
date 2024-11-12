export const getImageURL = (image: APIPhoto) => {
  return `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`;
};