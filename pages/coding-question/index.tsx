import Head from "next/head";
import React from "react";
import TopCodingQuestion from "../../components/topCodingQuestions/TopCodingQuestion";

function TopFrontendQuestion() {
  return (
    <>
      <Head>
        <title>
          Best 100+ Coding Question on Data Structure and Algorithm for Frontend
          Developer | Layoutlogic
        </title>
        <meta
          name="description"
          content="
        Best 100+ Coding Question on Data Structure and Algorithm for Frontend Developer, Covered all the topics like Array, String, Linked List, Stack, Queue, Tree, Graph, Greedy, Dynamic Programming, Bit Manipulation, etc.
        "
        />
        <meta
          name="keywords"
          content="
        Best 100+ Coding Question on Data Structure and Algorithm for Frontend Developer, Array, String, Linked List, Stack, Queue, Tree, Graph, Greedy, Dynamic Programming, Bit Manipulation, etc.
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <TopCodingQuestion />
    </>
  );
}

export default TopFrontendQuestion;
