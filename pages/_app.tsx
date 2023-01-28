import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";
import React, { useEffect } from "react";

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
        color="#f44336"
        startPosition={0.3}
        stopDelayMs={1}
        height={2}
        showOnShallow={true}
      />
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
