import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { getDescription } from "../../utils/helper";
import style from "./QuestionDisplay.module.scss";

interface IQuestionDispalayProps {
  questionData: any;
  database: string;
}

function QuestionDisplay({ questionData, database }: IQuestionDispalayProps) {
  const { selectedQuestion } = useSelector(
    (state: any) => state.selectQuestion
  );

  return (
    <div className={style.questionDisplay}>
      <div className={style.questionDisplay_container}>
        <div className={style.questionDisplay_container_title}>
          {getDescription(database)}
        </div>
        {questionData?.map((questions: any, index: number) => (
          <div
            key={index}
            className={`${style.questionDisplay_question} ${
              selectedQuestion?.length > 0 &&
              selectedQuestion === questions?.question
                ? style.questionDisplay_question_selected
                : ""
            }`}
            id={questions?.question}
          >
            <div className={style.questionDisplay_question_title}>
              {questions?.question}
            </div>
            <div className={style.questionDisplay_question_answer}>
              {questions?.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionDisplay;
