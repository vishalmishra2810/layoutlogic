import React, { useEffect, useState } from "react";
import { getAllFrontEndCodingQuestions } from "../../utils/helper";
import style from "./FrontEndCodingQuestions.module.scss";

function FrontEndCodingQuestions() {
  const [listData, setListData] = useState<any>([]);
  useEffect(() => {
    setListData(getAllFrontEndCodingQuestions());
  }, []);

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
