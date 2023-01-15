import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6008576066337236"
        crossOrigin="anonymous"
      />
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
