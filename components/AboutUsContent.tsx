"use client";

import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";

const IMG_BASE =
  "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42";
const IMG_INDUSTRIAL6 =
  "https://manufacturer.stylemixthemes.com/industrial6/wp-content/uploads/sites/38";

export function AboutUsContent() {
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
          <h1>About Us</h1>
          <div
            className="breadcrumbs"
            {...{ "typeof": "BreadcrumbList" }}
            vocab="http://schema.org/"
          >
            <span className="home">
              <span property="itemListElement" {...{ "typeof": "ListItem" }}>
                <Link href="/" className="home" title="Go to Home.">
                  <span property="name">Home</span>
                </Link>
                <meta property="position" content="1" />
              </span>
            </span>{" "}
            &gt; <span className="post post-page current-item">About Us</span>
          </div>
        </div>
      </div>

      <div id="content" className="site-content">
        <div
          data-elementor-type="wp-page"
          data-elementor-id="about-us"
          className="elementor elementor-about-us"
        >
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              {/* Intro: tagline + Watch Video */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default"
                data-id="about-intro"
                data-element_type="section"
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-widget elementor-widget-text-editor">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                <p className="text-lg">
                                  Since 1995, Kabra Group has been helping our
                                  customers build a better world – making
                                  sustainable progress possible and driving
                                  positive change.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-widget elementor-widget-button">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <a
                                  href="https://www.youtube.com/embed/z6l6X3mKTak?controls=0"
                                  target="_blank"
                                  rel="nofollow noreferrer"
                                  className="sm_video_link elementor-button-link elementor-button elementor-size-sm"
                                  role="button"
                                >
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">
                                      Watch Video
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Environmental and Sustainable Opportunity */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default"
                data-id="about-commitments"
                data-element_type="section"
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-50 elementor-top-column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <AnimateOnScroll animation="fadeIn" delay={100}>
                            <div className="elementor-element elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Environmental and Safety Commitments
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-widget elementor-widget-text-editor">
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                    Our commitment to be more efficient and
                                    responsible is reflected in the extensive
                                    work we do to make our businesses more
                                    environmentally friendly, safer and more
                                    sustainable. We develop technologies that
                                    expand the sustainable capacity of our
                                    world.
                                  </p>
                                  <p>
                                    <span
                                      style={{
                                        color: "#8aa9d7",
                                        fontWeight: 500,
                                        fontSize: "13px",
                                        lineHeight: "30px",
                                      }}
                                    >
                                      — VIEW SUSTAINABILITY AND SAFETY
                                      RECOGNITIONS
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AnimateOnScroll>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <AnimateOnScroll animation="fadeIn" delay={150}>
                            <div className="elementor-element elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Sustainable Opportunity Policy
                                </h2>
                              </div>
                            </div>
                            <div className="elementor-element elementor-widget elementor-widget-text-editor">
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  Our Sustainable{" "}
                                  <span style={{ color: "#8aa9d7" }}>
                                    <Link href="#about-commitments" style={{ color: "#8aa9d7" }}>
                                      Opportunity Policy
                                    </Link>
                                  </span>{" "}
                                  is based on the principle that by integrating
                                  health, safety and environmental
                                  considerations into all aspects of our
                                  business, we protect our people, communities
                                  and the environment; achieve sustainable
                                  growth and accelerated productivity; and
                                  drive compliance with all applicable
                                  regulations.
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

              {/* 3 icon boxes: Curricular Economy, Energy & Climate, Operations */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default"
                data-id="about-icon-row-1"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    {[
                      {
                        title: "Curricular Economy",
                        desc: "More fuel-efficient processes. Safer operations and sites. We're found in virtually every sector we serve.",
                      },
                      {
                        title: "Energy & Climate",
                        desc: "Since 2010, our facilities have implemented more than 4,300 efficiency projects including building automation and controls, lighting and mechanical upgrades, saving more than $80M (annualized).",
                      },
                      {
                        title: "Operations",
                        desc: "Over 100 years ago, we defined energy efficiency by making indoor comfort automatic. Today, we redefine it in millions of buildings using our technology.",
                      },
                    ].map((item, i) => (
                      <AnimateOnScroll
                        key={item.title}
                        animation="fadeIn"
                        delay={200 + i * 80}
                        className="elementor-column elementor-col-33 elementor-top-column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-widget elementor-widget-icon-box">
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                      >
                                        <path
                                          d="M30.2379 2.04419H33.7621V9.09262H30.2379V2.04419Z"
                                          fill="#fa6401"
                                        />
                                        <path
                                          d="M37.2863 53.1453H62L52.6804 23.1895H46.5364C44.5354 16.9545 38.7206 12.6168 32 12.6168C25.2794 12.6168 19.4646 16.9545 17.4636 23.1895H11.3196L2 53.1453H26.7137V58.4316H22.0147V61.9558H41.9853V58.4316H37.2863V53.1453Z"
                                          fill="#fa6401"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h3 className="elementor-icon-box-title">
                                      <span>{item.title}</span>
                                    </h3>
                                    <p className="elementor-icon-box-description">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              </section>

              {/* 3 more icon boxes: Human Rights, Conflict Minerals, Natural Infrastructure */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default"
                data-id="about-icon-row-2"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    {[
                      {
                        title: "Human Rights",
                        desc: "Each year, we keep over half a billion workers safer and more productive with voice-enabled software, mobile computers and protective equipment.",
                      },
                      {
                        title: "Conflict Minerals",
                        desc: "We pioneered automation control. We understand complex industrial facilities, and how to create high-quality and high-performance chemicals and materials.",
                      },
                      {
                        title: "Natural Infrastructure",
                        desc: "We provide resources and financial support to causes around the world and encourage employee volunteerism.",
                      },
                    ].map((item, i) => (
                      <AnimateOnScroll
                        key={item.title}
                        animation="fadeIn"
                        delay={450 + i * 80}
                        className="elementor-column elementor-col-33 elementor-top-column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div className="elementor-element elementor-widget elementor-widget-icon-box">
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-box-wrapper">
                                  <div className="elementor-icon-box-icon">
                                    <span className="elementor-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                      >
                                        <path
                                          d="M28.0588 2C33.8881 2 39.3851 4.25271 43.5373 8.34318C47.555 12.3013 49.8723 17.5433 50.098 23.1552L56.7886 32.8555C57.3765 33.7079 57.6872 34.7058 57.6872 35.7412C57.6872 38.5435 55.4073 40.8234 52.6048 40.8234H50.1177V43.9912C50.1177 49.9081 45.4007 54.7439 39.5294 54.9352V62H17.1765V47.4876L12.5511 42.9107C8.38754 38.9982 6.00001 33.4794 6.00001 27.7655V24.0588C6.00001 11.8955 15.8955 2 28.0588 2Z"
                                          fill="#fa6401"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="elementor-icon-box-content">
                                    <h3 className="elementor-icon-box-title">
                                      <span>{item.title}</span>
                                    </h3>
                                    <p className="elementor-icon-box-description">
                                      {item.desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              </section>

              {/* Company Overview + image */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default"
                data-id="about-company"
                data-element_type="section"
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-33 elementor-top-column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <AnimateOnScroll animation="fadeIn" delay={100}>
                            <div className="elementor-element elementor-widget elementor-widget-image">
                              <div className="elementor-widget-container">
                                <div className="elementor-image">
                                  <img
                                    decoding="async"
                                    src={`${IMG_INDUSTRIAL6}/2020/09/Fotolia_68431323_Subscription_Monthly_M-660x439-1.jpg`}
                                    alt="Company overview"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </AnimateOnScroll>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-66 elementor-top-column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <AnimateOnScroll animation="fadeIn" delay={150}>
                            <div className="elementor-element elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">
                                  Company Overview
                                </h3>
                              </div>
                            </div>
                            <div className="elementor-element elementor-widget elementor-widget-text-editor">
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                    Kabra Group principally operates through
                                    three primary segments — Construction
                                    Industries, Resource Industries and Energy
                                    & Transportation — and provides financing
                                    and related services through its Financial
                                    Products segment.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AnimateOnScroll>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-section-boxed elementor-section-height-default">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-row">
                                <div className="elementor-column elementor-col-50 elementor-inner-column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-widget elementor-widget-text-editor">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-text-editor elementor-clearfix">
                                            Company Net Value
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-column elementor-col-50 elementor-inner-column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-widget elementor-widget-heading">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-heading-title elementor-size-default">
                                            $12,000,000
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
                </div>
              </section>

              {/* CTA: Get in Touch + Vision & Mission */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default"
                data-id="about-cta"
                data-element_type="section"
                data-settings={'{"background_background":"classic"}'}
              >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-50 elementor-top-column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <AnimateOnScroll animation="fadeIn" delay={100}>
                            <div className="elementor-element elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">
                                  Get in Touch
                                </h3>
                              </div>
                            </div>
                            <div className="elementor-element elementor-widget elementor-widget-text-editor">
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                    Have questions about our company, products,
                                    or sustainability? We’d love to hear from
                                    you.
                                  </p>
                                  <p>
                                    <Link href="/contacts" className="btn">
                                      Contact Us
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AnimateOnScroll>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-top-column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <AnimateOnScroll animation="fadeIn" delay={150}>
                            <div className="elementor-element elementor-widget elementor-widget-heading">
                              <div className="elementor-widget-container">
                                <h3 className="elementor-heading-title elementor-size-default">
                                  Explore More
                                </h3>
                              </div>
                            </div>
                            <div className="elementor-element elementor-widget elementor-widget-text-editor">
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                    <Link href="/shop" className="btn">
                                      Our Products
                                    </Link>
                                  </p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
