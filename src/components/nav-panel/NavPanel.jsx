import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavPanel.css";

import M from "materialize-css";
import LogoImg from "../../pictures/LogoDMHC_new.png";

import { MmenuIPad } from "../M-Menu/IPad-mini/MmenuIPad.jsx";
import { About } from "../../pages/about";
import { Contacts } from "../../pages/contacts";

// Humanitarian Demining Training Center” Limited Liability Company

export const NavPanel = () => {
  const [menuActive, setmenuActive] = useState(false);

  const stateMenuActive = (currentMenuActive) => {
    setmenuActive(false);
  };

  const menuClickHandler = () => {
    if (!menuActive) {
      document.body.classList.add("overflow-hidden");
      setmenuActive(true);
      const mMenu = document.querySelector(".m-menu");
      mMenu.style.display = "none";
    }
  };

  useEffect(() => {
    const elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  });
  return (
    <Router>
      <div>
        {/* <!-- Dropdown Structure --> */}
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="/documents-MoD">Міністерства оборони України</Link>
          </li>
          <li>
            <Link to="/documents-MoE">Міністерство освіти і науки України</Link>
          </li>
          <li className="divider"></li>
          <li>
            <Link to="/documents-our">Внутрішні документи Центру</Link>
          </li>
        </ul>
        <nav className="nav-main">
          <div className="nav-logo">
            <Link to="/" className="brand-logo">
              <div className="logo-imgs">
                <img className="logo-img" src={LogoImg} alt="logo" />
                <h5 className="logo-text">
                  Центр підготовки гуманітарного розмінування
                </h5>
              </div>
            </Link>
          </div>
          <ul className="right nav-menu">
            <li>
              <Link to="/about">Про Центр</Link>
            </li>
            <li>
              <Link to="/contacts">З'язатися з нами</Link>
            </li>
            {/* <!-- Dropdown Trigger --> */}
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                Керівні документи
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
          <button className="m-menu" onClick={menuClickHandler}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </nav>
        <MmenuIPad
          menuActive={menuActive}
          stateActive={() => stateMenuActive(menuActive)}
        />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};
