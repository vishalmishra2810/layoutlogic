import Head from "next/head";
import Dashboard from "../components/dashboard/Dashboard";
import Footer from "../components/footer/Footer";
import { META_TAGS } from "../utils/constant";

export default function Home() {
  return (
    <>
      <Head>
        <title>CarrierBoosts</title>
        <meta name="description" content={META_TAGS.DESCRIPTION} />
        <meta name="keywords" content={META_TAGS.KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/carrierboosts.png" />
      </Head>
      <Dashboard />
      <Footer />
    </>
  );
}
