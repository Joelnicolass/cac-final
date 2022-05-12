import React, { useState, useEffect } from "react";
import { apiBuilder, apiEntity } from "./apiConfig";
import styles from "./App.module.css";
import useApi from "./hooks/useApi";

function App() {
  const [movies, error, isLoading] = useApi(apiEntity.popularMovies);

  return (
    <>
      <h1>Peliculas</h1>
      {isLoading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
