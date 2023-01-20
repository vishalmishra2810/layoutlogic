import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import ReadBlog from "../../components/readBlog/ReadBlog";
import style from "../../styles/style.module.scss";
import { META_TAGS } from "../../utils/constant";

function OpenBlog() {
  const router = useRouter();
  const { blog } = router.query;
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
      <div className={style.openBlog}>
        <ReadBlog slug={blog} />
      </div>
    </>
  );
}

export default OpenBlog;