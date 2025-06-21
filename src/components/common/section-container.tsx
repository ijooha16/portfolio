import { ReactNode } from "react";

const SectionContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`flex flex-col py-10 md:py-20 items-center gap-10 px-4 max-w-screen ${className}`}>{children}</div>;
};

export default SectionContainer;
