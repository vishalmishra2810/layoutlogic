import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import QuestionDisplay from "../common/questionDisplay/QuestionDisplay";
import { getAllList } from "../utils/helper";
import style from "./../styles/style.module.scss";
import SideBar from "./../components/sideBar/SideBar";
import { META_TAGS, READY_STATES_LABELS } from "../utils/constant";
import Loader from "../common/loader/Loader";

function Database() {
  const scrollRef: any = React.useRef(null);
  const router = useRouter();
  const { database }: any = router.query;
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [database]);
  return (
    <>
      <Head>
        <title>LayoutLogic</title>
        <meta name="description" content={META_TAGS.DESCRIPTION} />
        <meta name="keywords" content={META_TAGS.KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <div className={style.database} ref={scrollRef}>
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
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}

export default Database;
