import Head from "next/head";
import React from "react";
import Header from "../../components/header/Header";
import PracticeQuestion from "../../components/practice/PracticeQuestion";

function Practice() {
  return (
    <>
      <Head>
        <title>Solve Top Data Structure and Algorithm Problems </title>
        <meta
          name="description"
          content="
         Practice and Prepare for Problem Solving, Data Structures, Algorithms top Interview Questions and Answers with best solutions and code examples for Product Based Companies and Startups.
        "
        />
        <meta
          name="keywords"
          content="
         practice, problem solving, data structures, algorithms, flipkart, uber, google, amazon, microsoft, swiggy, salary, sde 1, sde 2, software engineer, software developer, frontend, reactjs, javascript, html, css, redux, scss, advance frontend snippet, project, advance project, standout project
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <Header />
      <PracticeQuestion />
    </>
  );
}

export default Practice;
