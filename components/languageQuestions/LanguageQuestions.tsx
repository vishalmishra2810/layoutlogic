import React, { useEffect, useState } from "react";
import Loader from "../../common/loader/Loader";
import { getAllFrontEndCodingQuestionsByTopics } from "../../utils/helper";
import NoPostFound from "../blogDashboard/noPostFound/NoPostFound";
import LeftSidebar from "../topCodingQuestions/leftSidebar/LeftSidebar";
import style from "./LanguageQuestions.module.scss";

function LanguageQuestions({ topic }: any) {
  const [localLoading, setLocalLoading] = React.useState<boolean>(true);
  const [listData, setListData] = useState<any>([]);
  useEffect(() => {
    if (!topic) return;
    setLocalLoading(true);
    setListData(getAllFrontEndCodingQuestionsByTopics(topic));
    setLocalLoading(false);
  }, [topic]);

  return (
    <div className={style.language}>
      <LeftSidebar topic={topic}/>
      <div className={style.language__container}>
        <div className={style.language__container__title}>
          {topic?.toUpperCase()}
        </div>
        {localLoading ? (
          <div className={style.language__container__loader}>
            <Loader />
          </div>
        ) : listData.length > 0 ? (
          <div className={style.language__container__questions}>
            {listData?.map((item: any, index: number) => (
              <div key={index} className={style.language__container__questions}>
                <div className={style.language__container__questions__question}>
                  {item.question}
                </div>
                <div className={style.language__container__questions__answer}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NoPostFound title="Currently there are no questions available." />
        )}
      </div>
    </div>
  );
}

export default LanguageQuestions;
