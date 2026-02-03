"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";

const DOTS_IMG =
  "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section
            ref={containerRef}
            className="man_fixed elementor-section elementor-top-section elementor-element elementor-element-f4e5a8b elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-stellar-background-ratio="0.2"
            data-id="f4e5a8b"
            data-element_type="section"
          >
            <div className="elementor-background-overlay" />
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2c3c3be">
                  <div className="elementor-column-wrap elementor-element-populated">
                    <motion.div
                      className="elementor-widget-wrap"
                      style={{ y }}
                    >
                      <AnimateOnScroll animation="fadeInUp" className="elementor-element elementor-element-7878364 elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h1 className="elementor-heading-title elementor-size-default elementor-align-after-center">
                            We Don&apos;t Just Make Moulds.
                            <br />
                            We Engineer Manufacturing Confidence.
                          </h1>
                        </div>
                      </AnimateOnScroll>
                      <div className="elementor-element elementor-element-c1905c2 elementor-widget__width-auto elementor-hidden-phone elementor-widget elementor-widget-sm-absolute-image">
                        <div className="elementor-widget-container">
                          <motion.div
                            className="man_absolute_image"
                            style={{ y }}
                            data-bottom-top="transform:translateY(0px)"
                            data-center-bottom="transform:translateY(100px)"
                          >
                            <Image
                              src={DOTS_IMG}
                              alt=""
                              width={200}
                              height={200}
                              unoptimized
                            />
                          </motion.div>
                        </div>
                      </div>
                      <AnimateOnScroll animation="fadeInUp" delay={200} className="elementor-element elementor-element-7071634 elementor-widget elementor-widget-text-editor">
                        <div className="elementor-widget-container">
                          <div className="elementor-text-editor elementor-clearfix">
                            <p>
                              Long-term engineering partner for brands that demand precision, reliability, and production-ready tooling—from design to dependable manufacturing.
                            </p>
                          </div>
                        </div>
                      </AnimateOnScroll>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
