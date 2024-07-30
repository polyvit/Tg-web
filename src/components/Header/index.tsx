import React, { ReactNode } from "react";
import logo from "../../assets/logo-text.svg";
import Link from "next/link";
import { ROUTES } from "../../utils/routes";

const Header = ({
  children,
  logoLink = ROUTES.HOME,
}: {
  children: ReactNode;
  logoLink?: string;
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center px-5 py-10 mb-10 border-b-[5px] border-solid border-custom-red">
      <Link href={logoLink}>
        <img src={logo.src} alt="logo" />
      </Link>
      {children}
    </div>
  );
};

export default Header;
