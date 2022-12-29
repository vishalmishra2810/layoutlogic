import { useRouter } from "next/router";
import React from "react";
import { ALL_TECH } from "../../../database/allTech";
import { READY_STATES_LABELS } from "../../../utils/constant";
import { getAllTopQuestions } from "../../../utils/helper";
import style from "./FeaturedQuestions.module.scss";

function FeaturedQuestions() {
  const router = useRouter();
  const openReactjsQuestion = (question: string) => () => {
    router.push(`/reactjs#${question}`);
  };

  return (
    <div className={style.featuredQuestions}>
      <div className={style.featuredQuestions_box}>
        <div className={style.featuredQuestions_box_title}>
          <h2>Top Reactjs Questions</h2>
        </div>
        <div className={style.featuredQuestions_box_questions}>
          {getAllTopQuestions(ALL_TECH.REACTJS)?.map(
            (question: any, index: number) => (
              <div
                className={style.featuredQuestions_box_questions_question}
                key={index}
                onClick={openReactjsQuestion(question?.question)}
              >
                <h3>{question.question}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedQuestions;
