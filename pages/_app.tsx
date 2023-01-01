import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import { Analytics } from "@vercel/analytics/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </>
  );
}
