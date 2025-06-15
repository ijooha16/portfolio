import { ReactNode } from "react";

const SectionContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`flex flex-col py-20 items-center gap-10 ${className}`}>{children}</div>;
};

export default SectionContainer;
