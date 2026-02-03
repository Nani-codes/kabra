import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

const IMG_695 =
  "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42/2020/03/695-1024x683.jpg";

export function WeOfferServicesSection() {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-4d472cf elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="4d472cf"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e32ed93">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-62c3d75 elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <Image
                        src={IMG_695}
                        width={940}
                        height={627}
                        alt="Our Esteemed Customers"
                        loading="lazy"
                        unoptimized
                        className="attachment-large size-large wp-image-1914"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c169227">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <AnimateOnScroll animation="fadeInUp" className="elementor-element elementor-element-ba20d64 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default elementor-align-after-mobile-center">
                      Our Esteemed Customers (Trust Positioning)
                    </h2>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp" delay={200} className="elementor-element elementor-element-1d7b09c elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>
                        Our customer portfolio reflects where we are positioned in the value chain.
                        We work with companies that demand process discipline, documentation, and long-term performance from their tooling partners.
                      </p>
                      <div style={{ marginTop: "1.5rem" }}>
                        <h3 style={{ fontWeight: 600, marginBottom: "0.75rem", fontSize: "1.125rem", color: "#1a1a1a" }}>Automotive</h3>
                        <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", listStyle: "disc" }}>
                          <li>Greaves Cotton</li>
                          <li>Mahle Anand</li>
                          <li>Varroc Engineering</li>
                          <li>Dhoot Transmission</li>
                          <li>Supreme Industries</li>
                          <li>Rehlko</li>
                        </ul>
                        <h3 style={{ fontWeight: 600, marginBottom: "0.75rem", fontSize: "1.125rem", color: "#1a1a1a" }}>Electricals &amp; Electronics</h3>
                        <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", listStyle: "disc" }}>
                          <li>Siemens</li>
                          <li>Panasonic</li>
                          <li>Polycab</li>
                          <li>Wipro Lighting</li>
                          <li>Eveready Industries</li>
                          <li>Torrent Electricals</li>
                        </ul>
                        <h3 style={{ fontWeight: 600, marginBottom: "0.75rem", fontSize: "1.125rem", color: "#1a1a1a" }}>Niche &amp; High-Performance Segments</h3>
                        <ul style={{ marginBottom: "0", paddingLeft: "1.5rem", listStyle: "disc" }}>
                          <li>Sterlite Technologies</li>
                          <li>HFCL</li>
                          <li>NRB Bearings</li>
                          <li>Elica</li>
                        </ul>
                      </div>
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
