import React, { memo } from "react";
import Modal from "../../../common/modal/Modal";
import style from "./FeaturedQuestions.module.scss";
import reactIcon from "../../../assets/react.svg";
import javascriptIcon from "../../../assets/javascript.svg";
import cssIcon from "../../../assets/css.svg";
import htmlIcon from "../../../assets/html.svg";
import scssIcon from "../../../assets/scss.svg";
import reduxIcon from "../../../assets/redux.svg";

function FeaturedQuestions() {
  return (
    <div className={style.featuredQuestions}>
      <div className={style.featuredQuestions_box}>
        <div className={style.featuredQuestions_left_box}>
          <Modal
            title="Reactjs"
            description="Reactjs is a JavaScript library for building user interfaces."
            width={490}
            height={650}
            url={reactIcon}
          />
        </div>
        <div className={style.featuredQuestions_right_box}>
          <Modal title="Redux" width={490} height={309} url={reduxIcon} />
          <Modal title="SCSS" width={496} height={309} url={scssIcon} />
        </div>
      </div>
      <div className={style.featuredQuestions_bottom}>
        <div className={style.featuredQuestions_bottom_left}>
          <Modal title="CSS" width={490} height={309} url={cssIcon} />
          <Modal title="HTML" width={490} height={309} url={htmlIcon} />
        </div>
        <div className={style.featuredQuestions_bottom_right}>
          <Modal
            title="Javascript"
            width={490}
            height={650}
            url={javascriptIcon}
            description="JavaScript is the world's most popular programming language."
          />
        </div>
      </div>
    </div>
  );
}

export default memo(FeaturedQuestions);
