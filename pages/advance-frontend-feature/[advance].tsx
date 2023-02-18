import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ShowAdvanceFrontEnd from "../../components/showAdvanceFrontEnd/ShowAdvanceFrontEnd";
import { META_TAGS } from "../../utils/constant";

function AdvanceFrontEnd() {
  const router = useRouter();
  const { advance } = router.query;
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
      <ShowAdvanceFrontEnd slug={advance} />
    </>
  );
}

export default AdvanceFrontEnd;
