import React, { memo } from "react";
import Modal from "../../../common/modal/Modal";
import style from "./FamousQuestions.module.scss";
import sourceIcon from "../../../assets/sourceCode.jpg";
import { URLPaths } from "../../../utils/constant";

function FamousQuestions() {
  return (
    <div className={style.codingQuestions}>
      <div className={style.codingQuestions__container}>
        <div className={style.codingQuestions__container__header}>
          These are the famous coding questions asked in almost every front-end
          interview
        </div>
        <div className={style.codingQuestions__container__questions}>
          <Modal
            title="Top Front-End Coding Questions"
            slug="top-front-end-coding-questions"
            description="
            we have compiled a list of the most frequently asked front-end
            interview questions and answers. These questions are the most
            important ones that you need to know to ace your front-end
            interview.
            "
            height={600}
            //@ts-ignore
            url={sourceIcon}
            width={1016}
            route={URLPaths.TOP_FRONTEND_QUESTIONS}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(FamousQuestions);
