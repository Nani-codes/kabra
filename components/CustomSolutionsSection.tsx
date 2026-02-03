import { AnimateOnScroll } from "./AnimateOnScroll";

export function CustomSolutionsSection() {
  return (
    <section
      className="man_fixed elementor-section elementor-top-section elementor-element elementor-element-162dad5 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-stellar-background-ratio="0.2"
      data-id="162dad5"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ffd0c92">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <AnimateOnScroll animation="fadeInUp" className="elementor-element elementor-element-05d1451 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default elementor-align-after-mobile-center">
                      Industries We Are Positioned For
                    </h2>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={200} className="elementor-element elementor-element-9d119aa elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>
                        We are strategically positioned in sectors where engineering quality directly impacts product performance:
                      </p>
                      <ul style={{ marginTop: "1rem", marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                        <li>Automotive components</li>
                        <li>Electrical and switchgear systems</li>
                        <li>Home appliances and consumer durables</li>
                        <li>Industrial and fluid control parts</li>
                        <li>Telecom and technical plastic applications</li>
                      </ul>
                      <p>
                        In these sectors, we are not just a supplier. We are a technical extension of the customer&apos;s engineering team.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5ff13ca">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-50a035e elementor-widget elementor-widget-spacer">
                  <div className="elementor-widget-container">
                    <div className="elementor-spacer">
                      <div className="elementor-spacer-inner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
