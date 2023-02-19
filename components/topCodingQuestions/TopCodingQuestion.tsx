import React from "react";
import style from "./TopCodingQuestion.module.scss";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import { useRouter } from "next/router";
import { URLPaths } from "../../utils/constant";

function TopCodingQuestion() {
  const router = useRouter();

  const quickStart = () => {
    router.push("/coding-question/array");
  };

  const startPracticing = () => {
    router.push(URLPaths.QUESTION_PRACTICE);
  };

  return (
    <div className={style.coding}>
      <LeftSidebar />
      <div className={style.coding__stated_page}>
        <div className={style.coding_header}>
          <div className={style.coding_header__title}>
            FrontEnd Coding Questions
          </div>
          <div className={style.coding_header__description}>
            List of top Front End Coding Round Questions and Answers for your
            next interview.
          </div>
        </div>
        <div className={style.coding__container}>
          <div className={style.coding__container_top}>
            <div className={style.coding__container_top_left}>
              <div className={style.coding__container_top_left__title}>
                Quick Start
              </div>
              <div className={style.coding__container_top_left__description}>
                Don't know where to start? Here are some of the most popular
                topics you can start with.
              </div>
              <button
                className={style.coding__container_top_left__button}
                onClick={quickStart}
              >
                Start Now
              </button>
            </div>
            <div className={style.coding__container_top_right}>
              <div className={style.coding__container_top_right__title}>
                Start Practicing
              </div>
              <div className={style.coding__container_top_right__description}>
                Start practicing with our curated list of questions without any
                local setup required.
              </div>
              <button
                className={style.coding__container_top_right__button}
                onClick={startPracticing}
              >
                Start Practicing
              </button>
            </div>
          </div>
          <div className={style.coding__container_item}>
            <div className={style.coding__container_item__title}>
              What is this page about?
            </div>
            <div className={style.coding__container_item__description}>
              This page is about the list of top Front End Coding Round
              Questions and Answers for your next interview.
              <ul className={style.coding__container_item__description__list}>
                <li
                  className={
                    style.coding__container_item__description__list__item
                  }
                >
                  For each question, you will find the question, answer, and
                  explanation.
                </li>
                <li
                  className={
                    style.coding__container_item__description__list__item
                  }
                >
                  If topics will be hard to understand, then we will provide
                  links to the relevant articles or videos.
                </li>
                <li
                  className={
                    style.coding__container_item__description__list__item
                  }
                >
                  We will provide you with the best possible answer to the
                  question.
                </li>
                <li
                  className={
                    style.coding__container_item__description__list__item
                  }
                >
                  We will provide real time IDE to practice the questions and
                  answers by yourself.
                </li>
              </ul>
            </div>
          </div>
          <div className={style.coding__container_conclusion}>
            <div className={style.coding__container_conclusion__title}>
              Conclusion
            </div>
            We will be using JavaScript as the programming language for all the
            questions and answers. If you are not familiar with JavaScript, then
            you can check out JavaScript Basics. We will be updated this page
            with more questions and answers.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCodingQuestion;
