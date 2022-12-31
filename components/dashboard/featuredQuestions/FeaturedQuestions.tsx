import React from "react";
import Modal from "../../../common/modal/Modal";
import style from "./FeaturedQuestions.module.scss";
import reactIcon from "../../../assets/react.svg";
import javascriptIcon from "../../../assets/javascript.svg";
import cssIcon from "../../../assets/css.svg";
import htmlIcon from "../../../assets/html.svg";
import reduxIcon from "../../../assets/redux.svg";

function FeaturedQuestions() {
  return (
    <div className={style.featuredQuestions}>
      <div className={style.featuredQuestions_box}>
        <div className={style.featuredQuestions_left_box}>
          <Modal
            title="Reactjs"
            description="Reactjs is a JavaScript library for building user interfaces."
            width={500}
            height={650}
            url={reactIcon}
          />
        </div>
        <div className={style.featuredQuestions_right_box}>
          <Modal
            title="Javascript"
            width={500}
            height={309}
            url={javascriptIcon}
          />
          <Modal title="CSS" width={500} height={309} url={cssIcon} />
        </div>
      </div>
      <div className={style.featuredQuestions_bottom}>
        <Modal
          title="HTML"
          width={1024}
          height={360}
          url={htmlIcon}
          description="HTML is the standard markup language for creating Web pages."
        />
        <Modal
          title="Redux"
          width={1024}
          height={360}
          url={reduxIcon}
          description="Redux is a predictable state container for JavaScript apps."
        />
      </div>
    </div>
  );
}

export default FeaturedQuestions;
