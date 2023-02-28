import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="main-container">
      <NextNProgress
        color="#0a7ea3"
        startPosition={0.3}
        stopDelayMs={1}
        height={4}
        showOnShallow={true}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </main>
  );
}
