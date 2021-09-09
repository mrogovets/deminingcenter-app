import React from "react";
import { Card } from "./card/card";
import "./cards.css";
export const Cards = () => {
  return (
    <div className="cards-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
