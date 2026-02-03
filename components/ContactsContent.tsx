"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";

const IMG_BASE = "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42";
const MAP_IMG = "https://manufacturer.stylemixthemes.com/gimbal/wp-content/uploads/sites/11/2018/12/map3-1.png";

type Office = {
  id: string;
  title: string;
  address: string;
  phones: string;
  top: number;
  left: number;
  topMobile?: number;
  leftMobile?: number;
  topTablet?: number;
  leftTablet?: number;
};

const OFFICES: Office[] = [
  { id: "a181326", title: "Office 1", address: "1504 Parrill Court, Crown Point<br />IN, Indiana", phones: "219-616-6578<br />219-765-9940", top: 60, left: 32, topMobile: 28, leftMobile: 18, topTablet: 21, leftTablet: 16 },
  { id: "0a8c7a0", title: "Office 2", address: "2867 Rowes Lane<br />GA, WILLACOOCHEE", phones: "270-586-3427<br />912-895-3513", top: 32, left: 43, leftMobile: 45 },
  { id: "4b62558", title: "Office 3", address: "771 Ward Road, WOODINVILLE<br />WA, Washington", phones: "915-225-3070<br />206-849-5482", top: 40, left: 80, leftMobile: 75, leftTablet: 20 },
  { id: "7b9fe66", title: "Office 4", address: "2682 Clark Street, GLEN FLORA<br />WI, Wisconsin", phones: "630-967-1785<br />414-388-5856", top: 29, left: 10 },
  { id: "61fcd2e", title: "Office 5", address: "3907 Church Street, Brooklyn<br />NY, New York", phones: "718-492-9271<br />347-422-5773", top: 10, left: 49 },
];

function useMapPinBreakpoint() {
  const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 767px)");
    const mqTablet = window.matchMedia("(max-width: 1024px)");
    const update = () => {
      if (mqMobile.matches) setMode("mobile");
      else if (mqTablet.matches) setMode("tablet");
      else setMode("desktop");
    };
    update();
    mqMobile.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqMobile.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);
  return mode;
}

function getPinPosition(office: Office, mode: "desktop" | "tablet" | "mobile") {
  if (mode === "mobile" && office.topMobile != null && office.leftMobile != null) return { top: office.topMobile, left: office.leftMobile };
  if (mode === "mobile" && office.leftMobile != null) return { top: office.top, left: office.leftMobile };
  if (mode === "mobile") return { top: office.top, left: office.left };
  if (mode === "tablet" && office.topTablet != null && office.leftTablet != null) return { top: office.topTablet, left: office.leftTablet };
  if (mode === "tablet" && office.leftTablet != null) return { top: office.top, left: office.leftTablet };
  return { top: office.top, left: office.left };
}

export function ContactsContent() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", company: "", mail: "", phone: "", Help: "" });
  const breakpoint = useMapPinBreakpoint();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", company: "", mail: "", phone: "", Help: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          <h1>Contacts</h1>
          <div className="breadcrumbs" {...{ "typeof": "BreadcrumbList" }} vocab="http://schema.org/">
            <span className="home">
              <span property="itemListElement" {...{ "typeof": "ListItem" }}>
                <Link href="/" className="home" title="Go to Industrial.">
                  <span property="name">Industrial</span>
                </Link>
                <meta property="position" content="1" />
              </span>
            </span>
            <span className="post post-page current-item">Contacts</span>
          </div>
        </div>
      </div>

      <div id="content" className="site-content">
        <div data-elementor-type="wp-post" data-elementor-id="350" className="elementor elementor-350 elementor-bc-flex-widget">
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              {/* Call Us or Fill the Form */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-c1153d9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="c1153d9"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <AnimateOnScroll animation="fadeIn" className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-457ea2f">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-4675044 elementor-widget elementor-widget-heading">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default">
                                Call Us or Fill the Form
                              </h2>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-725428e elementor-widget elementor-widget-heading">
                            <div className="elementor-widget-container">
                              <span className="elementor-heading-title elementor-size-default">
                                <i className="ti-mobile" />
                                <span>
                                  <b>123-456-789</b>
                                  <br />
                                  Don&apos;t hesitate to contact us
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-c3a34d8 elementor-widget elementor-widget-heading">
                            <div className="elementor-widget-container">
                              <span className="elementor-heading-title elementor-size-default">
                                <i className="ti-location-pin" />
                                <span>
                                  <b>Working Time</b>
                                  <br />
                                  Mon-Fri: 9:00 - 18:00 / Closed on weekends
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeIn" delay={200} className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3cca13e">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-830e318 elementor-widget elementor-widget-shortcode">
                            <div className="elementor-widget-container">
                              <div className="elementor-shortcode">
                                <div className="wpcf7 no-js" lang="en-US" dir="ltr">
                                  <form onSubmit={handleSubmit} className="wpcf7-form" aria-label="Contact form">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <p>
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                            placeholder="Name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                          />
                                        </p>
                                      </div>
                                      <div className="col-md-6">
                                        <p>
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text"
                                            placeholder="Company"
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                          />
                                        </p>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <p>
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                            placeholder="E-mail Address"
                                            type="email"
                                            name="mail"
                                            value={formData.mail}
                                            onChange={handleChange}
                                            required
                                          />
                                        </p>
                                      </div>
                                      <div className="col-md-6">
                                        <p>
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-tel"
                                            placeholder="Phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                          />
                                        </p>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <p>
                                          <textarea
                                            cols={40}
                                            rows={10}
                                            className="wpcf7-form-control wpcf7-textarea"
                                            placeholder="How can we help?"
                                            name="Help"
                                            value={formData.Help}
                                            onChange={handleChange}
                                          />
                                        </p>
                                      </div>
                                    </div>
                                    <p>
                                      <input
                                        className="wpcf7-form-control has-spinner wpcf7-submit"
                                        type="submit"
                                        value={formStatus === "sending" ? "Sending…" : "Submit"}
                                        disabled={formStatus === "sending"}
                                      />
                                    </p>
                                    {formStatus === "success" && (
                                      <div className="wpcf7-response-output" role="status">
                                        Thank you. Your message has been sent.
                                      </div>
                                    )}
                                    {formStatus === "error" && (
                                      <div className="wpcf7-response-output" role="alert">
                                        There was an error. Please try again.
                                      </div>
                                    )}
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              </section>

              {/* Office Contacts + Map */}
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-6a7b42c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="6a7b42c"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <AnimateOnScroll animation="fadeIn" className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1a6fadf">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-aa49f1e elementor-widget elementor-widget-heading">
                            <div className="elementor-widget-container">
                              <h2 className="elementor-heading-title elementor-size-default elementor-align-after-mobile-center">
                                Office Contacts
                              </h2>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-0cc528b elementor-widget elementor-widget-text-editor">
                            <div className="elementor-widget-container">
                              <div className="elementor-text-editor elementor-clearfix">
                                <p>
                                  The manufacturer offers extensive technical support, with a team of food scientists that manage your projects from innovation through development, commercialization, and then onto processing and packaging.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-f38d1ae elementor-widget elementor-widget-heading">
                            <div className="elementor-widget-container">
                              <span className="elementor-heading-title elementor-size-default">
                                <i className="ti-location-pin" />
                                <span>
                                  350 Flatbush ave New York,
                                  <br />
                                  NY 10018 USA.
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-83ea1f1 elementor-widget elementor-widget-heading">
                            <div className="elementor-widget-container">
                              <span className="elementor-heading-title elementor-size-default">
                                <i className="ti-mobile" />
                                <span>
                                  123-456-789
                                  <br />
                                  234-432-456
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeIn" delay={200} className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-149420f">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div className="elementor-element elementor-element-1ee8f11 elementor-widget elementor-widget-sm-offices">
                            <div className="elementor-widget-container">
                              <div className="man_map man_image_bck">
                                <div className="man_map_pins">
                                  {OFFICES.map((office) => {
                                    const pos = getPinPosition(office, breakpoint);
                                    return (
                                    <div key={office.id} className="man_map_pin_wrapper">
                                      <div className={`man_map_pin_cont_mobile man_map_pin_cont_mobile-${office.id}`}>
                                        <i className="man_map_pin_cont_mobile_close ti ti-close" />
                                        <b>{office.title}</b>
                                        <p dangerouslySetInnerHTML={{ __html: office.address }} />
                                        <p dangerouslySetInnerHTML={{ __html: office.phones }} />
                                      </div>
                                      <div
                                        className={`man_map_pin elementor-repeater-item-${office.id}`}
                                        data-id={office.id}
                                        data-top={office.top}
                                        data-left={office.left}
                                        style={{ position: "absolute", top: `${pos.top}%`, left: `${pos.left}%` }}
                                      >
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414 542" className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x">
                                          <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                        </svg>
                                        <div className="man_map_pin_cont">
                                          <b>{office.title}</b>
                                          <p dangerouslySetInnerHTML={{ __html: office.address }} />
                                          <p dangerouslySetInnerHTML={{ __html: office.phones }} />
                                        </div>
                                      </div>
                                    </div>
                                  ); })}
                                </div>
                                <img src={MAP_IMG} alt="Map" decoding="async" loading="lazy" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimateOnScroll>
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
