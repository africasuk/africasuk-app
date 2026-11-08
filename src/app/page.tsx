
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Africa Suk | Online Shopping in South Sudan",
  description:
    "Shop online in South Sudan with Africa Suk. Discover fashion, electronics, beauty, accessories and more. Shop with confidence.",
  keywords: [
    "Africa Suk",
    "South Sudan online shopping",
    "Juba online shopping",
    "shopping app South Sudan",
    "online marketplace South Sudan",
    "buy online South Sudan",
  ],
  alternates: {
    canonical: "https://africasuk.com/",
  },
  openGraph: {
    title: "Africa Suk | Shop With Confidence",
    description:
      "Discover fashion, electronics and more with South Sudan's online shopping platform.",
    url: "https://africasuk.com/",
    siteName: "Africa Suk",
    images: ["https://app.africasuk.com/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Suk | Shop With Confidence",
    description: "South Sudan's online shopping platform.",
    images: ["https://app.africasuk.com/logo.png"],
  },
};

const LINKS = {
  android:
    "https://play.google.com/store/apps/details?id=com.africasuk.app",
  ios: "https://apps.apple.com/in/app/africa-suk/id6830582715",
  web: "https://africasuk.com/",
};

function GooglePlayIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] bg-linear-to-b from-[#21262d] to-[#12161c] shadow-[0_14px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_35px_rgba(0,195,255,0.25)]">
      <svg
        viewBox="0 0 512 512"
        className="h-10 w-10 drop-shadow-md"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gp-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
          <linearGradient id="gp-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FF87" />
            <stop offset="100%" stopColor="#00B04A" />
          </linearGradient>
          <linearGradient id="gp-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3366" />
            <stop offset="100%" stopColor="#C40029" />
          </linearGradient>
          <linearGradient id="gp-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFDE00" />
            <stop offset="100%" stopColor="#FF9500" />
          </linearGradient>
        </defs>

        <path
          d="M48.2 24.3C45.6 27.2 44 31.8 44 38v436c0 6.2 1.6 10.8 4.2 13.7l2.8 2.6 244.2-244.2v-5.8L51 21.7l-2.8 2.6z"
          fill="url(#gp-blue)"
        />
        <path
          d="M377 358.3l-81.8-81.8v-5.8l81.8-81.8 1.9 1.1 96.9 55.1c27.6 15.7 27.6 41.5 0 57.2l-96.9 55.1-1.9 1.1z"
          fill="url(#gp-yellow)"
        />
        <path
          d="M295.2 270.7L51 514.9c8.8 9.3 23.3 10.4 39.5 1.3L377 358.3l-81.8-87.6z"
          fill="url(#gp-red)"
        />
        <path
          d="M295.2 241.3L377 153.7 90.5 8.2C74.3-.9 59.8.2 51 9.5l244.2 231.8z"
          fill="url(#gp-green)"
        />
      </svg>
    </div>
  );
}

function AppleIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] bg-linear-to-b from-[#1c1c1e] via-[#0d0d0f] to-black shadow-[0_14px_30px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.22)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_35px_rgba(255,255,255,0.18)]">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-10 w-10 text-[#e5e7eb] drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]"
        aria-hidden="true"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.05-1.83.93-2.89-.91.04-2.02.6-2.67 1.36-.58.67-1.09 1.76-.95 2.8 1.02.08 2.06-.51 2.69-1.27z" />
      </svg>
    </div>
  );
}

function WebBrowserIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] bg-linear-to-b from-[#0f6844] to-[#053723] shadow-[0_14px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_35px_rgba(16,185,129,0.35)]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-emerald-300 drop-shadow-md"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    </div>
  );
}

function DownloadLink({
  href,
  label,
  description,
  children,
}: {
  href: string;
  label: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex flex-col items-center transition-transform duration-200 active:scale-95"
    >
      {children}
      <span className="mt-3 text-sm font-semibold tracking-tight text-white/90 transition-colors group-hover:text-white sm:mt-4 sm:text-base">
        {label}
      </span>
      <span className="mt-0.5 text-[11px] text-emerald-300/60 transition-colors group-hover:text-emerald-300 sm:text-xs">
        {description}
      </span>
    </a>
  );
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Africa Suk",
    alternateName: "AfricaSuk",
    url: "https://africasuk.com/",
    logo: "https://app.africasuk.com/logo.png",
    sameAs: [
      "https://www.instagram.com/africa.suk",
      "https://x.com/africasuk",
      "https://www.threads.com/@africa.suk",
      "https://www.youtube.com/@AfricaSuk",
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Africa Suk",
    alternateName: "AfricaSuk App",
    applicationCategory: "ShoppingApplication",
    operatingSystem: "Android, iOS, Web",
    description:
      "Africa Suk is an online shopping platform for South Sudan. Shop fashion, electronics, accessories and more.",
    image: "https://app.africasuk.com/logo.png",
    url: "https://africasuk.com/",
    downloadUrl: [LINKS.android, LINKS.ios],
    author: {
      "@type": "Organization",
      name: "Africa Suk",
      url: "https://africasuk.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Africa Suk",
      url: "https://africasuk.com/",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Africa Suk",
    alternateName: "AfricaSuk",
    url: "https://africasuk.com/",
    description: "Online shopping platform for South Sudan.",
  };

  return (
    <main className="relative flex h-dvh min-h-140 items-center justify-center overflow-hidden bg-[#021f12] px-4 py-4 text-white selection:bg-emerald-500 sm:px-6">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Original background lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-137.5 w-137.5 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-87.5 w-125 -translate-x-1/2 rounded-full bg-emerald-900/30 blur-[120px]" />

      {/* iPhone frame */}
      <div className="relative z-10 mx-auto h-[min(820px,calc(100dvh-32px))] w-[min(390px,calc(100vw-32px))]">
        {/* Side buttons */}
        <div className="absolute -left-0.75 top-29.5 z-0 h-9 w-0.75 rounded-l-sm bg-[#777d79] shadow-[-1px_0_2px_rgba(0,0,0,0.7)]" />
        <div className="absolute -left-0.75 top-42.5 z-0 h-14 w-0.75 rounded-l-sm bg-[#777d79] shadow-[-1px_0_2px_rgba(0,0,0,0.7)]" />
        <div className="absolute -left-0.75 top-58.75 z-0 h-14 w-0.75 rounded-l-sm bg-[#777d79] shadow-[-1px_0_2px_rgba(0,0,0,0.7)]" />
        <div className="absolute -right-0.75 top-45 z-0 h-20 w-0.75 rounded-r-sm bg-[#777d79] shadow-[1px_0_2px_rgba(0,0,0,0.7)]" />

        {/* Titanium outer body */}
        <div className="relative h-full w-full rounded-[52px] bg-linear-to-br from-[#a8aaa7] via-[#353936] to-[#777d79] p-0.75 shadow-[0_35px_90px_rgba(0,0,0,0.65),inset_0_1px_2px_rgba(255,255,255,0.65)]">
          {/* Inner black bezel */}
          <div className="relative h-full w-full overflow-hidden rounded-[49px] border-[5px] border-[#101211] bg-[#021f12]">
            {/* Screen content */}
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#021f12] px-5 py-12 text-center sm:px-7">
              {/* Original background lighting inside screen */}
              <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-80 -translate-x-1/2 rounded-full bg-emerald-900/30 blur-[90px]" />

              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-3 z-30 flex h-7.5 w-26.25 -translate-x-1/2 items-center justify-end rounded-full bg-black px-3 shadow-inner">
                <div className="h-2.5 w-2.5 rounded-full bg-[#111b24] shadow-[inset_0_0_3px_rgba(80,130,180,0.8)]" />
              </div>

              {/* Original logo */}
              <div className="relative mb-5 flex h-24 w-24 shrink-0 items-center justify-center sm:mb-6 sm:h-28 sm:w-28">
                <div className="absolute inset-0 rounded-[30px] bg-emerald-400/25 blur-2xl" />
                <div className="relative flex h-full w-full items-center justify-center rounded-[28px] bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.9)]">
                  <Image
                    src="/logo.png"
                    alt="Africa Suk logo"
                    width={112}
                    height={112}
                    priority
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Brand */}
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Africa<span className="text-emerald-400">Suk</span>
              </h1>

              <p className="mt-2.5 text-sm font-medium text-emerald-100/70 sm:text-base">
                South Sudan&apos;s online shopping platform.
              </p>

              {/* Download platforms */}
              <div className="mt-10 flex w-full items-start justify-center gap-5 sm:mt-12 sm:gap-8">
                <DownloadLink
                  href={LINKS.android}
                  label="Android"
                  description="Google Play"
                >
                  <GooglePlayIcon />
                </DownloadLink>

                <DownloadLink
                  href={LINKS.ios}
                  label="iPhone"
                  description="App Store"
                >
                  <AppleIcon />
                </DownloadLink>

                <DownloadLink
                  href={LINKS.web}
                  label="Web App"
                  description="Direct Browser"
                >
                  <WebBrowserIcon />
                </DownloadLink>
              </div>

              {/* Footer */}
              <footer className="mt-9 text-[10px] font-medium tracking-[0.18em] text-white/35 sm:mt-10 sm:text-xs">
                MADE FOR SOUTH SUDAN 🇸🇸
                <p className="mt-2 tracking-normal text-white/25">
                  © {new Date().getFullYear()} Africa Suk. All rights reserved.
                </p>
              </footer>

              {/* iPhone home indicator */}
              <div className="absolute bottom-2 left-1/2 h-1.25 w-27 -translate-x-1/2 rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
