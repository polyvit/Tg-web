import React from "react";
import logo from "../../assets/logo-text.svg";

const Header = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-between items-center px-5 py-10 mb-10 border-b-[5px] border-solid border-custom-red">
      <img src={logo.src} alt="logo" />
      {children}
    </div>
  );
};

export default Header;
