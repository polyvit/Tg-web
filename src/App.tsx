import "./App.scss";
import Card from "./components/Card/Card";
import { getData } from "./db";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const data = getData();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  return (
    <>
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
      {isOpen && <Modal src={currentModal} setIsOpen={setIsOpen} />}
    </>
  );
}

export default App;
