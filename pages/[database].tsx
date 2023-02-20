import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import QuestionDisplay from "../common/questionDisplay/QuestionDisplay";
import { getAllList } from "../utils/helper";
import style from "./../styles/style.module.scss";
import SideBar from "./../components/sideBar/SideBar";
import { READY_STATES_LABELS } from "../utils/constant";
import Loader from "../common/loader/Loader";
import Header from "../components/header/Header";

function Database() {
  const router = useRouter();
  const { database }: any = router.query;
  return (
    <>
      <Head>
        <title>
          Reactjs, JavaScript, HTML, CSS, Redux, SCSS Top Interview Practice
          Questions and Answers
        </title>
        <meta
          name="description"
          content="Practice and Prepare for Reactjs, JavaScript, HTML, CSS, Redux, SCSS top Interview Questions and Answers with best solutions and code examples for Product Based Companies and Startups."
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
      <Header />
      <div className={style.database} key={database}>
        {READY_STATES_LABELS[database?.toLowerCase()] ? (
          <div className={style.database_main_container}>
            <div className={style.database_sideBar}>
              <SideBar database={database} key={database} />
            </div>
            <div className={style.database_container}>
              <QuestionDisplay
                questionData={getAllList(database)}
                database={database}
              />
            </div>
          </div>
        ) : (
          <div className={style.database_coming_soon_container}>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}

export default Database;
