import React from "react";
import style from "./TopCodingQuestion.module.scss";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import { useRouter } from "next/router";
import { URLPaths } from "../../utils/constant";
import Image from "next/image";
import compiler from "../../assets/compiler.png";

function TopCodingQuestion() {
  const router = useRouter();

  const quickStart = () => {
    router.push("/coding-question/array");
  };

  const startPracticing = () => {
    router.push(URLPaths.QUESTION_PRACTICE);
  };

  const openPlayground = () => {
    router.push("/playground/javascript");
  };

  return (
    <div className={style.coding}>
      <div className={style.coding__left}>
        <LeftSidebar />
      </div>
      <div className={style.coding__right}>
        <div className={style.coding__stated_page__title}>
          <p className={style.coding__stated_page__title__text}>Get Started</p>
        </div>
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
                  Do not know where to start? Here are some of the most popular
                  topics you can start with.
                </div>
                <button
                  className={style.coding__container_top_left__button}
                  onClick={quickStart}
                >
                  Start Now <span>&#8594;</span>
                </button>
              </div>
              <div className={style.coding__container_top_right}>
                <div className={style.coding__container_top_right__title}>
                  Start Practicing
                </div>
                <div className={style.coding__container_top_right__description}>
                  Start practicing with our curated list of questions without
                  any local setup required.
                </div>
                <button
                  className={style.coding__container_top_right__button}
                  onClick={startPracticing}
                >
                  Start Practicing <span>&#8594;</span>
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
            <div className={style.codingQuestions__container__play_ground}>
              <div
                className={style.codingQuestions__container__play_ground__left}
              >
                <div
                  className={
                    style.codingQuestions__container__play_ground__left__title
                  }
                >
                  Practice in Playground
                </div>
                <div
                  className={
                    style.codingQuestions__container__play_ground__left__sub_title
                  }
                >
                  Practice your coding skills with our playground and improve
                  your coding skills.Our playground supports 5+ languages ,
                  multiple themes with syntax highlighting and auto-completion.
                </div>
                <div
                  className={
                    style.codingQuestions__container__play_ground__left__button
                  }
                  onClick={openPlayground}
                >
                  Explore Playground
                </div>
                <div
                  className={
                    style.codingQuestions__container__play_ground__description
                  }
                >
                  🤔 If you are confused and do not know where to start, you can
                  start with our curated list of topics and questions.
                  <span
                    className={
                      style.codingQuestions__container__play_ground__description__link
                    }
                    onClick={() => {
                      router.push("/coding-question");
                    }}
                  >
                    Click here
                  </span>
                </div>
              </div>
              <div
                className={style.codingQuestions__container__play_ground__right}
              >
                <Image
                  src={compiler}
                  alt="play-ground"
                  width={600}
                  height={600}
                  className={
                    style.codingQuestions__container__play_ground__right__image
                  }
                />
              </div>
            </div>

            <div className={style.coding__container_conclusion}>
              <div className={style.coding__container_conclusion__title}>
                Conclusion
              </div>
              We will be using JavaScript as the programming language for all
              the questions and answers. If you are not familiar with
              JavaScript, then you can check out JavaScript Basics. We will be
              updated this page with more questions and answers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCodingQuestion;
