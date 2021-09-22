import React from "react";

import "./card.css";

export const Card = ({ img, title, linkDoc }) => {
  const renderHandler = () => {
    if (linkDoc === "") {
      return (
        <div className="card-action">
          <a href="#!">Докладніше</a>
        </div>
      );
    } else {
      return (
        <div className="card-action">
          <a href={linkDoc} target="_blank" rel="noreferrer">
            Докладніше
          </a>
        </div>
      );
    }
  };
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
          {renderHandler()}
        </div>
      </div>
    </div>
  );
};
