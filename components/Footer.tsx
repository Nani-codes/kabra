import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/logo.jpeg";

export function Footer() {
  return (
    <footer
      itemType="https://schema.org/WPFooter"
      itemScope
      id="colophon"
      role="contentinfo"
    >
      <div className="footer-width-fixer">
        <div
          data-elementor-type="wp-post"
          data-elementor-id="103"
          className="elementor elementor-103"
        >
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-689ddb8 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="689ddb8"
                data-element_type="section"
              >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9e2b562">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="sm_display_inline elementor-element elementor-element-078a13a elementor-widget elementor-widget-sm-logo">
                            <div className="elementor-widget-container">
                              <Link className="man_logo" href="/">
                                <div className="man_logo_img">
                                  <Image
                                    src={LOGO_SRC}
                                    alt="Kabra Group"
                                    width={200}
                                    height={70}
                                    unoptimized
                                    className="man_logo_img__img"
                                    style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: "200px", maxHeight: "70px" }}
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2a6a6c0">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-6a5eaf6 elementor-widget elementor-widget-text-editor">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                <p>2020 Manufacturer. All Rights Reserved</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
