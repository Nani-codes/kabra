import Link from "next/link";
import { InvestorRelationsForm } from "./InvestorRelationsForm";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { ManSliderCarousel } from "./ManSliderCarousel";
import { ManNewsCarousel } from "./ManNewsCarousel";

const SITE_BASE = "https://manufacturer.stylemixthemes.com/industrial8";
const IMG_BASE = "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42";
const IMG_INDUSTRIAL6 = "https://manufacturer.stylemixthemes.com/industrial6/wp-content/uploads/sites/38";

export function InvestorRelationsContent() {
  return (
    <div id="content" className="site-content">
      <div
        data-elementor-type="wp-page"
        data-elementor-id="2607"
        className="elementor elementor-2607"
      >
        <div className="elementor-inner">
          <div className="elementor-section-wrap">
            {/* Hero: title + intro + Get in Touch form */}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-11ca0e7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="11ca0e7"
              data-element_type="section"
              data-settings={'{"background_background":"classic"}'}
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-e28a287">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-4819af4 elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <h1 className="elementor-heading-title elementor-size-default">
                              Investor Relations
                            </h1>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-e63eec7 elementor-widget elementor-widget-text-editor">
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor elementor-clearfix">
                              <p>
                                Since 1995, Manufacturer has been helping our
                                customers build a better world – making
                                sustainable progress possible and driving
                                positive change on every continent.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-486f6a1"
                    data-settings={'{"background_background":"classic"}'}
                  >
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-2bb2c96 elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default elementor-align-after-center">
                              Get in Touch
                            </h3>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-62a3f6c elementor-widget elementor-widget-shortcode">
                          <div className="elementor-widget-container">
                            <InvestorRelationsForm />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Breadcrumb */}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-65e382b elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
              data-id="65e382b"
              data-element_type="section"
              data-settings={'{"background_background":"classic"}'}
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-83c51ea">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-ff1e023 elementor-widget elementor-widget-wp-widget-bcn_widget">
                          <div className="elementor-widget-container">
                            <div
                              className="breadcrumbs"
                              vocab="https://schema.org/"
                              {...{ "typeof": "BreadcrumbList" }}
                            >
                              <span property="itemListElement" {...{ "typeof": "ListItem" }}>
                                <Link href="/" className="home" title="Go to Industrial.">
                                  <span property="name">Industrial</span>
                                </Link>
                                <meta property="position" content="1" />
                              </span>{" "}
                              &gt;{" "}
                              <span className="post post-page current-item">
                                Investor Relations
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Company Overview + image */}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-167b5cb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="167b5cb"
              data-element_type="section"
              data-settings={'{"background_background":"classic"}'}
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8fbad7c">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-88793b4 elementor-widget elementor-widget-image">
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <img
                                decoding="async"
                                src={`${IMG_INDUSTRIAL6}/2020/09/Fotolia_68431323_Subscription_Monthly_M-660x439-1.jpg`}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-8ee3082">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-2144bb6 elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">
                              Company Overview
                            </h3>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-a00a003 elementor-widget elementor-widget-text-editor">
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor elementor-clearfix">
                              <p>
                                The company principally operates through three
                                primary segments — Construction Industries,
                                Resource Industries and Energy & Transportation
                                — and provides financing and related services
                                through its Financial Products segment.
                              </p>
                            </div>
                          </div>
                        </div>
                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-c6b6f22 elementor-section-boxed elementor-section-height-default">
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2911d3a">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-fe6f5b8 elementor-widget elementor-widget-text-editor">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix">
                                          Company Net Value
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-02cf82c">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-3294612 elementor-widget elementor-widget-heading">
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

            {/* Quarterly Results + icon boxes */}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-34c8fe9 elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
              data-id="34c8fe9"
              data-element_type="section"
              data-settings={'{"stretch_section":"section-stretched","background_background":"classic"}'}
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7c19d0b"
                    data-settings={'{"background_background":"classic"}'}
                  >
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-44117f6 elementor-section-boxed elementor-section-height-default">
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d33554d">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-c23fd87 elementor-widget elementor-widget-heading">
                                      <div className="elementor-widget-container">
                                        <h3 className="elementor-heading-title elementor-size-default">
                                          Quarterly Results
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e4bdc0e">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-a2aecaf elementor-widget elementor-widget-heading">
                                      <div className="elementor-widget-container">
                                        <span className="elementor-heading-title elementor-size-default">
                                          <Link href="/blog-grid">
                                            View all results
                                          </Link>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-3c2d053 elementor-section-full_width elementor-section-height-default">
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              {[
                                { title: "News release", href: "/blog-grid", delay: 300 },
                                { title: "Presentation", href: "/blog-grid", delay: 350 },
                                { title: "Webcast", href: "/blog-grid", delay: 400 },
                                { title: "Transcript", href: "/blog-grid", delay: 450 },
                                { title: "Beyond the numbers", href: "/blog-grid", delay: 500 },
                                { title: "Highlights", href: "/blog-grid", delay: 550 },
                              ].map((item) => (
                                <AnimateOnScroll
                                  key={item.title}
                                  animation="fadeIn"
                                  delay={item.delay}
                                  className="elementor-column elementor-col-16 elementor-inner-column elementor-element"
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-widget elementor-widget-icon-box">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-icon-box-wrapper">
                                            <div className="elementor-icon-box-icon">
                                              <Link
                                                className="elementor-icon elementor-animation-float"
                                                href={item.href}
                                              >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                  <path d="M53.8017 19.0758C53.8017 20.0938 52.9782 20.9156 51.958 20.9156H25.0401C24.0199 20.9156 23.1964 20.0938 23.1964 19.0758C23.1964 18.0578 24.0199 17.236 25.0401 17.236H51.958C52.9782 17.236 53.8017 18.0578 53.8017 19.0758Z" fill="white" />
                                                </svg>
                                              </Link>
                                            </div>
                                            <div className="elementor-icon-box-content">
                                              <h3 className="elementor-icon-box-title">
                                                <Link href={item.href}>{item.title}</Link>
                                              </h3>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest Presentation + slider */}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-d850bd9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="d850bd9"
              data-element_type="section"
              data-settings={'{"background_background":"classic"}'}
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a8d5ea5">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-024aca6 elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default">
                              Latest Presentation
                            </h3>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-d364ff7 elementor-widget elementor-widget-text-editor">
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor elementor-clearfix">
                              <p>
                                The company principally operates through three
                                primary segments — Construction Industries,
                                Resource Industries and Energy & Transportation
                                — and provides financing and related services
                                through its Financial Products segment.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-b83e3cc elementor-position-left elementor-view-default elementor-widget elementor-widget-icon-box">
                          <div className="elementor-widget-container">
                            <div className="elementor-icon-box-wrapper">
                              <div className="elementor-icon-box-icon">
                                <a
                                  className="elementor-icon elementor-animation-"
                                  href={`${SITE_BASE}/wp-content/uploads/sites/42/2020/10/manufacturer.pdf`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                    <path d="M15 5C11.6862 5 9 7.7 9 11V35V47V65C9 68.3 11.6862 71 15 71H57C60.315 71 63 68.3 63 65V47V35V23L45 5H15Z" fill="#C0392B" />
                                    <path d="M63 19L45 1V13C45 16.3 47.685 19 51 19H63Z" fill="#C0392B" />
                                    <path d="M57.336 32H56.466C56.196 32.3 54.663 34.4 54 35C53.82 35.3 53.55 35.5999 53.397 35.5999C51.168 38.2999 46.428 42.8001 43.584 45.2001C43.212 45.5001 42.852 45.7999 42.786 45.7999C42.588 46.0999 40.692 47.2998 39.84 47.8998C37.125 49.6998 33.939 51.1999 31.464 51.7999C26.5797 52.9999 22.7688 52.6999 17.8212 50.2999C16.326 49.6999 14.1957 48.4999 13.0278 47.5999C11.8818 46.6999 12.0027 46.7001 12.0045 48.2001V49.7001L12.7779 50C13.77 50.6 15.9114 51.7998 17.3076 52.3998C18.3714 52.9998 18.7029 53.2999 18.1077 53.2999C17.5593 52.9999 14.4471 52.9999 13.2513 53.2999H12.0513C12.0237 53.2999 12.0012 53.9 12.0012 54.5V55.7001H12.4011C14.1219 55.1001 17.8152 55.0998 19.5345 55.3998C21.5589 55.6998 22.9833 55.9998 24.6942 56.8998C27.9585 58.3998 30.666 61.3998 31.845 64.3998L32.085 65H33.405H34.725L34.653 64.7001C34.23 62.9001 33.042 60.7999 31.572 59.2999C30.606 58.0999 28.8999 56.8999 28.2276 56.2999H28.0008C27.8916 55.9999 26.7513 55.3998 26.2641 55.3998C25.9869 55.0998 25.761 55.0999 25.761 55.0999C25.761 54.7999 25.971 54.7999 26.2275 55.0999C26.868 55.0999 29.4474 54.8 30.615 54.5C33.849 53.9 36.909 52.6998 40.002 50.8998C41.112 50.2998 43.632 48.1999 44.64 47.5999C45.39 46.6999 45.63 46.7 45.324 47C45.216 47.3 45.009 47.5998 44.859 47.8998C44.712 48.1998 44.454 48.4999 44.289 48.7999C41.955 52.3999 40.458 56.9 40.053 62C39.996 62.9 39.948 63.7999 39.948 64.0999V65H46.944H53.94L53.712 64.7001C52.452 62.9001 50.889 58.9999 50.364 56.2999C49.932 54.1999 49.803 50.8999 50.073 49.0999C50.859 44.2999 53.538 40.0998 58.14 37.3998C58.614 37.0998 59.226 36.8 59.499 36.5L60 36.2001V35.2999C60 34.6999 59.964 34.0999 59.919 34.0999C58.827 34.6999 56.397 36.1999 55.281 36.7999C54.684 37.3999 54.648 37.3999 55.209 36.7999C56.013 35.8999 57.399 34.3999 58.872 32.5999L59.559 32H58.056H57.336Z" fill="#ECF0F1" />
                                  </svg>
                                </a>
                              </div>
                              <div className="elementor-icon-box-content">
                                <div className="elementor-icon-box-title">
                                  <a
                                    href={`${SITE_BASE}/wp-content/uploads/sites/42/2020/10/manufacturer.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Download Presentation
                                  </a>
                                </div>
                                <p className="elementor-icon-box-description">
                                  PDF, 360KB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c726576">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-722b646 elementor-widget elementor-widget-sm-slider">
                          <div className="elementor-widget-container">
                            <ManSliderCarousel>
                              <div className="man_slider_item elementor-repeater-item-b06e07d style_2">
                                <div className="man_slider_item_over" />
                                <div className="container">
                                  <div className="man_slider_item_title_cont">
                                    <div className="man_slider_item_logo">
                                      <img
                                        src={`${IMG_INDUSTRIAL6}/2020/09/logo-manufacturer-white.svg`}
                                        alt="2Q Earnings Conference Call"
                                      />
                                    </div>
                                    <div className="man_slider_item_title">
                                      2Q Earnings Conference Call
                                    </div>
                                    <div className="man_slider_item_text">
                                      <p>2020</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ManSliderCarousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Upcoming Events */}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-bad70c9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="bad70c9"
              data-element_type="section"
              data-settings={'{"background_background":"classic"}'}
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8d1ab12">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-426b84e elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default elementor-align-after-center">
                              Upcoming Events
                            </h3>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-d5c6ccb elementor-widget elementor-widget-sm-news">
                          <div className="elementor-widget-container">
                            <ManNewsCarousel
                              visibleSlides={3}
                              items={[
                                { title: "Manufacturing basic things", date: "September 5, 2018", img: `${IMG_BASE}/2018/09/photo-1518515097038-ca19a3777cd7-360x280.jpeg`, href: `${SITE_BASE}/2018/09/05/manufacturing-basic-things/` },
                                { title: "Applied DNA Sciences, WestPoint Home Sign", date: "July 19, 2018", img: `${IMG_BASE}/2018/09/photo-1507679799987-c73779587ccf-360x280.jpeg`, href: `${SITE_BASE}/2018/07/19/applied-dna-sciences-westpoint-home-sign/` },
                                { title: "HanesBrands Awarded Ninth", date: "July 19, 2018", img: `${IMG_BASE}/2018/09/photo-1495314736024-fa5e4b37b979-360x280.jpeg`, href: `${SITE_BASE}/2018/07/19/hanesbrands-awarded-ninth/` },
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* COVID-19 section */}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-d3fdd76 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="d3fdd76"
              data-element_type="section"
              data-settings={'{"background_background":"classic"}'}
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-855ebba">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-49746ff elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <div className="elementor-heading-title elementor-size-default elementor-align-after-tablet-center">
                              Our Response to COVID-19
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-697bf27">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-02d6a37 elementor-widget elementor-widget-heading">
                          <div className="elementor-widget-container">
                            <div className="elementor-heading-title elementor-size-default">
                              The events surrounding the COVID-19 pandemic
                              continue to evolve rapidly. Caterpillar&apos;s
                              dedication and service to the safety, health and
                              well-being of our team and the communities they
                              serve remain strong.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d940006">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-ae4200f elementor-tablet-align-center elementor-widget elementor-widget-button">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <Link
                                href="/about-us"
                                className="elementor-button-link elementor-button elementor-size-sm"
                                role="button"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-text">
                                    Learn More
                                  </span>
                                </span>
                              </Link>
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
  );
}
