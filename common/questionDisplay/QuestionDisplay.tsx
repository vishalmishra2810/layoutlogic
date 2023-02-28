import React from "react";
import { getDescription } from "../../utils/helper";
import style from "./QuestionDisplay.module.scss";

interface IQuestionDisplayProps {
  questionData: any;
  database: string;
}

function QuestionDisplay({ questionData, database }: IQuestionDisplayProps) {
  return (
    <div className={style.questionDisplay}>
      <div className={style.questionDisplay_container}>
        {questionData?.map((questions: any, index: number) => (
          <div
            key={index}
            className={style.questionDisplay_question}
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
