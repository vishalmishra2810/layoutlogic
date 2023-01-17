import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
