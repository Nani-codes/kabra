"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

const DOTS_IMG =
  "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mail: "",
    phone: "",
    Help: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", mail: "", phone: "", Help: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-62fe340 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="62fe340"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <AnimateOnScroll animation="fadeIn" className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e9b92e8">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-d1882cb elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default elementor-align-after-mobile-center">
                      Call Us or Fill the Form
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-8f0f3b6 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      <i className="ti-mobile" />
                      <span>
                        <b>646-872-4210</b>
                        <br />
                        Don&apos;t hesitate to contact us
                      </span>
                    </span>
                  </div>
                </div>
                <div className="elementor-element elementor-element-aa8b27e elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      <i className="ti-time" />
                      <span>
                        <b>646-872-4210</b>
                        <br />
                        Don&apos;t hesitate to contact us
                      </span>
                    </span>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a0368b0 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <span className="elementor-heading-title elementor-size-default">
                      <i className="ti-location-pin" />
                      <span>
                        <b>Factory Address</b>
                        <br />
                        5022 Forest Avenue
                        <br />
                        New York
                        <br />
                        10013
                      </span>
                    </span>
                  </div>
                </div>
                <div className="elementor-element elementor-element-df5287a elementor-hidden-phone elementor-widget elementor-widget-sm-absolute-image">
                  <div className="elementor-widget-container">
                    <div className="man_absolute_image">
                      <Image src={DOTS_IMG} alt="" width={120} height={120} unoptimized />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-944101d">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-f2cceb7 elementor-widget elementor-widget-shortcode">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div className="wpcf7 no-js" lang="en-US" dir="ltr">
                        <form
                          onSubmit={handleSubmit}
                          className="wpcf7-form init"
                          aria-label="Contact form"
                          noValidate
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="name">
                                  <input
                                    size={40}
                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                    aria-required="true"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="company">
                                  <input
                                    size={40}
                                    className="wpcf7-form-control wpcf7-text"
                                    placeholder="Company"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="mail">
                                  <input
                                    size={40}
                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                    aria-required="true"
                                    placeholder="E-mail Address"
                                    type="email"
                                    name="mail"
                                    value={formData.mail}
                                    onChange={handleChange}
                                    required
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="phone">
                                  <input
                                    size={40}
                                    className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel"
                                    placeholder="Phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="Help">
                                  <textarea
                                    cols={40}
                                    rows={10}
                                    className="wpcf7-form-control wpcf7-textarea"
                                    placeholder="How can we help?"
                                    name="Help"
                                    value={formData.Help}
                                    onChange={handleChange}
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                          <p>
                            <input
                              className="wpcf7-form-control has-spinner wpcf7-submit"
                              type="submit"
                              value={status === "sending" ? "Sending…" : "Submit"}
                              disabled={status === "sending"}
                            />
                          </p>
                          {status === "success" && (
                            <div className="wpcf7-response-output" role="status">
                              Thank you. Your message has been sent.
                            </div>
                          )}
                          {status === "error" && (
                            <div className="wpcf7-response-output" role="alert">
                              There was an error sending your message. Please try again.
                            </div>
                          )}
                        </form>
                      </div>
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
