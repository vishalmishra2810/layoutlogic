import React from "react";
import style from "./TopSection.module.scss";

function TopSection() {
  return (
    <div className={style.topSection}>
      <h1 className={style.topSection_title}>
        From beginners to advanced, we have covered all the questions.
      </h1>
      <p className={style.topSection_description}>
        with the help of our website, you can learn all the questions that you
        might need to know for your interview. We have covered all the questions
        from the basics to the advanced level.
      </p>
      <div className={style.topSection_button}>Get Started</div>
    </div>
  );
}

export default TopSection;
