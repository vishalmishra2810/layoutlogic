import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import CodingQuestions from "../../components/codingQuestions/CodingQuestions";
import { ALL_PATH_MACHINE_CODING } from "../../utils/constant";

export async function getStaticPaths() {
  const paths = ALL_PATH_MACHINE_CODING.map((item) => ({
    params: { question: item.toLowerCase() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      url: params.question,
    },
  };
}

function Questions({ url }: any) {
  const router = useRouter();
  const { question }: any = router.query;
  return (
    <>
      <Head>
        <title>
          {`Solve ${url} FrontEnd Machine Coding Questions | Layoutlogic `}
        </title>
        <meta
          name="description"
          content={`
          Try to solve ${url} FrontEnd Machine Coding Questions and get the best solution for the same in live coding environment.
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
      <CodingQuestions slug={question} />
    </>
  );
}

export default Questions;
