import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FRONT_END_CODING_TOPICS, URLPaths } from "../../../utils/constant";
import style from "./FamousQuestions.module.scss";

function FamousQuestions() {
  const router = useRouter();
  return (
    <div className={style.codingQuestions}>
      <div className={style.codingQuestions__container}>
        <div className={style.codingQuestions__container__header}>
          <div className={style.codingQuestions__container__header__title}>
            Data Structures and Algorithms
          </div>
          <div className={style.codingQuestions__container__header__sub_title}>
            Practice popular Data Structures and Algorithms <br />
            Questions with best solutions.
          </div>
          <p className={style.codingQuestions__container__header__description}>
            We have compiled a list of the most frequently asked Data Structures
            <br /> and Algorithms interview questions and answers.
          </p>
        </div>
        <div className={style.codingQuestions__container__questions}>
          <div className={style.codingQuestions__container__questions__item}>
            {FRONT_END_CODING_TOPICS?.slice(0, 16)?.map((item, index) => (
              <div
                key={index}
                className={
                  style.codingQuestions__container__questions__item__title
                }
                onClick={() => {
                  router.push("/coding-question/" + item?.value);
                }}
              >
                <p
                  className={
                    style.codingQuestions__container__questions__item__title__text
                  }
                >
                  {item.title}
                </p>
                <Link
                  href={"/coding-question/" + item?.value}
                  className={
                    style.codingQuestions__container__questions__item__title__link
                  }
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Link
          href={URLPaths.TOP_FRONTEND_QUESTIONS}
          className={style.codingQuestions__container__questions__link}
        >
          View All Topics
        </Link>
      </div>
    </div>
  );
}

export default FamousQuestions;
