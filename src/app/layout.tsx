
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const SITE_URL = "https://app.africasuk.com";
const BRAND_NAME = "Africa Suk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Africa Suk | South Sudan Online Shopping Marketplace",
    template: "%s | Africa Suk",
  },

  description:
    "Africa Suk is South Sudan's online shopping marketplace. Shop fashion, electronics, beauty products, accessories and everyday essentials online in Juba and across South Sudan.",

  applicationName: BRAND_NAME,

  authors: [
    {
      name: BRAND_NAME,
      url: "https://africasuk.com/",
    },
  ],

  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: "Shopping",

  keywords: [
    "Africa Suk",
    "AfricaSuk",
    "South Sudan online shopping",
    "online shopping South Sudan",
    "South Sudan shopping marketplace",
    "Juba online shopping",
    "online store Juba",
    "shopping app South Sudan",
    "buy products online South Sudan",
    "fashion South Sudan",
    "electronics South Sudan",
    "beauty products South Sudan",
    "online marketplace Juba",
    "Africa Suk shopping app",
    "South Sudan ecommerce",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: "Africa Suk | South Sudan's Online Shopping Marketplace",
    description:
      "Discover fashion, electronics, beauty products and everyday essentials. Shop online in Juba and across South Sudan with Africa Suk.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Africa Suk - Shop With Confidence",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Africa Suk | Online Shopping in South Sudan",
    description:
      "Discover fashion, electronics, beauty and everyday essentials. Shop with confidence in South Sudan.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND_NAME,
  alternateName: "AfricaSuk",
  url: "https://africasuk.com/",
  logo: `${SITE_URL}/logo.png`,
  description:
    "Africa Suk is an online shopping marketplace serving customers in South Sudan.",
  areaServed: {
    "@type": "Country",
    name: "South Sudan",
  },
  sameAs: [
    "https://www.instagram.com/africa.suk",
    "https://x.com/africasuk",
    "https://www.threads.com/@africa.suk",
    "https://www.youtube.com/@AfricaSuk",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND_NAME,
  alternateName: "AfricaSuk",
  url: SITE_URL,
  description:
    "South Sudan's online shopping marketplace for fashion, electronics, beauty, accessories and everyday essentials.",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: BRAND_NAME,
    url: "https://africasuk.com/",
  },
};

const applicationSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: BRAND_NAME,
  alternateName: "AfricaSuk Shopping App",
  applicationCategory: "ShoppingApplication",
  operatingSystem: "Android, iOS",
  description:
    "Shop fashion, electronics, beauty products, accessories and everyday essentials online in South Sudan with Africa Suk.",
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  downloadUrl: [
    "https://play.google.com/store/apps/details?id=com.africasuk.app",
    "https://apps.apple.com/in/app/africa-suk/id6830582715",
  ],
  publisher: {
    "@type": "Organization",
    name: BRAND_NAME,
    url: "https://africasuk.com/",
  },
  areaServed: {
    "@type": "Country",
    name: "South Sudan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(applicationSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
