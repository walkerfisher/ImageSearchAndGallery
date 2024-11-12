import React from "react";
import "./styles.css";

import FlickrSearch from "./components/FlickrSearch";
import JumpInHeader from "./components/JumpInHeader";

export default function App() {
  return (
    <div className='App'>
      <JumpInHeader text='Flickr Search' />
      <FlickrSearch />
    </div>
  );
}
