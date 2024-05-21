import React from "react";
import closeIcon from "../images/closeIcon.svg";
import deleteIcon from "../images/deleteIcon.svg";

const Popup = ({ setSaved, saved, isPopup, setIsPopup }) => {
  return (
    <div className={`popup ${isPopup ? "" : "none"}`}>
      <div className="popup__wrapper">
        <ul className="popup__list">
          {saved.map((savedItem) => (
            <li className="popup__item">
              <div className="popup__item_img">
                <img src={savedItem.image} alt="" />
              </div>
              <div className="popup__item_title">
                <span>{savedItem.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="popup__button popup__button_close">
        <div>
          <button onClick={() => setSaved([])}>
            <img src={deleteIcon} alt="" />
          </button>
        </div>{" "}
        <div>
          <button onClick={(prev) => setIsPopup(!prev)}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="popup__button popup__button_buy">
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Popup;
