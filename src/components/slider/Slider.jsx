import React, { useEffect } from "react";

import "./Slider.css";

import M from "materialize-css";

import deminingCenter1 from "../../pictures/deminingCenter-1.jpg";
import deminingCenter2 from "../../pictures/deminingCenter-2.jpg";
import deminingCenter3 from "../../pictures/deminingCenter-3.jpg";
import deminingCenter4 from "../../pictures/deminingCenter-4.jpg";

export const Slider = () => {
  useEffect(() => {
    const elem = document.querySelector(".carousel");
    const instance = M.Carousel.init(elem, {
      duration: 300,
      dist: -100,
      fullWidth: true,
      indicators: true,
    });
    setInterval(() => {
      instance.next();
    }, 10000);
  });
  return (
    <div>
      <div className="carousel carousel-slider">
        <a className="carousel-item" href="#one!">
          <img
            className="carousel-img"
            src={deminingCenter1}
            alt="sliderImg1"
          />
        </a>
        <a className="carousel-item" href="#two!">
          <img
            className="carousel-img"
            src={deminingCenter2}
            alt="sliderImg2"
          />
        </a>
        <a className="carousel-item" href="#three!">
          <img
            className="carousel-img"
            src={deminingCenter3}
            alt="sliderImg3"
          />
        </a>
        <a className="carousel-item" href="#four!">
          <img
            className="carousel-img"
            src={deminingCenter4}
            alt="sliderImg4"
          />
        </a>
      </div>
    </div>
  );
};
