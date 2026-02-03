import { HeroSection } from "@/components/HeroSection";
import { IndustriesWeServe } from "@/components/IndustriesWeServe";
import { OurCapabilities } from "@/components/OurCapabilities";
import { CustomSolutionsSection } from "@/components/CustomSolutionsSection";
import { WeOfferServicesSection } from "@/components/WeOfferServicesSection";
import { LeaderInPowerSection } from "@/components/LeaderInPowerSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <div
      data-elementor-type="wp-post"
      data-elementor-id="1091"
      className="elementor elementor-1091"
    >
      <div className="elementor-inner">
        <div className="elementor-section-wrap">
          <HeroSection />
          <IndustriesWeServe />
          <OurCapabilities />
          <CustomSolutionsSection />
          <WeOfferServicesSection />
          <LeaderInPowerSection />
          <ContactSection />
          <CTASection />
        </div>
      </div>
    </div>
  );
}
