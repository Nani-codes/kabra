import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BodyClass } from "@/components/BodyClass";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home - Industrial",
  description:
    "Expert Technical Support High-Performance Machines Profitable Solutions Manufacturer's high end manufacturing services are a perfect complement to today's high tech industries.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Home - Industrial",
    description:
      "Expert Technical Support High-Performance Machines Profitable Solutions Manufacturer's high end manufacturing services are a perfect complement to today's...",
    siteName: "Industrial",
    images: [
      {
        url: "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://manufacturer.stylemixthemes.com/industrial8/#webpage",
      url: "https://manufacturer.stylemixthemes.com/industrial8/",
      name: "Home - Industrial",
      isPartOf: { "@id": "https://manufacturer.stylemixthemes.com/industrial8/#website" },
      primaryImageOfPage: { "@id": "https://manufacturer.stylemixthemes.com/industrial8/#primaryimage" },
      image: { "@id": "https://manufacturer.stylemixthemes.com/industrial8/#primaryimage" },
      thumbnailUrl:
        "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png",
      datePublished: "2018-07-17T14:43:20+00:00",
      dateModified: "2021-08-18T06:26:50+00:00",
      breadcrumb: { "@id": "https://manufacturer.stylemixthemes.com/industrial8/#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: [{ "@type": "ReadAction", target: ["https://manufacturer.stylemixthemes.com/industrial8/"] }],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://manufacturer.stylemixthemes.com/industrial8/#primaryimage",
      url: "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png",
      contentUrl:
        "https://manufacturer.stylemixthemes.com/industrial/wp-content/uploads/sites/2/2018/08/dots.png",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://manufacturer.stylemixthemes.com/industrial8/#breadcrumb",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
    },
    {
      "@type": "WebSite",
      "@id": "https://manufacturer.stylemixthemes.com/industrial8/#website",
      url: "https://manufacturer.stylemixthemes.com/industrial8/",
      name: "Industrial",
      description: "Factory, Plant Theme",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://manufacturer.stylemixthemes.com/industrial8/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_cc3bb42ea462f5aa0e8a57d3a5f6339f.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_541e2ced151704f4ff1844c6de47ec02.css"
          media="only screen and (max-width: 768px)"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_single_6fcaa1f100419d3263658a8621621ef3.css?ver=1676984102"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_single_2162d42f883723f35ae0ff8752e7ee02.css?ver=1676984103"
          media="all"
        />
        {/* Page-specific Elementor CSS (sustainability, investor-relations, services, contacts) */}
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_single_caca626e1ca27ee7d332b48124dc8422.css?ver=1677066868"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_single_ea2aac0047a4960169b54195faf219d8.css?ver=1676994977"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_single_740d9201542822028cfc119145c6c1dc.css?ver=1676992019"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_single_900f2fe09caa2126e5ac77ecc5e7cb42.css?ver=1677014248"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_single_be94c25e75e10b9b2ef5c667c6f2ac7a.css?ver=1676984103"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-content/cache/autoptimize/42/css/autoptimize_single_8d5f5014174d52a4cbf9b2a5623c5a9b.css?ver=1676984103"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://manufacturer.stylemixthemes.com/industrial8/wp-includes/css/dashicons.min.css?ver=6.2"
          media="all"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/themify-icons@0.1.2/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable}`}
        data-font-variable={poppins.variable}
        suppressHydrationWarning
      >
        <BodyClass />
        <div id="page" className="man_page" data-title="131">
          <Header />
          <div className="stm-title-banner-divider" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
