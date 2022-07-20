import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor) => (
    <div key={actor.name}>
      <h2 >{actor.name}</h2>

      <p>Movies:</p>
      <ul>
        {(actor.movies).map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <>
      <h1>Actors Page</h1>
      {actorsList}
    </>
  );
  
}

export default Actors;
