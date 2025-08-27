import React, { ReactNode } from "react";

const Icon = ({
  children,
  onClick,
  active = true,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "" : "text-gray-300"
      } ${className} cursor-pointer hover:bg-hover p-2 rounded-full`}
    >
      {children}
    </div>
  );
};

export default Icon;
