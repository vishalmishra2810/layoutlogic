import React from "react";
import style from "./QuestionDisplay.module.scss";

interface IQuestionDispalayProps {
  questionData: any;
}

function QuestionDisplay({ questionData }: IQuestionDispalayProps) {
  return (
    <div className={style.questionDisplay}>
      <div className={style.questionDisplay_container}>
        {questionData?.map((questions: any, index: number) => (
          <div
            key={index}
            className={style.questionDisplay_question}
            id={"#" + questions?.question}
          >
            <div className={style.questionDisplay_question_title}>
              {index + 1 + ". "} {questions?.question}
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
