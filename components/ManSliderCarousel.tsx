"use client";

import { type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function ManSliderCarousel({ children, className = "man_slider owl-carousel" }: Props) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  return (
    <div className={className} ref={emblaRef} style={{ overflow: "hidden" }}>
      <div style={{ display: "flex", touchAction: "pan-y pinch-zoom" }}>
        <div style={{ flex: "0 0 100%", minWidth: 0 }}>{children}</div>
      </div>
    </div>
  );
}
