import React, { useEffect, useState } from "react";
import { apiEntity, apiBuilder } from "../../apiConfig";
import useApi from "../../hooks/useApi";
import styles from "./Banner.module.css";

const Banner = () => {
  const [movie, loading, error] = useApi(apiEntity.popularMovies);

  const [backImg, setBackImg] = useState(null);

  const randomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (movie) {
      const url = apiBuilder.tryGetPoster(
        movie[randomIndex(0, 5)]?.poster_path
      );
      setBackImg(url);
    }
  }, [movie]);

  return (
    <>
      <div
        className={styles["banner-container"]}
        style={
          loading
            ? { backgroundImage: "none" }
            : {
                backgroundImage: `url(${backImg})`,
              }
        }
      >
        <div>
          <h1>PELICULA</h1>
        </div>
        <div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dolore consequuntur placeat aperiam quisquam rerum quo? Hic ea
            exercitationem laudantium ducimus consequatur soluta sequi, quisquam
            dicta et, dolore nesciunt rem.
          </h2>
        </div>
        <div>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            ipsum aliquid voluptas labore sed ipsa blanditiis debitis facilis
            ducimus, asperiores praesentium, culpa facere rem iure voluptatibus
            ex aut porro nisi?
          </h2>
        </div>
        <button>MAS INFORMACION</button>
        <button>REPRODUCIR</button>
      </div>
    </>
  );
};

export default Banner;
