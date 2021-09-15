import React from "react";

import "./card.css";

export const Card = ({ img, title }) => {
  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image">
          <img className="cardImg" src={img} alt="img" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{title}</p>
          </div>
          <div className="card-action">
            <a href="#!">Докладніше</a>
          </div>
        </div>
      </div>
    </div>
  );
};
