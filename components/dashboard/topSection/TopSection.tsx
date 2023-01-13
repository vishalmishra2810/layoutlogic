import { useRouter } from "next/router";
import React, { memo } from "react";
import { URLPaths } from "../../../utils/constant";
import style from "./TopSection.module.scss";

function TopSection() {
  const router = useRouter();
  const openReactQuestions = () => {
    router.push(URLPaths.REACTJS);
  };
  return (
    <section className={style.topSection}>
      <h1 className={style.topSection_title}>
        From beginners to advanced, we have covered all the questions.
      </h1>
      <p className={style.topSection_description}>
        With the help of our application, You will learn the questions that you
        might need to know for your interview. We have covered all the questions
        from the basics to the advanced level.
      </p>
      <div className={style.topSection_button} onClick={openReactQuestions}>
        Get Started
      </div>
    </section>
  );
}

export default memo(TopSection);
