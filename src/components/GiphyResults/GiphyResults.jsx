import { useSelector } from "react-redux";
import * as React from "react";
import GifCard from "../GifCard/GifCard";

const GiphyResults = () => {
const results = useSelector((store) => store.input);

  if (results.data) {
    return (
      <>
        <div>
          {results.data.map((gif) => {
            return (
            <GifCard gif={gif} key={gif.id}/>
            );
          })}
        </div>
      </>
    );
  }
  return <p>Nothing to show here!</p>;
};

export default GiphyResults
