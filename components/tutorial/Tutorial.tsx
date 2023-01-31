import React from "react";
import ContentTutorial from "../../common/contentTutorial/ContentTutorial";
import LeftSidebarTutorial from "../../common/leftSidebarTutorial/LeftSidebarTutorial";
import RightSidebarTutorial from "../../common/rightSidebarTutorial/RightSidebarTutorial";
import style from "./Tutorial.module.scss";

function Tutorial() {
  return (
    <div className={style.tutorial}>
      <div className={style.tutorial_container}>
        <div className={style.tutorial_container_left}>
          <LeftSidebarTutorial />
        </div>
        <div className={style.tutorial_container_center}>
          <ContentTutorial />
        </div>
        <div className={style.tutorial_container_right}>
          <RightSidebarTutorial />
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
