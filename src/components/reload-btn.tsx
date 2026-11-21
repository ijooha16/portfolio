"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ReloadBtn = () => {
  const [hovered, setHovered] = useState(false);
  const [showMiddle, setShowMiddle] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const tapTimer = useRef<NodeJS.Timeout | null>(null);

  const canHover = useMediaQuery("(hover: hover)");

  useEffect(() => {
    setIsClient(true); // 클라이언트에서만 렌더링 시작
    return () => {
      if (tapTimer.current) clearTimeout(tapTimer.current);
    };
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

  const goHome = () => {
    if (pathname !== "/") router.push("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    if (canHover) {
      goHome();
      return;
    }
    setHovered(true);
    if (tapTimer.current) clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => {
      setHovered(false);
      goHome();
    }, 1100);
  };

  if (!isClient) return null;

  return (
    <button
      type="button"
      aria-label="홈으로"
      onMouseEnter={() => canHover && setHovered(true)}
      onMouseLeave={() => canHover && setHovered(false)}
      onClick={handleClick}
      className="flex items-center text-xl text-gray-500 font-semibold cursor-pointer whitespace-nowrap max-sm:scale-75 origin-center"
    >
      {/* 왼쪽: <JuhaYoon */}
      <span
        className={`transition-transform duration-500 ease-in-out z-10 ${
          hovered
            ? "-translate-x-2 text-primary transition-default"
            : "translate-x-18"
        }`}
      >
        &lt;JuhaYoon
      </span>

      {/* 가운데: onClick={HOME} */}
      <span
        className={`transition-opacity duration-200 ease-in-out ${
          showMiddle
            ? "opacity-100 from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent transition-default"
            : "opacity-0"
        }`}
      >
        &nbsp;onClick=&#123;HOME&#125;
      </span>

      {/* 오른쪽: /> */}
      <span
        className={`transition-transform duration-500 ease-in-out z-10 ${
          hovered ? "translate-x-2 text-secondary" : "-translate-x-19"
        }`}
      >
        /&gt;
      </span>
    </button>
  );
};

export default ReloadBtn;
