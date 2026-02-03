"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const IMG_BASE = "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42";
const SITE_BASE = "https://manufacturer.stylemixthemes.com/industrial8";

const PRODUCT_CATEGORIES = [
  { label: "All Products", slug: "all" },
  { label: "Gas Appliances", slug: "gas-appliances" },
  { label: "Electrical", slug: "electrical" },
  { label: "Electronics", slug: "electronics" },
  { label: "Lighting", slug: "lighting" },
  { label: "Furniture", slug: "furniture" },
  { label: "Luggage", slug: "luggage" },
  { label: "Auto Components", slug: "auto-components" },
  { label: "Home Appliances", slug: "home-appliances" },
] as const;

const PRODUCTS = [
  { id: 900, title: "Chambray Vintage Stripe Quilt Cover – Black", img: `${IMG_BASE}/2018/08/i11.jpg`, price: "£3,200", slug: "chambray-vintage-stripe-quilt-cover-black", category: "home-appliances" },
  { id: 899, title: "Chambray Vintage Stripe Quilt Cover – Dove", img: `${IMG_BASE}/2018/08/i13.jpg`, price: "£1,200", slug: "chambray-vintage-stripe-quilt-cover-dove", category: "furniture" },
  { id: 886, title: "Denim European Pillowcase – Indigo", img: `${IMG_BASE}/2018/08/i16-270x270.jpg`, price: "£2,300", slug: "denim-european-pillowcase-indigo", category: "lighting" },
  { id: 897, title: "Denim Quilt Cover Set", img: `${IMG_BASE}/2018/08/i15-270x270.jpg`, price: "£2,700", slug: "denim-quilt-cover-set", category: "electronics" },
  { id: 898, title: "Denim Quilt Cover Set – Charcoal", img: `${IMG_BASE}/2018/08/i14-270x270.jpg`, price: "£1,400", slug: "denim-quilt-cover-set-charcoal", category: "electrical" },
];

export function ShopContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const selectedCategory = (searchParams.get("category") || "all").toLowerCase();
  const selectedCategoryLabel =
    PRODUCT_CATEGORIES.find((c) => c.slug === selectedCategory)?.label ||
    (selectedCategory === "all"
      ? "Products"
      : selectedCategory
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" "));
  const filteredByCategory =
    !selectedCategory || selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);
  const q = searchQuery.trim().toLowerCase();
  const filteredProducts =
    q.length === 0
      ? filteredByCategory
      : filteredByCategory.filter((p) => p.title.toLowerCase().includes(q));

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
          <h1>{selectedCategory && selectedCategory !== "all" ? selectedCategoryLabel : "Products"}</h1>
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
            <span property="itemListElement" {...{ "typeof": "ListItem" }}>
              <Link href="/shop" className="archive post-product-archive">
                <span property="name">Products</span>
              </Link>
              <meta property="position" content="2" />
            </span>
            {selectedCategory && selectedCategory !== "all" && (
              <>
                <span className="sep"> / </span>
                <span className="archive post-product-archive current-item">
                  {selectedCategoryLabel}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div id="content" className="site-content">
        <div className="stm-products-catalog">
          <div className="container">
            <div className="row">
              {/*
                Sidebar filters (temporarily disabled)

                <div className="col-md-12 col-lg-3 man_sidebar_col">
                  <div className="man_sidebar shop-sidebar">
                    <section className="widget widget_product_search">
                      <h3 className="widget-title">Search</h3>
                      <div className="shop-search">
                        <input
                          type="search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products…"
                          aria-label="Search products"
                        />
                        {searchQuery.trim().length > 0 && (
                          <button
                            type="button"
                            className="shop-search__clear"
                            onClick={() => setSearchQuery("")}
                            aria-label="Clear search"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </section>

                    <section className="widget woocommerce widget_product_categories">
                      <h3 className="widget-title">Categories</h3>
                      <ul className="product-categories">
                        {PRODUCT_CATEGORIES.map((cat) => {
                          const href = cat.slug === "all" ? "/shop" : `/shop?category=${cat.slug}`;
                          const active =
                            (cat.slug === "all" && (!selectedCategory || selectedCategory === "all")) ||
                            selectedCategory === cat.slug;

                          return (
                            <li key={cat.slug} className={`cat-item ${active ? "current-cat" : ""}`}>
                              <Link href={href}>{cat.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  </div>
                </div>
              */}

              <div className="col-md-12 col-lg-12 man_main_sidebar">
                <div className="content-area">
                  <div id="primary" className="content-area">
                    <main id="main" className="site-main" role="main">
                      {filteredProducts.length === 0 ? (
                        <div className="stm-products-main grid cols-3">
                          <div className="stm-product-item" style={{ gridColumn: "1 / -1" }}>
                            <div className="stm-product-item__content" style={{ padding: "1.25rem" }}>
                              <strong>No products found.</strong>
                              <div style={{ marginTop: "0.5rem" }}>
                                Try a different category or search, or view{" "}
                                <Link href="/shop" style={{ textDecoration: "underline" }}>
                                  All Products
                                </Link>
                                .
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="stm-products-main grid cols-3">
                          {filteredProducts.map((product) => (
                            <div key={product.id} className="stm-product-item">
                              <a className="stm-product-item__image" href={`${SITE_BASE}/product/${product.slug}/`}>
                                <img src={product.img} sizes="(max-width: 461px) 100vw, 461px" alt={product.title} loading="lazy" />
                              </a>
                              <div className="stm-product-item__content">
                                <div className="meta-top">
                                  <div className="product-categories">
                                    <a href={`${SITE_BASE}/product-category/machines/`} rel="tag">Machines</a>
                                  </div>
                                  <a className="stm-product-item__title" href={`${SITE_BASE}/product/${product.slug}/`}>
                                    {product.title}
                                  </a>
                                </div>
                                <div className="meta-middle">
                                  <div className="meta-middle-unit">
                                    <table className="woocommerce-product-attributes shop_attributes">
                                      <tbody>
                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_height">
                                          <th className="woocommerce-product-attributes-item__label">Height</th>
                                          <td className="woocommerce-product-attributes-item__value"><p>100</p></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className="meta-bottom">
                                  <div className="stm-product-item__price">
                                    <div className="regular_price">
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">£</span>
                                        {product.price.replace("£", "")}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="stm-product-item__add_cart man_button_round">
                                    <a
                                      href={`${SITE_BASE}/shop/?add-to-cart=${product.id}`}
                                      data-quantity={1}
                                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                                      data-product_id={product.id}
                                      aria-label={`Add "${product.title}" to your cart`}
                                      rel="nofollow"
                                    >
                                      <i className="add_to_cart_button__icon ti ti-shopping-cart" />
                                      <span className="add_to_cart_button__text">Add to cart</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
