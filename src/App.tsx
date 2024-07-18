import "./App.scss";
import Card from "./components/Card/Card";
import logo from "./assets/logo-text.svg";
import { getData } from "./db";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const data = getData();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  return (
    <div style={{ position: "relative", paddingBottom: "30px" }}>
      <div className="container">
        <div className="menu">
          <img src={logo.src} alt="" />
          {/* <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5" y="10" width="30" height="4" fill="#37383E"></rect>
              <rect x="5" y="18" width="30" height="4" fill="#37383E"></rect>
              <rect x="5" y="26" width="30" height="4" fill="#37383E"></rect>
            </svg>
          </button> */}
        </div>
        <div className="cards">
          {data.map((el) => (
            <Card
              key={el.title}
              {...el}
              setIsOpen={setIsOpen}
              setCurrentModal={setCurrentModal}
            />
          ))}
        </div>
      </div>
      {isOpen && <Modal src={currentModal} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
