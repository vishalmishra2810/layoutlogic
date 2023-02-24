import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { DEVICE_TYPE, URLPaths } from "../../../utils/constant";
import {
  getAllMachineRoundQuestions,
  getTechIcon,
} from "../../../utils/helper";
import useWindowWidth from "../../../utils/hooks/useWindowWidth";
import style from "./MachineCodingList.module.scss";

function MachineCodingList() {
  const windowWidth = useWindowWidth();
  return (
    <div className={style.machineCodingList}>
      <div className={style.design}>
        <div className={style.line}></div>
        <div className={style.circle}>2</div>
        <div className={style.title}>Machine Coding Round Questions</div>
      </div>
      <div className={style.machineCodingList__container}>
        <div className={style.machineCodingList__container__header}>
          <h2 className={style.machineCodingList__container__header__title}>
            FrontEnd Machine Coding Round Questions
          </h2>
          <p
            className={style.machineCodingList__container__header__description}
          >
            These are the top questions that are asked in the FrontEnd Machine
            Coding Round. You can practice these questions to get better.
          </p>
          <Link
            href={URLPaths.FRONTEND_MACHINE_CODING_ROUND}
            className={style.machineCodingList__container__header__btn}
          >
            Open All Machine Coding Round Questions
          </Link>
        </div>
        <div className={style.machineCodingList__container__list}>
          {getAllMachineRoundQuestions()
            ?.slice(0, windowWidth > DEVICE_TYPE.MOBILE ? 6 : 4)
            ?.map((question: any, index: number) => (
              <Link
                className={style.machineCodingList__container__list__item}
                key={index}
                href={"/machine-round-question/" + question.slug}
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
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default memo(MachineCodingList);
