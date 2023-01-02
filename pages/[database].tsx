import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import QuestionDisplay from "../common/questionDisplay/QuestionDisplay";
import { getAllList } from "../utils/helper";
import style from "./../styles/style.module.scss";
import SideBar from "./../components/sideBar/SideBar";
import { META_TAGS, READY_STATES_LABELS } from "../utils/constant";

function Database() {
  const router = useRouter();
  const { database }: any = router.query;
  return (
    <>
      <Head>
        <title>CarrierBoosts</title>
        <meta name="description" content={META_TAGS.DESCRIPTION} />
        <meta name="keywords" content={META_TAGS.KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/carrierboosts.png" />
      </Head>
      <div className={style.database}>
        {READY_STATES_LABELS[database?.toLowerCase()] ? (
          <div className={style.database_main_container}>
            <div className={style.database_sideBar}>
              <SideBar database={database} />
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
            <h1>Coming Soon</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Database;
