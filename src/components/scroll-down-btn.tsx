"use client";

import { ChevronsDown } from "lucide-react";

const ScrollDownBtn = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // 현재 뷰포트 높이만큼 아래로 스크롤
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  return (
    <div
      className="text-gray-300 hover:text-gray-700 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
      onClick={scrollDown}
    >
      <ChevronsDown size={44} />
    </div>
  );
};

export default ScrollDownBtn;
