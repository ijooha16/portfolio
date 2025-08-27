"use client";

import { useState } from "react";
import ReloadBtn from "../reload-btn";
import { Menu } from "lucide-react";
import { Navigation } from "./navigation-bar";
import Links from "./links";
import Icon from "../common/icon";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const sideWidth = { lg: "w-[280px]", sm: "w-10" };
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      <div
        className={`z-10000 fixed flex justify-between items-center top-0 left-0 w-screen px-4 lg:px-20 backdrop-blur-sm bg-white/60 shadow-xl shadow-[#00000003] py-4 lg:py-8`}
      >
        <div className={`${sideWidth.sm} lg:${sideWidth.lg}`}></div>
        <ReloadBtn />
        <div
          className={`${sideWidth.sm} lg:${sideWidth.lg} flex justify-end items-center gap-12`}
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
