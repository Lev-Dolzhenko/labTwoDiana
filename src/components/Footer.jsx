import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__columns">
          <ul className="footer__column">
            <li className="footer__item footer__item_title">Reference links</li>
            <li className="footer__item">
              <a href="#!">Privacy policy</a>
            </li>
            <li className="footer__item">
              <a href="#!">Terms of use</a>
            </li>
            <li className="footer__item">
              <a href="#!">Delivery and Return</a>
            </li>
            <li className="footer__item">
              <a href="#!">Frequently Asked Questions</a>
            </li>
          </ul>
          <ul className="footer__column">
            <li className="footer__item footer__item_title">
              Legal information
            </li>
            <li className="footer__item">
              <a href="#!">Copyright</a>
            </li>
            <li className="footer__item">
              <a href="#!">Legal name</a>
            </li>
            <li className="footer__item">
              <a href="#!">Registration number</a>
            </li>
          </ul>
          <ul className="footer__column">
            <li className="footer__item footer__item_title">
              Navigation links
            </li>
            <li className="footer__item">
              <a href="#!">Main</a>
            </li>
            <li className="footer__item">
              <a href="#!"> About us</a>
            </li>
            <li className="footer__item">
              <a href="#!">Contacts</a>
            </li>
            <li className="footer__item">
              <a href="#!">The blog</a>
            </li>
          </ul>
          <ul className="footer__column">
            <li className="footer__item footer__item_title">
              Information about the company
            </li>
            <li className="footer__item">
              <a href="#!">Geologists 4K2</a>
            </li>
            <li className="footer__item">
              <a href="#!">+7 (999) 999 99 99</a>
            </li>
            <li className="footer__item">
              <a href="#!">mail@yandex.ru</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
