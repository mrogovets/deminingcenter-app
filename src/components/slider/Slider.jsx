import React, { useEffect } from "react";

import "./Slider.css";

import M from "materialize-css";

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
          <img src="https://lorempixel.com/800/400/food/1" alt="sliderImg1" />
        </a>
        <a className="carousel-item" href="#two!">
          <img src="https://lorempixel.com/800/400/food/2" alt="sliderImg2" />
        </a>
        <a className="carousel-item" href="#three!">
          <img src="https://lorempixel.com/800/400/food/3" alt="sliderImg3" />
        </a>
        <a className="carousel-item" href="#four!">
          <img src="https://lorempixel.com/800/400/food/4" alt="sliderImg4" />
        </a>
      </div>
    </div>
  );
};
