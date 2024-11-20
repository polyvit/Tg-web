"use client";
import React, { ReactNode, useEffect } from "react";

interface IModalProps {
  children: ReactNode;
  setIsOpen(x: boolean): void;
  className: string;
}

const Modal: React.FC<IModalProps> = ({ children, setIsOpen, className }) => {
  useEffect(() => {
    if (document.querySelector("iframe")) {
      document.querySelector("iframe")?.scrollBy(0, 300);
    }
  }, []);

  return (
    <div className="h-screen top-0 fixed w-screen z-9992 bg-bg-gray">
      <div className="bg-white z-9994 w-[98%] h-[98%] bottom-0 left-0 top-0 right-0 absolute m-auto rounded-[20px] p-[10px]">
        <div className="h-full truncate">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-2.5 text-5xl"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
