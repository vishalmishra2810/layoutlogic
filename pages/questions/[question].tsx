import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CodingQuestions from "../../components/codingQuestions/CodingQuestions";
import { META_TAGS, URLPaths } from "../../utils/constant";

function Questions() {
  const router = useRouter();
  const { question }: any = router.query;
  const sendToHomePage = () => {
    router.push(URLPaths.HOME);
  };
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
      {/* <div className="go_back_class" onClick={sendToHomePage}>
        Go Back
      </div> */}
      <CodingQuestions slug={question} />
    </>
  );
}

export default Questions;
