import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://app.africasuk.com"),

  title: {
    default: "AfricaSuk App | South Sudan Online Shopping",
    template: "%s | AfricaSuk",
  },

  description:
    "Download the AfricaSuk app for Android and iPhone, or shop online through the web. AfricaSuk is an online shopping platform for South Sudan.",

  keywords: [
    "AfricaSuk",
    "Africa Suk",
    "AfricaSuk app",
    "Africa Suk app",
    "AfricaSuk download",
    "South Sudan online shopping",
    "online shopping South Sudan",
    "South Sudan shopping app",
    "shopping app South Sudan",
    "South Sudan marketplace",
    "buy products online South Sudan",
  ],

  applicationName: "AfricaSuk",

  authors: [
    {
      name: "AfricaSuk",
      url: "https://africasuk.com/",
    },
  ],

  creator: "AfricaSuk",
  publisher: "AfricaSuk",

  alternates: {
    canonical: "https://app.africasuk.com/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://app.africasuk.com/",
    siteName: "AfricaSuk",
    title: "AfricaSuk App | South Sudan Online Shopping",
    description:
      "Download AfricaSuk for Android and iPhone, or shop online through the web.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "AfricaSuk",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "AfricaSuk App | South Sudan Online Shopping",
    description:
      "Download AfricaSuk and shop online in South Sudan.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}