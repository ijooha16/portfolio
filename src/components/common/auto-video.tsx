"use client";

import { useEffect, useRef } from "react";

const AutoVideo = ({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"
      aria-hidden
      className={className}
    />
  );
};

export default AutoVideo;
