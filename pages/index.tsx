import dynamic from "next/dynamic";
import Head from "next/head";
import Dashboard from "../components/dashboard/Dashboard";
import Header from "../components/header/Header";
import { META_TAGS } from "../utils/constant";
const Footer = dynamic(() => import("../components/footer/Footer"));

export default function Home() {
  return (
    <>
      <Head>
        <title>LayoutLogic</title>
        <meta name="description" content={META_TAGS.DESCRIPTION} />
        <meta name="keywords" content={META_TAGS.KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}
