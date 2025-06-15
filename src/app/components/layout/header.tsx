"use client";

import { usePathname } from "next/navigation";
import PAGES from "@/app/constants/pages.constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResetBtn from "../reset-btn";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const pages = [PAGES.HOME, PAGES.ABOUT, PAGES.PROJECTS];
  const sideWidth = "w-[280px]";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-1000 fixed flex justify-between items-center top-0 left-0 w-screen py-8 px-20 bg-white shadow-xl shadow-[#00000003]
    ${visible ? "animate-slideInBottom" : "animate-slideInTop"}`}
    >
      <div className={sideWidth}></div>
      <ResetBtn />
      <div
        className={`${sideWidth} flex justify-end items-center gap-12 font-semibold`}
      >
        {pages.map((page) => (
          <Link
            key={page}
            href={page}
            className={
              pathname === page
                ? "text-back"
                : "text-gray-400 hover:text-black hover:scale-105 transition-default"
            }
          >
            {page === "/" ? "HOME" : page.slice(1, page.length).toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
