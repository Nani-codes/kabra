"use client";

import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";

const IMG_BASE = "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42";
export function ContactsContent() {
  return (
    <>
      {/* Hero */}
      <div
        className="man_intro man_image_bck"
        style={{
          backgroundImage: `url(${IMG_BASE}/2020/03/46.jpg)`,
          backgroundColor: "#222222",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="man_over" />
        <div className="man_intro_cont">
          <h1>Contact Us</h1>
          <div className="breadcrumbs" {...{ "typeof": "BreadcrumbList" }} vocab="http://schema.org/">
            <span className="home">
              <span property="itemListElement" {...{ "typeof": "ListItem" }}>
                <Link href="/" className="home" title="Go to Home.">
                  <span property="name">Home</span>
                </Link>
                <meta property="position" content="1" />
              </span>
            </span>
            <span className="sep"> / </span>
            <span className="post post-page current-item">Contact Us</span>
          </div>
        </div>
      </div>

      <div id="content" className="site-content">
        <div data-elementor-type="wp-post" data-elementor-id="350" className="elementor elementor-350 elementor-bc-flex-widget">
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              <section
                className="contacts-main-section"
                data-id="c1153d9"
                data-element_type="section"
              >
                <div className="contacts-main-container">
                  <AnimateOnScroll animation="fadeIn" className="contacts-main-left">
                    <div className="contact-card-grid">
                      <div className="contact-card">
                        <div className="contact-card__icon">
                          <i className="ti-user" />
                        </div>
                        <div className="contact-card__body">
                          <h3 className="contact-card__name">Mr. Jugalkishore Kabra</h3>
                          <p className="contact-card__role">CEO</p>
                          <hr className="contact-card__divider" />
                          <div className="contact-detail-row">
                            <i className="ti-email" />
                            <a href="mailto:jkabra@kabragroup.in">jkabra@kabragroup.in</a>
                          </div>
                          <div className="contact-detail-row">
                            <i className="ti-skype" />
                            <span>j.kabra</span>
                          </div>
                        </div>
                      </div>
                      <div className="contact-card">
                        <div className="contact-card__icon">
                          <i className="ti-user" />
                        </div>
                        <div className="contact-card__body">
                          <h3 className="contact-card__name">Mr. Dyanesh Kabra</h3>
                          <p className="contact-card__role">Manager Exports</p>
                          <hr className="contact-card__divider" />
                          <div className="contact-detail-row">
                            <i className="ti-email" />
                            <a href="mailto:dnyanesh@kabragroup.in">dnyanesh@kabragroup.in</a>
                          </div>
                          <div className="contact-detail-row">
                            <i className="ti-skype" />
                            <span>dyaneshkabra</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll animation="fadeIn" delay={150} className="contacts-main-right">
                    <h2 className="contacts-main-heading">Our Office Location</h2>
                    <p className="contacts-main-address">
                      Kishore Industries, C-32,33, MIDC, Waluj, Aurangabad - 431 136 (MS) INDIA
                    </p>
                    <div className="contacts-main-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.461590741974!2d75.23974368556284!3d19.836378175527962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9bd96113a8b9%3A0x37341aed725a749f!2sKISHORE%20INDUSTRIES%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1770105727920!5m2!1sen!2sin"
                        width="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </AnimateOnScroll>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
