import React, { useState } from "react";
import { getData } from "../db";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import MainLayout from "../components/MainLayout";

const data = getData();

const BooksPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  return (
    <MainLayout>
      <div className="cards">
        {data.map((el) => (
          <Card
            {...el}
            setIsOpen={setIsOpen}
            setCurrentModal={setCurrentModal}
          />
        ))}
      </div>
      {isOpen && <Modal src={currentModal} setIsOpen={setIsOpen} />}
    </MainLayout>
  );
};

export default BooksPage;
