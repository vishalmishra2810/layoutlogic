import React from "react";
import { ALL_COMPONENTS } from "../../database/allTech";
import { getQuestionAnswer } from "../../utils/helper";
import CodeSnippet from "../codeSnippet/CodeSnippet";
import ListShow from "../listShow/ListShow";
import MakeDifferentiate from "../makeDifferentiate/MakeDifferentiate";
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
              {questions?.components === "" ? (
                questions?.answer
              ) : questions?.components === ALL_COMPONENTS.LIST ? (
                <ListShow />
              ) : questions?.components === ALL_COMPONENTS.CODE ? (
                <CodeSnippet />
              ) : questions?.components === ALL_COMPONENTS.TABLE ? (
                <MakeDifferentiate />
              ) : (
                questions?.answer
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionDisplay;
