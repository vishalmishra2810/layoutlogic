import React, { useEffect } from "react";
import {
  TOPICS_DIFFICULTY,
  TOPICS_DIFFICULTY_LABELS,
} from "../../utils/constant";
import { getQuestionWithAnswerList } from "../../utils/helper";
import style from "./SideBar.module.scss";
import searchIcon from "../../assets/search.svg";
import Image from "next/image";
import { DebounceInput } from "react-debounce-input";
import dynamic from "next/dynamic";
const DropDown = dynamic(() => import("../../common/dropDown/DropDown"));

interface ISideBarProps {
  database: string;
}
function SideBar({ database }: ISideBarProps) {
  const [searchText, setSearchText] = React.useState<string>("");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    if (database) {
      setSearchText("");
    }
  }, [database]);

  return (
    <aside className={style.sideBar}>
      <div className={style.sideBar_container}>
        <div className={style.sideBar_searchBar}>
          <Image
            src={searchIcon}
            alt="search"
            width={20}
            height={20}
            className={style.search_icon}
          />
          <DebounceInput
            type="text"
            placeholder="Search..."
            value={searchText}
            debounceTimeout={600}
            onChange={onTextChange}
            className={style.sideBar_search}
          />
        </div>
        <div className={style.sideBar_scrollable_container}>
          <div className={style.sideBar_title}> List of Questions</div>
          <DropDown
            itemList={getQuestionWithAnswerList(
              database,
              TOPICS_DIFFICULTY.EASY,
              searchText
            )}
            title={TOPICS_DIFFICULTY_LABELS.EASY}
          />
          <DropDown
            itemList={getQuestionWithAnswerList(
              database,
              TOPICS_DIFFICULTY.MEDIUM,
              searchText
            )}
            title={TOPICS_DIFFICULTY_LABELS.MEDIUM}
          />
          <DropDown
            itemList={getQuestionWithAnswerList(
              database,
              TOPICS_DIFFICULTY.HARD,
              searchText
            )}
            title={TOPICS_DIFFICULTY_LABELS.HARD}
          />
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
