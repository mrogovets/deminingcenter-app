import React, { useEffect } from "react";
import "./NavPanel.css";

import M from "materialize-css";
import LogoImg from "../../pictures/LogoDMHC.png";

export const NavPanel = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  });
  return (
    <div>
      {/* <!-- Dropdown Structure --> */}
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
      <nav className="nav-main">
        <div className="nav-logo">
          <a href="#!" className="brand-logo">
            <div className="logo-imgs">
              <img className="logo-img" src={LogoImg} alt="logo" />
              <h5 className="logo-text">
                Центр підготовки гуманітарного розмінування
              </h5>
            </div>
          </a>
        </div>
        <ul className="right nav-menu">
          <li>
            <a href="#!">Про Центр</a>
          </li>
          <li>
            <a href="#!">З'язатися з нами</a>
          </li>
          {/* <!-- Dropdown Trigger --> */}
          <li>
            <a className="dropdown-trigger" href="#!" data-target="dropdown1">
              Керівні документи
              <i className="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
