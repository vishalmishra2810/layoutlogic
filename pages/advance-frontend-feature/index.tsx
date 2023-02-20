import Head from "next/head";
import React from "react";
import AdvanceFrontEnd from "../../components/advanceFrontend/AdvanceFrontEnd";
import Header from "../../components/header/Header";
import { META_TAGS } from "../../utils/constant";

function Advance_frontend() {
  return (
    <>
      <Head>
        <title>Integrate Advance FrontEnd Feature in your Project</title>
        <meta name="description" content={META_TAGS.DESCRIPTION} />
        <meta name="keywords" content={META_TAGS.KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <Header />
      <AdvanceFrontEnd />
    </>
  );
}

export default Advance_frontend;
