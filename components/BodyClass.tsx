"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const baseClass =
  "theme-manufacturer ehf-header ehf-footer ehf-template-manufacturer ehf-stylesheet-manufacturer-child man_button_round no-sidebar elementor-default elementor-kit-2793 wp-embed-responsive";

const routeBodyClass: Record<string, string> = {
  "/": "home page-template page-template-elementor_canvas page page-id-1091 elementor-template-canvas elementor-page elementor-page-1091",
  "/about-us": "page-template page-template-elementor_header_footer page elementor-template-full-width elementor-page",
  "/shop": "archive post-type-archive post-type-archive-product woocommerce-shop woocommerce woocommerce-page woocommerce-no-js elementor-template-full-width elementor-page",
  "/contacts": "page-template page-template-elementor_header_footer page page-id-350 elementor-template-full-width elementor-page elementor-page-350",
};

export function BodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const fontVar = document.body.getAttribute("data-font-variable") ?? "";
    const routeClass = routeBodyClass[pathname ?? "/"] ?? "page-template page-template-elementor_header_footer page elementor-template-full-width elementor-page";
    document.body.className = [fontVar, baseClass, routeClass].filter(Boolean).join(" ").trim();
  }, [pathname]);

  return null;
}
