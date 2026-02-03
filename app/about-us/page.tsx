import Link from "next/link";
import { IndustriesWeServe } from "@/components/IndustriesWeServe";
import { OurCapabilities } from "@/components/OurCapabilities";
import { WeOfferServicesSection } from "@/components/WeOfferServicesSection";

const IMG_BASE = "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42";

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Banner */}
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
            <span className="post post-page current-item">About Us</span>
          </div>
        </div>
      </div>

      <div id="content" className="site-content">
        <div
          data-elementor-type="wp-post"
          data-elementor-id="1091"
          className="elementor elementor-1091"
        >
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              <IndustriesWeServe />
              <OurCapabilities />
              <WeOfferServicesSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
