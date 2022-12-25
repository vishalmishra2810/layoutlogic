import React from "react";
import style from "./QuestionDisplay.module.scss";

interface IQuestionDispalayProps {
  questionData: any;
}
function QuestionDisplay({ questionData }: IQuestionDispalayProps) {
  return (
    <div className={style.questionDisplay}>
      <div className={style.questionDisplay_container}>
        
      </div>
    </div>
  );
}

export default QuestionDisplay;
