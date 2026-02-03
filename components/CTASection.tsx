import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function CTASection() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-9fc9723 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="9fc9723"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <AnimateOnScroll animation="fadeIn" className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7f9de5d">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="sm_display_inline elementor-element elementor-element-e602080 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default elementor-align-after-mobile-center">
                      Have a part that cannot fail in production? That&apos;s exactly where we fit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeIn" delay={200} className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cb6a04a">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-aab45b0 elementor-widget elementor-widget-sm-default-button">
                  <div className="elementor-widget-container">
                    <Link href="/contacts" className="btn btn_transparent ">
                      Contact Us<i className="ti ti-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
