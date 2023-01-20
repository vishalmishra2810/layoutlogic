import Head from "next/head";
import Script from "next/script";
import BlogDashboard from "../components/blogDashboard/BlogDashboard";
import { META_TAGS } from "../utils/constant";

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
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6008576066337236"
        strategy="lazyOnload"
        async
        crossOrigin="anonymous"
      />
      <BlogDashboard />
    </>
  );
}
