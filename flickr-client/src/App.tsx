import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Flickr Search</h1>
      <p>Use the input below to type in your search query.</p>
      <input type="text" placeholder="Flickr Search" />
      <div className="App-SearchResults">
        {/* render Flickr thumbnails here */}
      </div>
    </div>
  );
}
