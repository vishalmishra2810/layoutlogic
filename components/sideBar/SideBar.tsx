import React from "react";
import DropDown from "../../common/dropDown/DropDown";
import {
  TOPICS_DIFFICULTY,
  TOPICS_DIFFICULTY_LABELS,
} from "../../utils/constant";
import { getQuestionWithAnswerList } from "../../utils/helper";
import style from "./SideBar.module.scss";

interface ISideBarProps {
  database: string;
}
function SideBar({ database }: ISideBarProps) {
  return (
    <div className={style.sideBar}>
      <div className={style.sideBar_container}>
        <DropDown
          itemList={getQuestionWithAnswerList(database, TOPICS_DIFFICULTY.EASY)}
          title={TOPICS_DIFFICULTY_LABELS.EASY}
        />
        <DropDown
          itemList={getQuestionWithAnswerList(
            database,
            TOPICS_DIFFICULTY.MEDIUM
          )}
          title={TOPICS_DIFFICULTY_LABELS.MEDIUM}
        />
        <DropDown
          itemList={getQuestionWithAnswerList(database, TOPICS_DIFFICULTY.HARD)}
          title={TOPICS_DIFFICULTY_LABELS.HARD}
        />
      </div>
    </div>
  );
}

export default SideBar;
