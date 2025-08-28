import { ReactNode } from "react";

const SectionContainer = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`py-[112px] lg:py-[172px] overflow-hidden flex flex-col items-center gap-10 px-4 w-full max-w-screen ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
