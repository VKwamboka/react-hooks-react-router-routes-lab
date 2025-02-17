import React from "react";
import { directors } from "../data";

function Directors() {
  const DirectorsList = directors.map((director) => (
    <div key={director.name}>
      <h2 >{director.name}</h2>

      <p>Movies:</p>
      <ul>
        {(director.movies).map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <>
      <h1>Directors Page</h1>
      {DirectorsList}
    </>
  );
}

export default Directors;
