import Head from "next/head";
import React from "react";
import Header from "../../components/header/Header";
import MachineCodingQuestionsList from "../../components/machineCodingQuestion/MachineCodingQuestionsList";

function MachineCodingRound() {
  return (
    <>
      <Head>
        <title>
          FrontEnd Machine Coding Round Questions and Answers for Top Product
          Based Companies and Startups
        </title>
        <meta
          name="description"
          content="
        Top FrontEnd Machine Coding Round Questions and Answers for Product Based Companies and Startups. Try to solve these questions and improve your coding skills without any local setup.
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
