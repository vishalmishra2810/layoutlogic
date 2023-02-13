import Image from "next/image";
import React from "react";
import style from "./QuestionsExplanations.module.scss";
import doubleIcon from "../../assets/double_arrow.svg";

function QuestionsExplanations({ question_info }: any) {
  const [show, setShow] = React.useState<boolean>(true);
  return (
    <>
      {show ? (
        <div className={style.explanation}>
          <div className={style.explanation_header}>
            <h1
              className={`${style.explanation_header_title} ${style.btn_header}`}
            >
              Explanation
            </h1>
            <div
              className={style.explanation_header_title}
              onClick={() => {
                setShow(false);
              }}
            >
              Hide
            </div>
          </div>
          <div className={style.explanation_body}>
            <div className={style.explanation_body_question}>
              {question_info?.question}
            </div>
            <div className={style.explanation_body_description}>
              {question_info?.description}
            </div>
            <Image
              src={question_info?.imgUrl}
              alt="Image_not_Found"
              className={style.explanation_body_img}
              width={400}
              height={280}
            />
            <div className={style.explanation_body_answer}>
              {question_info?.answer}
            </div>
          </div>
        </div>
      ) : (
        <div className={style.hide_explanation}>
          <Image
            src={doubleIcon}
            alt="<<"
            width={24}
            height={24}
            className={style.hide_explanation_icon}
            title="Show Explanation"
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
      )}
    </>
  );
}

export default QuestionsExplanations;
