"use client";

import useEmblaCarousel from "embla-carousel-react";

type NewsItem = {
  title: string;
  date: string;
  img: string;
  href: string;
};

type Props = {
  items: NewsItem[];
  visibleSlides?: number;
  className?: string;
};

export function ManNewsCarousel({
  items,
  visibleSlides = 3,
  className = "man_news",
}: Props) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });

  const slideBasis = visibleSlides > 0 ? `${100 / visibleSlides}%` : "100%";

  return (
    <div className={className} ref={emblaRef} style={{ overflow: "hidden" }} data-items={visibleSlides}>
      <div style={{ display: "flex", touchAction: "pan-y pinch-zoom", gap: 0 }}>
        {items.map((item) => (
          <div
            key={item.title}
            style={{ flex: `0 0 ${slideBasis}`, minWidth: 0, padding: "0 10px" }}
            className="man_news_grid_item"
          >
            <a href={item.href} className="man_news_item_link" />
            <div className="man_news_item_img">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="man_news_item_over" />
              <div className="man_news_item_cont">
                <div className="man_news_item_title">{item.title}</div>
                <div className="man_news_item_date">
                  <i className="ti ti-time" /> {item.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
