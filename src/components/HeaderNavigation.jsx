import React from "react";

const HeaderNavigation = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item">
          <a className="header__link" href="#!">
            About
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#!">
            Show
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#!">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
