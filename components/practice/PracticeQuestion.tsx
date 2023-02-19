import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getFrontOnlyQuestions } from "../../utils/helper";
import style from "./PracticeQuestion.module.scss";

function PracticeQuestion() {
  const router = useRouter();
  const [question, setQuestion]: any = React.useState([]);
  useEffect(() => {
    setQuestion(getFrontOnlyQuestions());
  }, []);

  const openPracticeQuestions = (slug: string) => {
    router.push(`/question-practice/${slug}`);
  };
  
  return (
    <div className={style.practice}>
      <div className={style.practice__container}>
        {question?.map((item: any, index: number) => (
          <div
            className={style.practice__question}
            key={index}
            onClick={() => openPracticeQuestions(item?.slug)}
          >
            <div className={style.practice__question__title}>
              {item.question}
            </div>
            <div className={style.practice__question__tags}>
              {item?.topic?.map((tag: any, index: number) => (
                <div className={style.practice__question__tag} key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PracticeQuestion;
