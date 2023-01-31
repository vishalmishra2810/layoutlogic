import React from "react";
import LeftSidebarTutorial from "../../common/leftSidebarTutorial/LeftSidebarTutorial";
import style from "./StartTutorial.module.scss";

function StartTutorial() {
  return (
    <div className={style.startTutorial}>
      <div className={style.tutorial_container_left}>
        <LeftSidebarTutorial />
      </div>
      <div className={style.startTutorial__content}>
        <h1 className={style.startTutorial__title}>Get started</h1>
      </div>
    </div>
  );
}

export default StartTutorial;
