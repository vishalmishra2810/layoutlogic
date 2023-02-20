import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import QuestionDisplay from "../common/questionDisplay/QuestionDisplay";
import { getAllList } from "../utils/helper";
import style from "./../styles/style.module.scss";
import SideBar from "./../components/sideBar/SideBar";
import { FOOTER_HIDE_LIST, READY_STATES_LABELS } from "../utils/constant";
import Loader from "../common/loader/Loader";
import Header from "../components/header/Header";

export async function getStaticPaths() {
  const paths = FOOTER_HIDE_LIST.map((item) => ({
    params: { database: item.toLowerCase() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      url: params.database,
    },
  };
}

function Database({ url }: any) {
  const router = useRouter();
  const { database }: any = router.query;
  return (
    <>
      <Head>
        <title>
          {`Top 50+ ${url} Interview Questions and Answers in 2023 | Layoutlogic`}
        </title>
        <meta
          name="description"
          content={`Here are the Top ${url} Interview Questions which an aspiring front end developer must prepare in 2023 for ${url} interviews to get dream job in Product Based Companies or Big Startups.
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
