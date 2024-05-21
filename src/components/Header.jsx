import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import logotype from "../images/logotype.svg";

const Header = ({
  setIsPopup,
  setIsPopupLog,
  setisPopupSign,
  name,
  setName,
}) => {
  const logoutUser = () => {
    setName("");
  };
  return (
    <section className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderNavigation />
          <div className="header__logotype">
            <a href="#!">
              <img src={logotype} alt="logotype" />
            </a>
            <button onClick={() => logoutUser()}>{name}</button>
          </div>
          <div className="header__account">
            <button
              onClick={() => setisPopupSign(false)}
              className="header__account_button"
              href="#!"
            >
              Sign In
            </button>
            <button
              className="header__account_button"
              onClick={() => setIsPopupLog(false)}
              href="#!"
            >
              Login
            </button>
            <button
              onClick={() => setIsPopup(true)}
              className="header__account_button"
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
