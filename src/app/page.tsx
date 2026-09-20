"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

const LINKS = {
  android:
    "https://play.google.com/store/apps/details?id=com.africasuk.app",
  ios: "#",
  web: "https://africasuk.com/",
};

const IOS_LAUNCH_DATE = new Date(2027, 3, 1, 0, 0, 0).getTime();

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

function getCountdownSnapshot() {
  const diff = IOS_LAUNCH_DATE - Date.now();

  if (diff <= 0) {
    return "Available soon";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = String(
    Math.floor((diff / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");

  const minutes = String(
    Math.floor((diff / (1000 * 60)) % 60)
  ).padStart(2, "0");

  const seconds = String(
    Math.floor((diff / 1000) % 60)
  ).padStart(2, "0");

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function getServerSnapshot() {
  return "--d --h --m --s";
}

/* Google Play icon */
function GooglePlayIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] bg-linear-to-b from-[#21262d] to-[#12161c] shadow-[0_14px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_35px_rgba(0,195,255,0.25)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[22px] bg-linear-to-b from-white/15 to-transparent" />

      <svg
        viewBox="0 0 512 512"
        className="h-10 w-10 drop-shadow-md"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="gp-blue"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>

          <linearGradient
            id="gp-green"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00FF87" />
            <stop offset="100%" stopColor="#00B04A" />
          </linearGradient>

          <linearGradient
            id="gp-red"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF3366" />
            <stop offset="100%" stopColor="#C40029" />
          </linearGradient>

          <linearGradient
            id="gp-yellow"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
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

/* Apple icon */
function AppleExactBrandIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] bg-linear-to-b from-[#1c1c1e] via-[#0d0d0f] to-[#000000] shadow-[0_14px_30px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.22)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_35px_rgba(255,255,255,0.18)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[22px] bg-linear-to-b from-white/15 to-transparent" />

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

/* Web icon */
function WebBrowserIcon() {
  return (
    <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] bg-linear-to-b from-[#0f6844] to-[#053723] shadow-[0_14px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_35px_rgba(16,185,129,0.35)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[22px] bg-linear-to-b from-white/15 to-transparent" />

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

export default function Home() {
  const countdownText = useSyncExternalStore(
    subscribe,
    getCountdownSnapshot,
    getServerSnapshot
  );

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AfricaSuk",
    alternateName: "Africa Suk",
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
    name: "AfricaSuk",
    alternateName: "Africa Suk App",
    applicationCategory: "ShoppingApplication",
    operatingSystem: "Android, iOS, Web",
    description:
      "AfricaSuk is an online shopping platform for South Sudan. Shop online through the AfricaSuk app or web platform.",
    image: "https://app.africasuk.com/logo.png",
    url: "https://app.africasuk.com/",
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.africasuk.app",
    author: {
      "@type": "Organization",
      name: "AfricaSuk",
      url: "https://africasuk.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "AfricaSuk",
      url: "https://africasuk.com/",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AfricaSuk",
    alternateName: "Africa Suk",
    url: "https://africasuk.com/",
    description: "Online shopping platform for South Sudan.",
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#021f12] px-6 py-12 text-white selection:bg-emerald-500">
      {/* Structured data */}
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

      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-137.5 w-137.5 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-87.5 w-125 -translate-x-1/2 rounded-full bg-emerald-900/30 blur-[120px]" />

      {/* Main */}
      <div className="relative z-10 mx-auto w-full max-w-xl text-center">

        {/* Logo */}
        <div className="relative mx-auto mb-7 flex h-32 w-32 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-[34px] bg-emerald-400/25 blur-2xl" />

          <div className="relative flex h-full w-full items-center justify-center rounded-4xl bg-white p-4 shadow-[0_24px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-transform duration-500 hover:scale-105">
            <Image
              src="/logo.png"
              alt="AfricaSuk logo"
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

        <p className="mt-2.5 text-base font-medium text-emerald-100/70">
          South Sudan&apos;s online shopping platform.
        </p>

        {/* Platforms */}
        <div className="mt-14 flex items-start justify-center gap-8 sm:gap-14">

          {/* Android */}
          <a
            href={LINKS.android}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download AfricaSuk for Android from Google Play"
            className="group flex cursor-pointer flex-col items-center transition-transform duration-200 active:scale-95"
          >
            <GooglePlayIcon />

            <span className="mt-4 text-base font-semibold tracking-tight text-white/90 group-hover:text-white">
              Android
            </span>

            <span className="text-xs text-emerald-300/60 transition-colors group-hover:text-emerald-300">
              Google Play
            </span>
          </a>

          {/* iPhone */}
          <div className="group flex cursor-default flex-col items-center">
            <AppleExactBrandIcon />

            <span className="mt-4 text-base font-semibold tracking-tight text-white/90">
              iPhone
            </span>

            <div className="mt-0.5 flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300/80">
                Coming April 2027
              </span>

              <span className="mt-0.5 font-mono text-[11px] font-medium tabular-nums text-white/80">
                {countdownText}
              </span>
            </div>
          </div>

          {/* Web */}
          <a
            href={LINKS.web}
            aria-label="Open AfricaSuk Web App"
            className="group flex cursor-pointer flex-col items-center transition-transform duration-200 active:scale-95"
          >
            <WebBrowserIcon />

            <span className="mt-4 text-base font-semibold tracking-tight text-white/90 group-hover:text-white">
              Web App
            </span>

            <span className="text-xs text-emerald-300/60 transition-colors group-hover:text-emerald-300">
              Direct Browser
            </span>
          </a>
        </div>

        {/* SEO content */}
        <section className="mx-auto mt-14 max-w-lg">
          <h2 className="text-lg font-semibold text-white/90">
            AfricaSuk — Online Shopping in South Sudan
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/45">
            Shop online with AfricaSuk and discover products available in
            South Sudan. Download the AfricaSuk app for Android or use
            AfricaSuk directly from your web browser.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-14 text-xs font-normal tracking-wider text-white/30">
          © {new Date().getFullYear()} AfricaSuk. All rights reserved.
        </footer>
      </div>
    </main>
  );
}