"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const visibleClass = visible ? "elementor-invisible--visible" : "elementor-invisible";
  const style = visible && delay ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`${visibleClass} ${className}`}
      style={style}
      data-animation={animation}
      data-delay={delay}
    >
      {children}
    </div>
  );
}
