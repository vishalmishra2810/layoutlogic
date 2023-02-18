import Head from "next/head";
import React from "react";
import Header from "../components/header/Header";
import TopCodingQuestion from "../components/topCodingQuestions/TopCodingQuestion";
import { META_TAGS } from "../utils/constant";

function TopFrontendQuestion() {
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
      <TopCodingQuestion />
    </>
  );
}

export default TopFrontendQuestion;
