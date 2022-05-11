import React, { useState, useEffect } from "react";
import { apiEntity } from "./apiConfig";
import useApi from "./hooks/useApi";
import styles from "./App.module.css";

function App() {
  const [movies, loading, error, handleNext] = useApi(apiEntity.popularMovies);

  const test = () => {
    console.log(movies);
  };

  return (
    <>
      <h1 className={`${styles.title} ${loading && styles.big}`}>Peliculas</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>{error.toString()}</p>}

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
        </div>
      ))}
      <button onClick={test}>test</button>
      <button onClick={handleNext}>+</button>
    </>
  );
}

export default App;
