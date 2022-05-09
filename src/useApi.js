import React, { useEffect, useState } from "react";
import { MakeAPI } from "./apiConfig";

const useApi = (entity, lang = "es", pagination = 1) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(pagination);

  const getData = async () => {
    setLoading(true);
    setError(null);

    const response = await MakeAPI.tryGet(entity, lang, page);

    if (response.error) {
      setError(response.error);
    } else {
      setMovies(response.results);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return { movies, loading, error, setPage };
};

export default useApi;
