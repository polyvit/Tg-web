import React from "react";
import logo from "../../assets/logo-text.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-10 mb-10 border-b-[5px] border-solid border-custom-red">
      <img src={logo.src} alt="logo" />
      <button>
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
      </button>
    </div>
  );
};

export default Header;
