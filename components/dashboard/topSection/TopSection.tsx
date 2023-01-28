import Link from "next/link";
import React from "react";
import { URLPaths } from "../../../utils/constant";
import style from "./TopSection.module.scss";

function TopSection() {
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
      <div className={style.topSection_btn_list}>
        <Link
          className={`${style.topSection_button_left} ${style.topSection_btn}`}
          href={URLPaths.REACTJS}
        >
          Start Learning
        </Link>
        <Link
          className={`${style.topSection_button_right} ${style.topSection_btn}`}
          href={URLPaths.FRONTEND_MACHINE_CODING_ROUND}
        >
          Start Practicing
        </Link>
      </div>
    </section>
  );
}

export default TopSection;
