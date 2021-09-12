import React from "react";

import "./card.css";

export const Card = ({ img }) => {
  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-image">
          <img src={img} alt="img" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information.
            </p>
          </div>
          <div className="card-action">
            <a href="#!">Докладніше</a>
          </div>
        </div>
      </div>
    </div>
  );
};
