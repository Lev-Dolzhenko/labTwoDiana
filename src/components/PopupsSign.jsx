import React, { useState } from "react";
import closeIcon from "./../images/closeIcon.svg";

const PopupsSign = ({
  isPopupSign,
  setisPopupSign,
  accounts,
  setAccounts,
  setName,
}) => {
  const [log, setLog] = useState("");
  const [pass, setPass] = useState("");

  const regUser = (e, log, pass) => {
    e.preventDefault();
    setName(log);
    setAccounts([
      ...accounts,
      {
        name: log,
        pass: pass,
      },
    ]);
    setName(log);
    setisPopupSign(true);
  };

  return (
    <div className={`popup--log ${isPopupSign ? "none" : ""}`}>
      <h4>SignIn</h4>
      <input
        onChange={(e) => setLog(e.target.value)}
        placeholder="Your Email"
        type="text"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        placeholder="Your Password"
        type="password"
      />
      <button onClick={(e) => regUser(e, log, pass)}>Sign In</button>
      <button
        onClick={() => setisPopupSign(true)}
        className="popup--log__button--close"
      >
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
};

export default PopupsSign;
