import React, { useState } from "react";
import closeIcon from "./../images/closeIcon.svg";

const PopupLog = ({
  isPopupLog,
  setIsPopupLog,
  accounts,
  setAccounts,
  setName,
}) => {
  const [pass, setPass] = useState("");
  const [log, setLog] = useState("");

  const authUser = (e, log, pass) => {
    e.preventDefault();
    for (let account of accounts) {
      if (account.name === log && account.pass === pass) {
        setName(log);
        console.log(log);
        setIsPopupLog(true);
        return
      }
    }
    alert('Такого пользователя не существует')
  };

  return (
    <div className={`popup--log ${isPopupLog ? "none" : ""}`}>
      <h4>Login</h4>
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
      <button onClick={(e) => authUser(e, log, pass)}>Login</button>
      <button
        onClick={() => setIsPopupLog(true)}
        className="popup--log__button--close"
      >
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
};

export default PopupLog;
