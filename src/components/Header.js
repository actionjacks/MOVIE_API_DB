import React from "react";
import "../style/Header.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <ArrowForwardIosIcon />
          <p>bla</p>
        </div>
        <div className="header__icon">
          <ArrowLeftIcon />
          <p>bla</p>
        </div>
        <div className="header__icon">
          <ArrowRightAltIcon />
          <p>bla</p>
        </div>
        <div className="header__icon">
          <ArrowRightIcon />
          <p>bla</p>
        </div>
        <div className="header__icon">
          <ArrowUpwardIcon />
          <p>bla</p>
        </div>
      </div>
      <img
        src="https://cdn-images-1.medium.com/max/208/1*I-RzA2sopZvV3P3pxnGxxQ@2x.png"
        alt=""
      />
    </div>
  );
}

export default Header;
