import React, { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-bold text-2xl w-full text-center">{children}</div>
  );
};

export default SectionTitle;
