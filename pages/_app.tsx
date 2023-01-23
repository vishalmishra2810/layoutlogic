import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const Footer = dynamic(() => import("../components/footer/Footer"));

export default function App({ Component, pageProps }: AppProps) {
  const scrollRef: any = React.useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [pageProps]);

  return (
    <main className="main-container" ref={scrollRef}>
      <NextNProgress
        color="#0070f3"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </main>
  );
}
