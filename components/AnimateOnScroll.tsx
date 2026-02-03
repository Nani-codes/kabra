"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type Animation = "fadeInUp" | "fadeIn";

type Props = {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
};

export function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = visible
    ? "elementor-invisible--visible"
    : "elementor-invisible";

  const style: CSSProperties | undefined =
    visible && delay
      ? {
          animationDelay: `${delay}ms`,
        }
      : undefined;

  return (
    <div
      ref={ref}
      className={`${baseClass} ${className}`.trim()}
      data-animation={animation}
      data-delay={delay}
      style={style}
    >
      {children}
    </div>
  );
}
