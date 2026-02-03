"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const LOGO_SRC = "/logo.jpeg";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((o) => !o);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("fancy-lock");
    } else {
      document.body.classList.remove("fancy-lock");
    }
    return () => document.body.classList.remove("fancy-lock");
  }, [menuOpen]);

  return (
    <header id="masthead" itemScope itemType="https://schema.org/WPHeader">
      <p className="main-title bhf-hidden" itemProp="headline">
        <Link href="/" title="Kabra Group" rel="home">
          Kabra Group
        </Link>
      </p>
      <div
        data-elementor-type="wp-post"
        data-elementor-id="78"
        className="elementor elementor-78"
      >
        <div className="elementor-inner">
          <div className="elementor-section-wrap">
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-e52a00e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="e52a00e"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fcaeb2e">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-51190a3 elementor-widget elementor-widget-sm-logo">
                          <div className="elementor-widget-container">
                            <Link className="man_logo" href="/">
                              <div className="man_logo_img">
                                <Image
                                  src={LOGO_SRC}
                                  alt="Kabra Group"
                                  width={200}
                                  height={76}
                                  unoptimized
                                  priority
                                  className="man_logo_img__img"
                                  style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: "200px", maxHeight: "76px" }}
                                />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-bf3eeb5">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <div className="elementor-element elementor-element-9ef0ef2 elementor-widget__width-auto elementor-widget elementor-widget-sm-menu">
                          <div className="elementor-widget-container">
                            <div
                              id="elementor-header-primary"
                              className="elementor-header"
                            >
                              <button
                                type="button"
                                className="sm_menu_toggle"
                                onClick={toggleMenu}
                                aria-label="Open menu"
                              >
                                <i className="ti ti-menu" />
                              </button>
                              <a
                                className="sm_menu_toggle_close"
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  closeMenu();
                                }}
                                aria-label="Close menu"
                              >
                                <i className="ti ti-close" />
                              </a>
                              <div
                                id="sm_menu"
                                className={`sm_menu ${menuOpen ? "opened" : ""}`}
                              >
                                <nav
                                  itemType="http://schema.org/SiteNavigationElement"
                                  itemScope
                                  id="elementor-navigation"
                                  className="elementor-navigation"
                                  role="navigation"
                                  aria-label="Elementor Menu"
                                >
                                  <ul id="sm_nav_menu" className="sm_nav_menu">
                                    <li
                                      className={`menu-item menu-item-home ${
                                        pathname === "/"
                                          ? "current-menu-item current_page_item"
                                          : ""
                                      }`}
                                    >
                                      <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
                                        Home
                                      </Link>
                                    </li>
                                    <li
                                      className={`menu-item ${
                                        pathname === "/about-us"
                                          ? "current-menu-item current_page_item"
                                          : ""
                                      }`}
                                    >
                                      <Link href="/about-us" aria-current={pathname === "/about-us" ? "page" : undefined}>
                                        About Us
                                      </Link>
                                    </li>
                                    <li
                                      className={`menu-item menu-item-shop ${
                                        pathname === "/shop"
                                          ? "current-menu-item current_page_item"
                                          : ""
                                      }`}
                                    >
                                      <Link href="/shop" className="nav-link-shop" aria-current={pathname === "/shop" ? "page" : undefined}>
                                        Products
                                      </Link>
                                    </li>
                                    <li
                                      className={`menu-item ${
                                        pathname === "/contacts"
                                          ? "current-menu-item current_page_item"
                                          : ""
                                      }`}
                                    >
                                      <Link href="/contacts" aria-current={pathname === "/contacts" ? "page" : undefined}>
                                        Contact Us
                                      </Link>
                                    </li>
                                  </ul>
                                </nav>
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
          </div>
        </div>
      </div>
    </header>
  );
}
