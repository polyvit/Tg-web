import React, { ReactNode } from "react";
import cn from "classnames";

interface IProps {
  menuList: Record<string, ReactNode[]>;
  isOpen: boolean;
  onClick: () => void;
}

const DropdownMenu: React.FC<IProps> = ({ menuList, onClick, isOpen }) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      <div
        id="dropdownDots"
        className={cn(
          "z-1000 absolute top-[-50px] right-[40px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",
          { ["hidden"]: !isOpen }
        )}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          {menuList.above.map((item) => item)}
        </ul>
        <div className="py-2">
          <ul>{menuList.below.map((item) => item)}</ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
