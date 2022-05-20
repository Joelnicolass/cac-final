import React, { useEffect, useState } from "react";
import { apiBuilder, apiLanguage, apiQuality } from "../apiConfig";
import { randomIndex } from "../utils/utils";

const useApi = (entity, lang = apiLanguage.spanish, pagination = 1) => {
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(pagination);

  const getData = async () => {
    setIsLoading(true);
    setError(null);

    const res = await apiBuilder.tryGet(entity, lang, page);

    if (res.length === 0) {
      setError("Error al cargar los datos");
    } else {
      setValues(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const nextPage = () => {};
  const previusPage = () => {};

  const [randomValue, setRandomValue] = useState(null);
  const [randomImg, setRandomImg] = useState(null);

  const getRandomValue = () => {
    if (values.length === 0) {
      return;
    } else {
      const selectedValue = values[randomIndex(0, values.length - 1)];
      setRandomValue(selectedValue);
      const backgroundImage = apiBuilder.tryGetImg(
        selectedValue.backdrop_path,
        apiQuality.backdropLarge
      );
      setRandomImg(backgroundImage);
    }
  };

  useEffect(() => {
    getRandomValue();
  }, [values]);

  return [values, isLoading, error, randomValue, randomImg];
};

export default useApi;
