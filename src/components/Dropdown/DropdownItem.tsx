import React from "react";
import cn from "classnames";

const DropdownItem = ({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <li
      onClick={onClick}
      className={cn(
        className,
        "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
      )}
    >
      {text}
    </li>
  );
};

export default DropdownItem;
