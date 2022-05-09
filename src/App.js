import React, { useState, useEffect } from "react";
import axios from "axios";
import { MakeAPI } from "./apiConfig";
import useApi from "./useApi";

function App() {
  const { movies, loading, error, setPage } = useApi("topRatedMovies");

  return (
    <>
      <h1>Hello World</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.poster_path} alt={movie.title} />
        </div>
      ))}
    </>
  );
}

export default App;
