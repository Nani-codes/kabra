"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";

export function LeaderInPowerSection() {
  return (
    <>
      <section
        className="man_fixed elementor-section elementor-top-section elementor-element elementor-element-825e795 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-stellar-background-ratio="0.2"
        data-id="825e795"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a9f9fc1">
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <AnimateOnScroll animation="fadeInUp" className="elementor-element elementor-element-bbad42b elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default elementor-align-after-mobile-center">
                        Our Promise in One Line
                      </h2>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInUp" delay={200} className="elementor-element elementor-element-69ac5e4 elementor-widget elementor-widget-text-editor">
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>
                          We build moulds that perform on your production line, not just during trials.
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
