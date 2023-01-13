import Image from "next/image";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { URLPaths } from "../../../utils/constant";
import {
  getAllMachineRoundQuestions,
  getTechIcon,
} from "../../../utils/helper";
import style from "./MachineCodingList.module.scss";

function MachineCodingList() {
  const router = useRouter();
  return (
    <div className={style.machineCodingList} id="frontend_machine_coding_round">
      <div className={style.machineCodingList__container}>
        <div className={style.machineCodingList__container__header}>
          <h1 className={style.machineCodingList__container__header__title}>
            FrontEnd Machine Coding Round Questions
          </h1>
          <p
            className={style.machineCodingList__container__header__description}
          >
            These are the top questions that are asked in the FrontEnd Machine
            Coding Round. You can practice these questions to get better.
          </p>
          <div
            className={style.machineCodingList__container__header__btn}
            onClick={() => {
              router.push(URLPaths.FRONTEND_MACHINE_CODING_ROUND);
            }}
          >
            Open All Machine Coding Round Questions
          </div>
        </div>
        <div className={style.machineCodingList__container__list}>
          {getAllMachineRoundQuestions()
            ?.slice(0, 10)
            ?.map((question: any, index: number) => (
              <div
                className={style.machineCodingList__container__list__item}
                key={index}
                onClick={() => {
                  router.push("/questions/" + question.slug);
                }}
              >
                <div
                  className={
                    style.machineCodingList__container__list__item__question
                  }
                >
                  <p>{question.question}</p>
                </div>
                <div
                  className={
                    style.machineCodingList__container__list__item__img
                  }
                >
                  <Image
                    src={question.imgUrl}
                    width={300}
                    height={200}
                    alt={question.slug}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  className={
                    style.machineCodingList__container__list__item__language
                  }
                >
                  {question?.language?.map((language: any, index: number) => (
                    <div
                      className={
                        style.machineCodingList__container__list__item__language__item
                      }
                      key={index}
                    >
                      <Image
                        alt={language}
                        src={getTechIcon(language)}
                        width={30}
                        height={30}
                        title={language}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default memo(MachineCodingList);
