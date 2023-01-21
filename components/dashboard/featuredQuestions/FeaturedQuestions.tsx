import React, { memo } from "react";
import Modal from "../../../common/modal/Modal";
import style from "./FeaturedQuestions.module.scss";
import reactIcon from "../../../assets/react.svg";
import javascriptIcon from "../../../assets/javascript.svg";
import cssIcon from "../../../assets/css.svg";
import htmlIcon from "../../../assets/html.svg";
import scssIcon from "../../../assets/scss.svg";
import reduxIcon from "../../../assets/redux.svg";
import { URLPaths } from "../../../utils/constant";

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
            route={URLPaths.REACTJS}
          />
        </div>
        <div className={style.featuredQuestions_right_box}>
          <Modal
            title="Redux"
            width={490}
            height={309}
            url={reduxIcon}
            route={URLPaths.REDUX}
          />
          <Modal
            title="SCSS"
            width={496}
            height={309}
            url={scssIcon}
            route={URLPaths.SCSS}
          />
        </div>
      </div>
      <div className={style.featuredQuestions_bottom}>
        <div className={style.featuredQuestions_bottom_left}>
          <Modal
            title="CSS"
            width={490}
            height={309}
            url={cssIcon}
            route={URLPaths.CSS}
          />
          <Modal
            title="HTML"
            width={490}
            height={309}
            url={htmlIcon}
            route={URLPaths.HTML}
          />
        </div>
        <div className={style.featuredQuestions_bottom_right}>
          <Modal
            title="Javascript"
            width={490}
            height={650}
            url={javascriptIcon}
            description="JavaScript is the world's most popular programming language."
            route={URLPaths.JAVASCRIPT}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(FeaturedQuestions);
