import Image from "next/image";
import Link from "next/link";
import React from "react";
import LeftSidebarTutorial from "../../common/leftSidebarTutorial/LeftSidebarTutorial";
import { TUTORIAL_LIST } from "../../utils/constant";
import { getTechIcon } from "../../utils/helper";
import style from "./StartTutorial.module.scss";

function StartTutorial() {
  return (
    <div className={style.startTutorial}>
      <div className={style.tutorial_container_left}>
        <LeftSidebarTutorial />
      </div>
      <div className={style.startTutorial__content}>
        <div className={style.startTutorial__content__header}>
          <h1 className={style.startTutorial__content__header__title}>
            Frontend Roadmap 2023
          </h1>
          <p className={style.startTutorial__content__header__text}>
            This tutorial is for beginners who want to learn web development
            from scratch. We will start from the basics and then we will go to
            the advanced topics. We recommend you to follow below steps to start
            learning but you can start from any topic you want.
          </p>
        </div>
        <div className={style.startTutorial__content__body}>
          <p className={style.startTutorial__content__body__text}>
            Roadmap to becoming a frontend developer in 2023:-
          </p>
          <div className={style.startTutorial__content__body__start_button}>
            Start
            </div>
          <div className={style.startTutorial__content__body__list}>
            <div
              className={style.startTutorial__content__body__list__line}
            ></div>
            <div className={style.startTutorial__content__body__list__item}>
              HTML
            </div>
            <div
              className={style.startTutorial__content__body__list__line}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartTutorial;
