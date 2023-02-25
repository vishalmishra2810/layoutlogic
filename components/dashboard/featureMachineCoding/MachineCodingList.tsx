import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import DrawLine from "../../../common/drawLine/DrawLine";
import { URLPaths } from "../../../utils/constant";
import { getAllMachineRoundQuestions } from "../../../utils/helper";
import style from "./MachineCodingList.module.scss";

function MachineCodingList() {
  return (
    <div className={style.machineCodingList}>
      <DrawLine
        title="Machine Coding Round Questions"
        circleNumber="2"
        firstColor="#f9d004"
        secondColor="#ff4e50"
        addMargin={true}
      />
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
            ?.slice(0, 4)
            ?.map((question: any, index: number) => (
              <Link
                className={style.machineCodingList__container__list__item}
                key={index}
                href={"/machine-round-question/" + question.slug}
              >
                <Image
                  src={question.imgUrl}
                  width={480}
                  height={280}
                  alt={question.slug}
                  style={{
                    borderRadius: "4px",
                    objectFit: "cover",
                    border: "1px solid #eaeaea",
                  }}
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
      </div>
    </div>
  );
}

export default memo(MachineCodingList);
