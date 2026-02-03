"use client";

import { useState } from "react";
import Link from "next/link";

const IMG_BASE = "https://manufacturer.stylemixthemes.com/industrial8/wp-content/uploads/sites/42";
const SITE_BASE = "https://manufacturer.stylemixthemes.com/industrial8";

const PRODUCTS = [
  { id: 900, title: "Chambray Vintage Stripe Quilt Cover – Black", img: `${IMG_BASE}/2018/08/i11.jpg`, price: "£3,200", slug: "chambray-vintage-stripe-quilt-cover-black" },
  { id: 899, title: "Chambray Vintage Stripe Quilt Cover – Dove", img: `${IMG_BASE}/2018/08/i13.jpg`, price: "£1,200", slug: "chambray-vintage-stripe-quilt-cover-dove" },
  { id: 886, title: "Denim European Pillowcase – Indigo", img: `${IMG_BASE}/2018/08/i16-270x270.jpg`, price: "£2,300", slug: "denim-european-pillowcase-indigo" },
  { id: 897, title: "Denim Quilt Cover Set", img: `${IMG_BASE}/2018/08/i15-270x270.jpg`, price: "£2,700", slug: "denim-quilt-cover-set" },
  { id: 898, title: "Denim Quilt Cover Set – Charcoal", img: `${IMG_BASE}/2018/08/i14-270x270.jpg`, price: "£1,400", slug: "denim-quilt-cover-set-charcoal" },
];

export function ShopContent() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

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
          <h1>Shop</h1>
          <div className="breadcrumbs" {...{ "typeof": "BreadcrumbList" }} vocab="http://schema.org/">
            <span className="home">
              <span property="itemListElement" {...{ "typeof": "ListItem" }}>
                <Link href="/" className="home" title="Go to Industrial.">
                  <span property="name">Industrial</span>
                </Link>
                <meta property="position" content="1" />
              </span>
            </span>
            <span className="archive post-product-archive current-item">Products</span>
          </div>
        </div>
      </div>

      <div id="content" className="site-content">
        <div className="stm-products-catalog">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-9 man_main_sidebar">
                <div className="content-area">
                  <div id="primary" className="content-area">
                    <main id="main" className="site-main" role="main">
                      <div className="stm-products-catalog__filter">
                        <div className="stm-filter-chosen-units" />
                        <div className="stm-view-by">
                          <a
                            href="#"
                            className={`view-grid view-type ${viewType === "grid" ? "active" : ""}`}
                            data-view="grid"
                            aria-label="Grid view"
                            onClick={(e) => { e.preventDefault(); setViewType("grid"); }}
                          >
                            <i className="fa fa-th" />
                          </a>
                          <a
                            href="#"
                            className={`view-list view-type ${viewType === "list" ? "active" : ""}`}
                            data-view="list"
                            aria-label="List view"
                            onClick={(e) => { e.preventDefault(); setViewType("list"); }}
                          >
                            <i className="fa fa-list-ul" />
                          </a>
                        </div>
                        <div className="stm-sort-by-options">
                          <form className="woocommerce-ordering" method="get">
                            <select name="orderby" className="orderby" aria-label="Order by">
                              <option value="menu_order" defaultValue="menu_order">Default sorting</option>
                              <option value="popularity">Sort by popularity</option>
                              <option value="rating">Sort by average rating</option>
                              <option value="date">Sort by latest</option>
                              <option value="price">Sort by price: low to high</option>
                              <option value="price-desc">Sort by price: high to low</option>
                            </select>
                            <input type="hidden" name="paged" value="1" />
                          </form>
                        </div>
                      </div>

                      <div className={`stm-products-main ${viewType} cols-${viewType === "list" ? "1" : "3"}`}>
                        {PRODUCTS.map((product) => (
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
