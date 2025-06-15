"use client";

import { useEffect, useRef, useState } from "react";

const TypingEffect = () => {
  const fullText = "안녕하세요, 주니어 프론트엔드 개발자 윤주하입니다.";
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

  return <div className="text-[#8E8E8E] min-h-6"> {text} </div>;
};

export default TypingEffect;
