"use client";
import Link from "next/link";
import cn from "classnames";
import { ComponentProps, ReactNode, useState } from "react";

export const Nav = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden  focus:outline-none  focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        id="navbar-default"
        className={cn(" w-full md:block md:w-auto", {
          ["hidden"]: !isMenuOpen,
        })}
      >
        <ul className="font-medium text-center md:text-left flex flex-col md:p-0 mt-4 border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {children}
        </ul>
      </div>
    </>
  );
};

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className">
) => {
  return (
    <Link
      className={cn(
        "block py-2 px-3 rounded md:bg-transparent  md:p-0 dark:text-white  hover:text-custom-red"
      )}
      {...props}
    />
  );
};
