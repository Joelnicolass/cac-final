import React, { useEffect, useState } from "react";
import { apiBuilder, apiLanguage } from "../apiConfig";

const useApi = (entity, lang = apiLanguage.spanish, pagination = 1) => {
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(pagination);

  const getData = async () => {
    setIsLoading(true);
    setError(null);

    const res = await apiBuilder.tryGet(entity, lang, page);

    if (res instanceof Error) {
      setError(res.message);
    } else {
      setValues(res);
    }
    setIsLoading(false);

    return res;
  };

  useEffect(() => {
    getData();
  }, [page]);

  const nextPage = () => {};
  const previusPage = () => {};

  return [values, isLoading, error];
};

export default useApi;
