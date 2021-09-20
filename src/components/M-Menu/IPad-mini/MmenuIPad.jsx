import React from "react";

import "./MmenuIPad.css";

import MenuLangTick from "../pictures/menu-leng.svg";
import MMenuClose from "../pictures/menu-close.svg";
import iconTlg from "../pictures/icon-tlg.svg";
import iconFB from "../pictures/icon-fb.svg";
import iconInsta from "../pictures/icon-insta.svg";
import LogoImg from "../../../pictures/LogoDMHC.png";

export const MmenuIPad = ({ menuActive, stateActive }) => {
  const closeBtnonClickHandler = () => {
    document.body.classList.remove("overflow-hidden");
    stateActive(menuActive);
    const mMenu = document.querySelector(".m-menu");
    mMenu.style.display = "flex";
  };

  return (
    <div
      className="MmenuIPad"
      style={menuActive ? { display: "flex" } : { display: "none" }}>
      <div className="i-pad-m-menu-header">
        <div className="m-menu-lang">
          <span className="menu-lang">Eng</span>
          <img
            src={MenuLangTick}
            alt="menu-langTick"
            className="menu-lang-tick"
          />
        </div>
        <img
          src={MMenuClose}
          alt="m-menu-close"
          className="m-menu-close"
          onClick={closeBtnonClickHandler}
        />
      </div>
      <span className="m-menu-head">
        Центр підготовки гуманітарного розмінування
        <img className="logo-img-mMenu" src={LogoImg} alt="logo" />
      </span>
      <div className="i-pad-m-menu-body">
        <div className="m-menu-elements">
          <span className="m-menu-elem elements-carpets">Про Центр</span>
          <span className="m-menu-elem elements-howItWorks">
            З'язатися з нами
          </span>
          <span className="m-menu-elem elements-support m-menu-active-elem">
            Технічна підтримка
          </span>
        </div>
      </div>
      <div className="i-pad-m-menu-footer">
        <span className="footer-text">Ми в соціальних мережах</span>
        <div className="footer-media-icons">
          <img src={iconTlg} alt="Tellegram" className="icon-tlg" />
          <img src={iconFB} alt="FaceBook" className="icon-fb" />
          <img src={iconInsta} alt="Instagrem" className="icon-insta" />
        </div>
      </div>
    </div>
  );
};
