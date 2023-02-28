import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { URLPaths } from "../../../utils/constant";
import { getAllMachineRoundQuestions } from "../../../utils/helper";
import { WHY_CHOOSE_US } from "./constant";
import style from "./MachineCodingList.module.scss";

function MachineCodingList() {
  return (
    <div className={style.machineCodingList}>
      <div className={style.machineCodingList__container}>
        <div className={style.machineCodingList__container__text}>
          <h2 className={style.machineCodingList__container__text__title}>
            Machine Coding Round Questions
          </h2>
          <p className={style.machineCodingList__container__text__description}>
            Practice most popular FrontEnd Machine Round <br /> Questions with
            best solutions.
          </p>
          <p className={style.machineCodingList__container__text__sub_heading}>
            Why choose us?
          </p>
          <div className={style.machineCodingList__container__text__list}>
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className={style.machineCodingList__container__text__list__item}
              >
                <h3
                  className={
                    style.machineCodingList__container__text__list__item__title
                  }
                >
                  {item.title}
                </h3>
                <p
                  className={
                    style.machineCodingList__container__text__list__item__description
                  }
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.machineCodingList__container__list_header}>
          Some of the questions:-
        </div>
        <div className={style.machineCodingList__container__list}>
          {getAllMachineRoundQuestions()
            ?.slice(0, 6)
            ?.map((question: any, index: number) => (
              <Link
                className={style.machineCodingList__container__list__item}
                key={index}
                href={"/machine-round-question/" + question.slug}
              >
                <Image
                  src={question.imgUrl}
                  width={285}
                  height={200}
                  alt={question.slug}
                  className={
                    style.machineCodingList__container__list__item__img
                  }
                />
                <div
                  className={
                    style.machineCodingList__container__list__item__question
                  }
                >
                  <p>{question.question}</p>
                </div>
                <div
                  className={
                    style.machineCodingList__container__list__item__tech
                  }
                >
                  {question.language?.map((tech: any, index: number) => (
                    <span
                      key={index}
                      className={
                        style.machineCodingList__container__list__item__tech__item
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
        </div>
        <Link
          href={URLPaths.FRONTEND_MACHINE_CODING_ROUND}
          className={style.machineCodingList__container__list__view_all}
        >
          View All List of Questions
        </Link>
      </div>
    </div>
  );
}

export default memo(MachineCodingList);
