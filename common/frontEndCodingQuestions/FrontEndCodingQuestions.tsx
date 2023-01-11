import React, { useEffect, useState } from "react";
import {
  getAllFrontEndCodingQuestions,
  getAllMachineRoundQuestions,
} from "../../utils/helper";
import style from "./FrontEndCodingQuestions.module.scss";

function FrontEndCodingQuestions({ slug }: any) {
  const [listData, setListData] = useState<any>([]);

  useEffect(() => {
    if (slug) {
      if (slug === "top-front-end-coding-questions") {
        setListData(getAllFrontEndCodingQuestions());
      } else if (slug === "front-end-machine-coding-round-questions") {
        setListData(getAllMachineRoundQuestions());
      }
    }
  }, [slug]);

  console.log("listData", listData);
  return (
    <div className={style.frontEndCodingQuestions}>
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
    </div>
  );
}

export default FrontEndCodingQuestions;
