import React, { useEffect } from "react";
import Slider from "react-slick";
import useApi from "../../hooks/useApi";
import Card from "../Card/Card";
import { settingsSlider } from "./settings";

const Carousel = ({ entity, title }) => {
  const [values, loading, error] = useApi(entity);

  return (
    <>
      <div>
        <h1
          style={{
            color: "white",
          }}
        >
          {title}
        </h1>
      </div>
      <Slider {...settingsSlider}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          values.map((value) => (
            <Card
              key={value.id}
              title={value.title || value.name}
              imgPath={value.backdrop_path}
            />
          ))
        )}
      </Slider>
    </>
  );
};

export default Carousel;
