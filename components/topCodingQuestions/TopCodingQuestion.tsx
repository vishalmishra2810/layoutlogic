import React, { useState } from "react";
import { useEffect } from "react";
import { FRONT_END_CODING_TOPICS } from "../../utils/constant";
import {
  getAllFrontEndCodingQuestions,
  getAllFrontEndCodingQuestionsByTopics,
} from "../../utils/helper";
import TopicsList from "../../common/topicsList/TopicsList";
import style from "./TopCodingQuestion.module.scss";
import Loader from "../../common/loader/Loader";
import NoPostFound from "../blogDashboard/noPostFound/NoPostFound";

function TopCodingQuestion() {
  const [selectedTopic, setSelectedTopic] = React.useState<string>("All");
  const [listData, setListData] = useState<any>([]);
  const [localLoading, setLocalLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setLocalLoading(true);
    if (selectedTopic === "All") {
      setListData(getAllFrontEndCodingQuestions());
      setLocalLoading(false);
    } else {
      setListData(getAllFrontEndCodingQuestionsByTopics(selectedTopic));
      setLocalLoading(false);
    }
  }, [selectedTopic]);

  return (
    <div className={style.frontEndCodingQuestions}>
      <TopicsList
        title="Front End Coding Round Questions"
        description="List of top Front End Coding Round Questions and Answers for your next interview."
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        topicList={FRONT_END_CODING_TOPICS}
      />
      <div className={style.frontEndCodingQuestions__container}>
        {localLoading ? (
          <div className={style.frontEndCodingQuestions__container__loader}>
            <Loader />
          </div>
        ) : listData?.length > 0 ? (
          listData?.map((item: any, index: number) => (
            <div
              key={index}
              className={style.frontEndCodingQuestions__container__questions}
            >
              <div
                className={
                  style.frontEndCodingQuestions__container__questions__question
                }
              >
                {item.question}
              </div>
              <div
                className={
                  style.frontEndCodingQuestions__container__questions__answer
                }
              >
                {item.answer}
              </div>
            </div>
          ))
        ) : (
          <NoPostFound title="Currently there are no questions available." />
        )}
      </div>
    </div>
  );
}

export default TopCodingQuestion;
