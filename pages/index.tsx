import Head from "next/head";
import Dashboard from "../components/dashboard/Dashboard";
import Footer from "../components/footer/Footer";
import { META_TAGS } from "../utils/constant";

export default function Home() {
  return (
    <>
      <Head>
        <title>CareerBoosts</title>
        <meta name="description" content={META_TAGS.DESCRIPTION} />
        <meta name="keywords" content={META_TAGS.KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/careerboosts.png" />
      </Head>
      <Dashboard />
      <Footer />
    </>
  );
}
