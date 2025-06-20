"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const ReloadBtn = () => {
  const [hovered, setHovered] = useState(false);
  const [showMiddle, setShowMiddle] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 1100);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (hovered) {
      timeout = setTimeout(() => {
        setShowMiddle(true);
      }, 300);
    } else {
      setShowMiddle(false);
    }
    return () => clearTimeout(timeout);
  }, [hovered]);

  return (
    <>
      {isMobile ? (
        <Link href='/' className="font-semibold hover:from-primary hover:to-secondary text-lg hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent">{'<JuhaYoon />'}</Link>
      ) : (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => window.location.reload()}
          className="flex items-center text-xl text-gray-400 font-semibold"
        >
          {/* 왼쪽: <JuhaYoon */}
          <span
            className={`transition-transform duration-500 ease-in-out bg-white z-10 ${
              hovered
                ? "-translate-x-2 text-primary transition-default"
                : "translate-x-18"
            }`}
          >
            &lt;JuhaYoon
          </span>

          {/* 가운데: onClick={reload} */}
          <span
            className={`transition-opacity duration-200 ease-in-out ${
              showMiddle
                ? "opacity-100 from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent transition-default"
                : "opacity-0"
            }`}
          >
            &nbsp;onClick=&#123;reload&#125;
          </span>

          {/* 오른쪽: /> */}
          <span
            className={`transition-transform duration-500 ease-in-out bg-white z-10 ${
              hovered ? "translate-x-2 text-secondary" : "-translate-x-19"
            }`}
          >
            /&gt;
          </span>
        </div>
      )}
    </>
  );
};

export default ReloadBtn;
