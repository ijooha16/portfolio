"use client";

import { useEffect, useState } from "react";
import ReloadBtn from "../reload-btn";
import { Menu } from "lucide-react";
import { Navigation } from "./navigation-bar";
import Links from "./links";
import Icon from "../common/icon";

const Header = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sideWidth = { md: "w-[280px]", sm: "w-10" };

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 1100);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 10) {
        setVisible(true);
      } else {
        setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`z-10000 fixed flex justify-between items-center top-0 left-0 w-screen px-4 md:px-20 bg-white shadow-xl shadow-[#00000003]
      ${open ? "" : visible ? "animate-slideInBottom" : "animate-slideInTop"}
      ${isMobile ? "py-4" : "py-8"}`}
      >
        <div className={`${sideWidth.sm} md-${sideWidth.md}`}></div>
        <ReloadBtn />
        <div
          className={`${sideWidth.sm} md-${sideWidth.md} flex justify-end items-center gap-12`}
        >
          {!isMobile ? (
            <Links />
          ) : (
            <>
              <Icon onClick={() => setOpen(!open)}>
                <Menu />
              </Icon>
            </>
          )}
        </div>
      </div>
      {isMobile && <Navigation open={open} setOpen={setOpen} />}
    </>
  );
};

export default Header;
