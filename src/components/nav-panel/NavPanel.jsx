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
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <div className="logo-imgs">
              <img className="logo-img" src={LogoImg} alt="logo" />
              <h5>Центр підготовки гуманітарного розмінування</h5>
            </div>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Про Центр</a>
            </li>
            <li>
              <a href="badges.html">З'язатися з нами</a>
            </li>
            {/* <!-- Dropdown Trigger --> */}
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                Керівні документи
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
