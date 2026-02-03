"use client";

import { useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/Qii7YPK4B-s?feature=oembed&rel=0&controls=0&showinfo=0&mute=0&wmode=opaque";

export function LeaderInPowerSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section
        className="man_fixed elementor-section elementor-top-section elementor-element elementor-element-825e795 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-stellar-background-ratio="0.2"
        data-id="825e795"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-92fbc40">
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div className="elementor-element elementor-element-923f97f elementor-widget__width-auto elementor-widget elementor-widget-sm-video-link">
                    <div className="elementor-widget-container">
                      <button
                        type="button"
                        className="sm_video_link"
                        onClick={() => setVideoOpen(true)}
                        aria-label="Play video"
                      >
                        <span>
                          <b />
                          <i className="fa fa-play" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a9f9fc1">
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <AnimateOnScroll animation="fadeInUp" className="elementor-element elementor-element-bbad42b elementor-widget elementor-widget-heading">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default elementor-align-after-mobile-center">
                        Our Promise in One Line
                      </h2>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll animation="fadeInUp" delay={200} className="elementor-element elementor-element-69ac5e4 elementor-widget elementor-widget-text-editor">
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>
                          We build moulds that perform on your production line, not just during trials.
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {videoOpen && (
        <div
          className="sm_video_modal"
          role="dialog"
          aria-modal="true"
          aria-label="Video modal"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#fff",
              fontSize: 24,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 900 }}>
            <iframe
              src={VIDEO_EMBED_URL}
              title="Leader in Power and Automotion"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", aspectRatio: "16/9", border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
