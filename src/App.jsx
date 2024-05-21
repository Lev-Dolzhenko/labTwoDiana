import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Popup from "./components/Popup";
import PopupLog from "./components/PopupLog";
import PopupsSign from "./components/PopupsSign";

function App() {
  const [saved, setSaved] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [isPopupLog, setIsPopupLog] = useState(true);
  const [isPopupSign, setisPopupSign] = useState(true);
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState([
    { name: "Leo", pass: "123" },
    { name: "Pavel", pass: "123" },
  ]);
  return (
    <>
      <Header
        setIsPopupLog={setIsPopupLog}
        setisPopupSign={setisPopupSign}
        setIsPopup={setIsPopup}
        name={name}
        setName={setName}
      />
      <Main />
      <Shop setSaved={setSaved} />
      <Popup
        setSaved={setSaved}
        setIsPopup={setIsPopup}
        isPopup={isPopup}
        saved={saved}
      />
      <PopupLog
        isPopupLog={isPopupLog}
        accounts={accounts}
        setAccounts={setAccounts}
        setIsPopupLog={setIsPopupLog}
        setName={setName}
      />
      <PopupsSign
        accounts={accounts}
        setAccounts={setAccounts}
        isPopupSign={isPopupSign}
        setisPopupSign={setisPopupSign}
        setName={setName}
      />
      <Footer />
    </>
  );
}

export default App;
