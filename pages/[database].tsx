import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import QuestionDisplay from "../common/questionDisplay/QuestionDisplay";
import { getAllList, getFileContent } from "../utils/helper";
import style from "./../styles/style.module.scss";
import SideBar from "./../components/sideBar/SideBar";

function Database() {
  const router = useRouter();
  const { database }: any = router.query;
  return (
    <>
      <Head>
        <title>ClearJobs</title>
        <meta
          name="description"
          content="Best website to prepare for interviews and get a job"
        />
        <meta
          name="keywords"
          content="React, Next.js, TypeScript, HTML, CSS, JavaScript, Interview, Job, Preparation , ClearJobs , ClearJobs.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/clearjobs.png" />
      </Head>
      <div className={style.database}>
        <div className={style.database_main_container}>
          <div className={style.database_sideBar}>
            <SideBar database={database} />
          </div>
          <div className={style.database_container}>
            <QuestionDisplay questionData={getAllList(database)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Database;
