"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

type Props = {
  to: number;
  duration?: number;
  className?: string;
  children: (value: number) => ReactNode;
};

export function CounterWidget({
  to,
  duration = 2000,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setStarted(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - t) * (1 - t);
      setValue(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, to, duration]);

  return (
    <div ref={ref} className={className}>
      {children(value)}
    </div>
  );
}
