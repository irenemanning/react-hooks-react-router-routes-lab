import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie)=>{
        return (
          <div>
            <h2>{movie.title}</h2>
            <h4>Run Time {movie.time} minutes</h4>
            <h3>Genres:</h3>
            <ul>{movie.genres.map((genre)=> <li key={genre}>{genre}</li>)}</ul>
          </div>
        )
      })}
    </div>);
}

export default Movies;
