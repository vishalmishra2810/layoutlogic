import Head from "next/head";
import React from "react";
import Header from "../../components/header/Header";
import MachineCodingQuestionsList from "../../components/machineCodingQuestion/MachineCodingQuestionsList";

function MachineCodingRound() {
  return (
    <>
      <Head>
        <title>
          Top 20+ FrontEnd Machine Coding Round Questions and Answers in 2023 |
          Layoutlogic
        </title>
        <meta
          name="description"
          content="
        Here are the Top 20+ FrontEnd Machine Coding Round Questions which an aspiring front end developer must prepare in 2023 for FrontEnd Machine Coding Round interviews to get dream job in Product Based Companies or Big Startups.
        "
        />
        <meta
          name="keywords"
          content="
         top, best, FrontEnd Machine Coding Round, questions, answers, product based companies, startups, coding, interview, preparation, practice, problem solving, data structures, algorithms, flipkart, uber, google, amazon, microsoft, swiggy, salary, sde 1, sde 2, software engineer, software developer, frontend, reactjs, javascript, html, css, redux, scss, advance frontend snippet, project, advance project, standout project, live Ide, online ide, online compiler, online editor,stackblitz
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <Header />
      <MachineCodingQuestionsList />
    </>
  );
}

export default MachineCodingRound;
