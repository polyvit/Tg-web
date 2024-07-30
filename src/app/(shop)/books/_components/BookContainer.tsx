"use client";
import { useState } from "react";
import Modal from "../../../../components/Modal";
import BookInfo from "../../../../components/BookInfo/BookInfo";

const BookContainer = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  return (
    <>
      <div className="px-[20px]">
        <BookInfo
          data={product}
          setCurrentModal={setCurrentModal}
          setIsOpen={setIsOpen}
        />
      </div>
      {isOpen && <Modal src={currentModal} setIsOpen={setIsOpen} />}
    </>
  );
};

export default BookContainer;
