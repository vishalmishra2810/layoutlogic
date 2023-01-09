import React, { useEffect, useState } from "react";
import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import { getQuestionsInormation } from "../../utils/helper";
import style from "./CodingQuestions.module.scss";

interface ICodingQuestionsProps {
  slug: string;
}

function CodingQuestions({ slug }: ICodingQuestionsProps) {
  const [listData, setListData] = useState<any>([]);
  useEffect(() => {
    if (slug) {
      setListData(getQuestionsInormation(slug));
    }
  }, [slug]);
  return (
    <div className={style.codingQuestions}>
      <div className={style.codingQuestions__container}>
        <div className={style.codingQuestions__container_questions}>
          {listData?.question}
        </div>
        <div className={style.codingQuestions__container__answer}>
          {listData?.answer}
        </div>
      </div>
    </div>
  );
}

export default CodingQuestions;
