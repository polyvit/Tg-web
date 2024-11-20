"use client";
import { useState } from "react";
import Modal from "../../../../../components/Modal";
import BookInfo from "../../../../../components/BookInfo/BookInfo";
import { IMongoBook } from "../../../../../models/Book";

const BookContainer = ({ product }: { product: IMongoBook }) => {
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
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <iframe
            src={currentModal}
            className="w-full h-full truncate mt-10"
          ></iframe>
        </Modal>
      )}
    </>
  );
};

export default BookContainer;
