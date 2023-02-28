import Link from "next/link";
import React from "react";
import { DEVICE_TYPE, URLPaths } from "../../../utils/constant";
import useWindowWidth from "../../../utils/hooks/useWindowWidth";
import style from "./TopSection.module.scss";

function TopSection() {
  const windowWidth = useWindowWidth();
  return (
    <section className={style.topSection}>
      <h1 className={style.topSection_title}>
        Code With
        <span className={style.topSection_title_highlight}> Creativity</span>
      </h1>

      <p className={style.topSection_description}>
        Advance your FrontEnd skills with the best quality content{" "}
        {windowWidth > DEVICE_TYPE.MOBILE && <br />} and prepare for the
        FrontEnd interviews.
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
