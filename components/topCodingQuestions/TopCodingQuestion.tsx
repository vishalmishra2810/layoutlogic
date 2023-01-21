import React, { useState } from "react";
import { useEffect } from "react";
import { FRONT_END_CODING_TOPICS } from "../../utils/constant";
import { getAllFrontEndCodingQuestions } from "../../utils/helper";
import TopicsList from "../../common/topicsList/TopicsList";
import style from "./TopCodingQuestion.module.scss";

function TopCodingQuestion() {
  const [selectedTopic, setSelectedTopic] = React.useState<string>("All");
  const [listData, setListData] = useState<any>([]);
  useEffect(() => {
    setListData(getAllFrontEndCodingQuestions());
  }, []);

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
        {listData?.map((item: any, index: number) => (
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
        ))}
      </div>
    </div>
  );
}

export default TopCodingQuestion;
