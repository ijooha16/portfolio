"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ReloadBtn = () => {
  const [hovered, setHovered] = useState(false);
  const [showMiddle, setShowMiddle] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // 클라이언트에서만 렌더링 시작
  }, []);

  const isMobile = useMediaQuery("(max-width: 1024px)");

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

  if (!isClient) return null;

  return (
    <>
      {isMobile ? (
        <Link
          href="/"
          className="font-semibold hover:from-primary hover:to-secondary text-lg hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
        >
          {"<JuhaYoon />"}
        </Link>
      ) : (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => router.refresh()}
          className="flex items-center text-xl text-gray-500 font-semibold"
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
            className={`transition-transform duration-500 ease-in-out z-10 ${
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
