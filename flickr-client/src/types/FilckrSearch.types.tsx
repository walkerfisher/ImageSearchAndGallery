export declare interface APIResponse {
  photos: {
    photo: Array<APIPhoto>;
  }
}

export declare interface APIPhoto {
  id: string;
  owner: string;
  secret: string;
  title: string;
  server: string;
  // "farm": 0,
  // "title": "Stilo Car Institucional",
}