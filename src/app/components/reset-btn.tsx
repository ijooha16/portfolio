"use client";

import { useState, useEffect } from "react";

const ResetBtn = () => {
  const [hovered, setHovered] = useState(false);
  const [showMiddle, setShowMiddle] = useState(false);

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
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center text-xl text-gray-400 font-semibold"
    >
      {/* 왼쪽: <JuhaYoon */}
      <span
        className={`transition-transform duration-500 ease-in-out bg-white z-10 ${
          hovered ? "-translate-x-2 text-primary" : "translate-x-18"
        }`}
      >
        &lt;JuhaYoon
      </span>

      {/* 가운데: onClick={reload} */}
      <span
        className={`transition-opacity duration-200 ease-in-out ${
          showMiddle ? "opacity-100 from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent" : "opacity-0"
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
  );
};

export default ResetBtn;
