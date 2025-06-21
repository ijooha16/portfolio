"use client";

import { useEffect, useRef, useState } from "react";

const TypingEffect = () => {
  const fullText = "몰입과 집요함으로 성장하고,\n사용자 경험을 고민하는 개발자 윤주하입니다.";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const i = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTyping = () => {
      timeoutRef.current = setTimeout(() => {
        let updatedText;

        if (!isDeleting) {
          // 타이핑 중
          updatedText = fullText.slice(0, i.current + 1);
          i.current++;

          setText(updatedText);

          if (i.current === fullText.length) {
            // 지우기 시작
            setTimeout(() => {
              setIsDeleting(true);
              startTyping();
            }, 0);
            return;
          }
          startTyping();
        } else {
          // 지우는 중
          updatedText = fullText.slice(0, i.current - 1);
          i.current--;

          setText(updatedText);

          if (i.current === 0) {
            // 타이핑 시작
            setTimeout(() => {
              setIsDeleting(false);
              startTyping();
            }, 0);
            return;
          }
          startTyping();
        }
      }, 60);
    };

    const delay = setTimeout(() => {
      startTyping();
    }, 1000);

    return () => {
      clearTimeout(delay);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isDeleting]);

  return <div className="text-gray-400 text-center text-description min-h-18 px-6 md:px-0  whitespace-pre-line"> {text} </div>;
};

export default TypingEffect;
