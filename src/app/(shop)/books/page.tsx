"use client";

import { useState } from "react";
import Card from "../../../components/Card/Card";
import { getData } from "../../../db";
import Modal from "../../../components/Modal/Modal";

const data = getData();

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  return (
    <>
      <div className="w-full my-0 mx-auto grid justify-center grid-cols-fill gap-x-[10px] gap-y-[10px]">
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
