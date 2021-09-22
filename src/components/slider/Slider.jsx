import React, { useEffect } from "react";

import "./Slider.css";

import M from "materialize-css";

import deminingCenter1 from "../../pictures/deminingCenter-01.jpg";
import deminingCenter2 from "../../pictures/deminingCenter-02.jpg";
import deminingCenter4 from "../../pictures/deminingCenter-04.jpg";
import deminingCenter5 from "../../pictures/deminingCenter-05.jpg";
import deminingCenter6 from "../../pictures/deminingCenter-06.jpg";
import deminingCenter7 from "../../pictures/deminingCenter-07.jpg";
import deminingCenter8 from "../../pictures/deminingCenter-08.jpg";
import deminingCenter9 from "../../pictures/deminingCenter-09.jpg";
import deminingCenter10 from "../../pictures/deminingCenter-10.jpg";
import deminingCenter11 from "../../pictures/deminingCenter-11.jpg";

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
        {/* <a className="carousel-item" href="#three!">
          <img
            className="carousel-img"
            src={deminingCenter3}
            alt="sliderImg3"
          />
        </a> */}
        <a className="carousel-item" href="#four!">
          <img
            className="carousel-img"
            src={deminingCenter4}
            alt="sliderImg4"
          />
        </a>
        <a className="carousel-item" href="#five!">
          <img
            className="carousel-img"
            src={deminingCenter5}
            alt="sliderImg5"
          />
        </a>
        <a className="carousel-item" href="#six!">
          <img
            className="carousel-img"
            src={deminingCenter6}
            alt="sliderImg6"
          />
        </a>
        <a className="carousel-item" href="#seven!">
          <img
            className="carousel-img"
            src={deminingCenter7}
            alt="sliderImg7"
          />
        </a>
        <a className="carousel-item" href="#eight!">
          <img
            className="carousel-img"
            src={deminingCenter8}
            alt="sliderImg8"
          />
        </a>
        <a className="carousel-item" href="#nine!">
          <img
            className="carousel-img"
            src={deminingCenter9}
            alt="sliderImg9"
          />
        </a>
        <a className="carousel-item" href="#ten!">
          <img
            className="carousel-img"
            src={deminingCenter10}
            alt="sliderImg11"
          />
        </a>
        <a className="carousel-item" href="#eleven!">
          <img
            className="carousel-img"
            src={deminingCenter11}
            alt="sliderImg11"
          />
        </a>
      </div>
    </div>
  );
};
