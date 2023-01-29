import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="main-container">
      <NextNProgress
        color="#FF5555"
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
