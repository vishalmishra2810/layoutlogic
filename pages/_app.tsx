import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/footer/Footer"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="main-container">
      <Provider store={store}>
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
      </Provider>
    </main>
  );
}
