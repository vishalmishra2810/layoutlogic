import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CONSTANT_VALUE } from "../../utils/constant";
import {
  getAllFrontEndCodingQuestions,
  getAllMachineRoundQuestions,
  getTechIcon,
} from "../../utils/helper";
import style from "./FrontEndCodingQuestions.module.scss";

function FrontEndCodingQuestions({ slug }: any) {
  const router = useRouter();
  const [listData, setListData] = useState<any>([]);

  useEffect(() => {
    if (slug) {
      if (slug === CONSTANT_VALUE.TOP_FRONTEND_QUESTIONS) {
        setListData(getAllFrontEndCodingQuestions());
      } else if (slug === CONSTANT_VALUE.FRONTEND_MACHINE_CODING_ROUND) {
        setListData(getAllMachineRoundQuestions());
      }
    }
  }, [slug]);

  return (
    <div className={style.frontEndCodingQuestions}>
      {slug === CONSTANT_VALUE.TOP_FRONTEND_QUESTIONS ? (
        <div className={style.frontEndCodingQuestions__container}>
          {listData?.map((item: any, index: number) => (
            <div
              key={index}
              className={style.frontEndCodingQuestions__container__questions}
            >
              <div
                className={
                  style.frontEndCodingQuestions__container__questions__question
                }
              >
                {item.question}
              </div>
              <div
                className={
                  style.frontEndCodingQuestions__container__questions__answer
                }
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      ) : slug === CONSTANT_VALUE.FRONTEND_MACHINE_CODING_ROUND ? (
        <div className={style.frontEndCodingQuestions__container_machine_coding_round}>
          {listData?.map((question: any, index: number) => (
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
                className={style.machineCodingList__container__list__item__img}
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
      ) : null}
    </div>
  );
}

export default FrontEndCodingQuestions;
