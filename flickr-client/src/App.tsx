import React from "react";
import "./styles.css";

import FlickrSearch from "./components/SearchImages";

export default function App() {
  return (
    <div className="App">
      <h1>Flickr Search</h1>
      <p>Use the input below to type in your search query.</p>
      <FlickrSearch />
    </div>
  );
}
