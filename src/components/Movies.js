import React from "react";
import { movies } from "../data";

function Movies() {
  const MoviesList = movies.map((movie) => (
    <div key={movie.title}>
      <h2 >{movie.title}</h2>
      <p>Time: {movie.time}</p>
      {/* <br/> */}
      <p>Genres:</p>
      <ul>
        {(movie.genres).map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <>
      <h1>Movies Page</h1>
      {MoviesList}
    </>
  );
}

export default Movies;
