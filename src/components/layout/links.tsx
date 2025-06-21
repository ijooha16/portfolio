import React, { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import PAGES, { Page } from "@/constants/pages.constant";

const Links = ({
  setOpen,
}: {
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const pages: Page[] = [PAGES.HOME, PAGES.ABOUT, PAGES.PROJECTS];

  return (
    <>
      {pages.map((page) => (
        <Link
          key={page}
          href={page}
          onClick={() => setOpen && setOpen(false)}
          className={`font-semibold
            ${
              pathname === page
                ? "text-back"
                : "text-gray-400 hover:text-black hover:scale-105 transition-default"
            }`}
        >
          {page === "/" ? "HOME" : page.slice(1, page.length).toUpperCase()}
        </Link>
      ))}
    </>
  );
};

export default Links;
