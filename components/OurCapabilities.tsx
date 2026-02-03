import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

const DOTS_IMG =
  "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png";

export function OurCapabilities() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-80185e2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="80185e2"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f59aac5">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap strategic-positioning-content">
                <AnimateOnScroll animation="fadeInUp" delay={200} className="elementor-element elementor-element-8a86c1e elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <p className="strategic-positioning-overline">For high-stakes manufacturing teams</p>
                    <h2 className="elementor-heading-title elementor-size-default elementor-align-after-center strategic-positioning-heading">
                      Strategic Positioning
                    </h2>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={400} className="elementor-element elementor-element-5297dd7 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix strategic-positioning-body">
                      <p>
                        We are the partner of choice for engineering-led sectors where precision isn&apos;t a goal — it&apos;s the baseline.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
                <div className="elementor-element elementor-element-05c6116 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-sm-absolute-image">
                  <div className="elementor-widget-container">
                    <div className="man_absolute_image">
                      <Image src={DOTS_IMG} alt="" width={120} height={120} unoptimized />
                    </div>
                  </div>
                </div>
                <AnimateOnScroll animation="fadeInUp" delay={500} className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      {/* <h3 className="strategic-positioning-subheading">When to Partner With Us</h3> */}
                      <ul className="strategic-positioning-list">
                        <li><span className="industry-orange">Extreme Precision:</span> For complex geometries and ultra-tight tolerances.</li>
                        <li><span className="industry-orange">Advanced Materials:</span> Specialized expertise in high-performance engineering polymers.</li>
                        <li><span className="industry-orange">Time-Critical Launches:</span> When a failed mould is a risk your timeline can&apos;t afford.</li>
                        <li><span className="industry-orange">Quality First:</span> When consistency and repeatability matter more than the lowest bid.</li>
                      </ul>
                    </div>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={600} className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <div className="strategic-positioning-quote-label">Our guiding principle</div>
                      <blockquote className="strategic-positioning-quote">
                        &ldquo;Precision is expected, not requested.&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
