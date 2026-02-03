"use client";
import Link from "next/link";
import { YouTubeVideoOverlay } from "./YouTubeVideoOverlay";
import { CounterWidget } from "./CounterWidget";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { ParallaxWrap } from "./ParallaxWrap";

const IMG_BASE = "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42";
const DOTS_IMG = "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png";

export function ServicesContent() {

  return (
    <>
      {/* Hero */}
      <div
        className="man_intro man_image_bck"
        data-image={`${IMG_BASE}/2020/03/46.jpg`}
        data-color="#222222"
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
          <h1>Services</h1>
          <div className="breadcrumbs" {...{ "typeof": "BreadcrumbList" }} vocab="http://schema.org/">
            <span className="home">
              <span property="itemListElement" {...{ "typeof": "ListItem" }}>
                <Link href="/" className="home" title="Go to Industrial.">
                  <span property="name">Industrial</span>
                </Link>
                <meta property="position" content="1" />
              </span>
            </span>
            <span className="post post-page current-item">Services</span>
          </div>
        </div>
      </div>

      <div id="content" className="site-content">
        <div data-elementor-type="wp-post" data-elementor-id="352" className="elementor elementor-352">
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              {/* Our Capabilities + videos */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-9f5ce47 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="9f5ce47"
                data-element_type="section"
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e690bec">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-cf49b76 elementor-widget elementor-widget-heading">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default elementor-align-after-center">
                                Our Capabilities
                              </h2>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-3833cc2 elementor-widget elementor-widget-text-editor">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                <p>
                                  Manufacturer&apos;s high end manufacturing services are a <br />
                                  perfect complement to today&apos;s high tech industries.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-dabac65 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-sm-absolute-image">
                            <div className="elementor-widget-container">
                              <ParallaxWrap fromY={0} toY={100}>
                                <img src={DOTS_IMG} alt="" decoding="async" loading="lazy" />
                              </ParallaxWrap>
                            </div>
                          </div>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-b156f6a elementor-section-boxed elementor-section-height-default">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-row">
                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-da41996">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-0e8426c elementor-widget elementor-widget-video">
                                        <div className="elementor-widget-container">
                                          <YouTubeVideoOverlay
                                            youtubeVideoId="m36QeKOJ2Fc"
                                            overlayImageUrl={`${IMG_BASE}/2020/03/46.jpg`}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-01cf83a">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-ad56c94 elementor-widget elementor-widget-video">
                                        <div className="elementor-widget-container">
                                          <YouTubeVideoOverlay
                                            youtubeVideoId="SuJGXTFDqj8"
                                            overlayImageUrl={`${IMG_BASE}/2020/03/695.jpg`}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="elementor-element elementor-element-b3559a3 elementor-widget elementor-widget-sm-default-button">
                            <div className="elementor-widget-container">
                              <Link href="/about-us" className="btn">
                                Learn More<i className="ti ti-arrow-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Gallery */}
              <AnimateOnScroll
                animation="fadeIn"
                className="elementor-section elementor-top-section elementor-element elementor-element-2396cbf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3ee810e">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="man_gallery_slider elementor-element elementor-element-061fdc2 elementor-widget elementor-widget-image-gallery" data-items="5">
                            <div className="elementor-widget-container">
                              <div className="elementor-image-gallery">
                                <div id="gallery-1" className="gallery galleryid-352 gallery-columns-5 gallery-size-medium">
                                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                    <figure key={i} className="gallery-item">
                                      <div className="gallery-icon landscape">
                                        <img
                                          width={300}
                                          height={169}
                                          src={`${IMG_BASE}/2018/11/p${i}-300x169.jpg`}
                                          className="attachment-medium size-medium"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </figure>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Counters */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-370fa32 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="370fa32"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-wide">
                  <div className="elementor-row">
                    {[
                      { icon: "startups-008-browser-1", to: 24, duration: 10000, title: "Luxury department stores", delay: 0 },
                      { icon: "startups-029-presentation", to: 145, duration: 5000, title: "Clothing retailers", delay: 200 },
                      { icon: "startups-012-rocket-1", to: 61, duration: 5000, title: "Fashion retailers", delay: 400 },
                      { icon: "startups-027-growth-1", to: 249, duration: 5000, title: "Brand name labels", delay: 600 },
                    ].map((item) => (
                      <AnimateOnScroll
                        key={item.title}
                        animation="fadeInUp"
                        delay={item.delay}
                        className="elementor-column elementor-col-25 elementor-top-column elementor-element"
                      >
                        <CounterWidget
                          to={item.to}
                          duration={item.duration}
                          className="elementor-column-wrap elementor-element-populated"
                        >
                        {(value) => (
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-widget elementor-widget-counter">
                              <div className="elementor-widget-container">
                                <div className="elementor-counter man_no_prefix elementor-counter-flex man_no_suffix">
                                  <div className="elementor-icon">
                                    <i className={item.icon} />
                                  </div>
                                  <div className="elementor-counter-number-wrapper_flex">
                                    <div className="elementor-counter-number-wrapper">
                                      <span className="elementor-counter-number-prefix" />
                                      <span className="elementor-counter-number">{value}</span>
                                      <span className="elementor-counter-number-suffix" />
                                    </div>
                                    <div className="elementor-counter-title">{item.title}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        </CounterWidget>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
