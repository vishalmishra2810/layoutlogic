import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LanguageQuestions from "../../components/languageQuestions/LanguageQuestions";
import { FRONT_END_CODING_TOPICS } from "../../utils/constant";

export async function getStaticPaths() {
  const paths = FRONT_END_CODING_TOPICS.map((item) => ({
    params: { topics: item?.value?.toLowerCase() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      url: params.topics,
    },
  };
}

function Details({ url }: any) {
  const router = useRouter();
  const { topics } = router.query;
  return (
    <>
      <Head>
        <title>
          {`Solve ${url} Data Structure and Algorithm Questions | Layoutlogic `}
        </title>
        <meta
          name="description"
          content={`
          Try to solve ${url} Data Structure and Algorithm Questions and get the best solution for the same in live coding environment and get selected in your dream company.
        `}
        />
        <meta
          name="keywords"
          content="
          jobs, interview, preparation, practice, problem solving, data structures, algorithms, flipkart, uber, google, amazon, microsoft, swiggy, salary, sde 1, sde 2, software engineer, software developer, frontend, reactjs, javascript, html, css, redux, scss, advance frontend snippet, project, advance project, standout project
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <LanguageQuestions topic={topics} key={topics} />
    </>
  );
}

export default Details;
