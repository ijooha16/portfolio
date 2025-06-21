import React, { ReactNode } from "react";

const Icon = ({
  children,
  onClick,
  active = true,
}: {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "" : "text-gray-300"
      } cursor-pointer hover:bg-hover p-2 rounded-full`}
    >
      {children}
    </div>
  );
};

export default Icon;
