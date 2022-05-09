import axios from "axios";
import { useEffect } from "react";

export const API = {
  baseUrl: "https://api.themoviedb.org/3",
  apiKey: "?api_key=4731f843be0ef719c516f748dad07f59",
  entity: {
    topRatedMovies: "/movie/top_rated",
    topRatedTv: "/tv/top_rated",
    popularMovies: "/movie/popular",
    popularTv: "/tv/popular",
  },
  language: {
    en: "&language=en-US",
    es: "&language=es-ES",
  },
  pagination: "&page=",
  imageUrl: "https://image.tmdb.org/t/p",
  quality: {
    posterSmall: "/w200",
    posterMedium: "/w300",
    posterLarge: "/w500",
    backdropSmall: "/w300",
    backdropMedium: "/w780",
    backdropLarge: "/w1280",
  },
};

export const tryGetTopRatedMovies = async (apiKey, page) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated/" +
        apiKey +
        "&language=es-ES&page=" +
        page
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

//////////////////////////////////////////////////////////////////////////

export const MakeAPI = {
  tryGet: async (entity, lang = "es", page = 1) => {
    const url = `${API.baseUrl}${API.entity[entity]}${API.apiKey}${API.language[lang]}${API.pagination}${page}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  tryGetById: async (entity, id, lang = "es") => {
    const url = `${API.baseUrl}${API.entity[entity]}/${id}${API.apiKey}${API.language[lang]}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

/* 
export const services = {
  getTopRatedMovies: async (page) => {
    const response = await API.tryGet('topRatedMovies', 'es', page);
    return response;
  },
};
 */
/* 
export const services = {
    tryGetTopRatedMovies: async (page = 1) => {
      const url = createUrl.api(API.entity.topRatedMovies, "es", page);
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        return error;
      }
    },
  }; 
*/
