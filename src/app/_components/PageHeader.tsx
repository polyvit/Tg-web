import React, { ReactNode } from "react";

const PageHeader = ({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) => {
  return (
    <div className="flex flex-wrap gap-y-5 justify-between items-center mb-8">
      <h2 className="text-4xl font-bold dark:text-white">{text}</h2>
      {children}
    </div>
  );
};

export default PageHeader;
