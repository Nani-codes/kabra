"use client";

import { useState } from "react";

export function InvestorRelationsForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    user_fullname: "",
    user_email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.user_fullname,
          mail: formData.user_email,
          phone: formData.phone,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ user_fullname: "", user_email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="elementor-shortcode">
      <div className="wpcf7 no-js" lang="en-US" dir="ltr">
        <div className="screen-reader-response" aria-live="polite" aria-atomic="true" />
        <form onSubmit={handleSubmit} className="wpcf7-form" aria-label="Contact form">
          <div className="form-group">
            <p>
              <input
                size={40}
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required
                placeholder="Full name"
                type="text"
                name="user_fullname"
                value={formData.user_fullname}
                onChange={handleChange}
                required
              />
            </p>
          </div>
          <div className="form-group">
            <p>
              <input
                size={40}
                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                aria-required
                placeholder="Email"
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </p>
          </div>
          <div className="form-group">
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
          <div className="btn-wrapper">
            <p>
              <input
                className="wpcf7-form-control has-spinner wpcf7-submit"
                type="submit"
                value={status === "sending" ? "Sending…" : "Submit"}
                disabled={status === "sending"}
              />
            </p>
          </div>
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
  );
}
