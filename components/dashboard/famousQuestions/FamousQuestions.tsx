import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FRONT_END_CODING_TOPICS, URLPaths } from "../../../utils/constant";
import style from "./FamousQuestions.module.scss";
import compiler from "../../../assets/compiler.png";

function FamousQuestions() {
  const router = useRouter();

  const openPlayground = () => {
    router.push("/playground/javascript");
  };
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
        <div className={style.codingQuestions__container__play_ground}>
          <div className={style.codingQuestions__container__play_ground__left}>
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
              Practice your coding skills with our playground and improve your
              coding skills.Our playground supports 5+ languages , multiple
              themes with syntax highlighting and auto-completion.
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
              🤔 If you are confused and don't know where to start, you can
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
          <div className={style.codingQuestions__container__play_ground__right}>
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
