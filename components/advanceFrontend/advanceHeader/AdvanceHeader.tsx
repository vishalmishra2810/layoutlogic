import Image from "next/image";
import React from "react";
import style from "./AdvanceHeader.module.scss";
import searchIcon from "../../../assets/search.svg";
import { DebounceInput } from "react-debounce-input";
import { LAYOUT_TYPE } from "../../../utils/constant";

function AdvanceHeader({
  searchText,
  setSearchText,
  level,
  setLevel,
  activeLayout,
  setActiveLayout,
}: any) {
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <div className={style.adv_sidebar}>
      <div className={style.adv_sidebar_left}>
        <div className={style.adv_searchBar}>
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
            className={style.adv_search}
          />
        </div>
        <div className={style.adv_sidebar_body}>
          <div className={style.adv_sidebar_body_item}>
            <input
              type="checkbox"
              className={style.check_box}
              checked={level.easy}
              onChange={(e) => setLevel({ ...level, easy: e.target.checked })}
            />
            <p className={style.adv_sidebar_body_item_title}>Easy</p>
          </div>
          <div className={style.adv_sidebar_body_item}>
            <input
              type="checkbox"
              className={style.check_box}
              checked={level.medium}
              onChange={(e) => setLevel({ ...level, medium: e.target.checked })}
            />
            <p className={style.adv_sidebar_body_item_title}>Medium</p>
          </div>
          <div className={style.adv_sidebar_body_item}>
            <input
              type="checkbox"
              className={style.check_box}
              checked={level.hard}
              onChange={(e) => setLevel({ ...level, hard: e.target.checked })}
            />
            <p className={style.adv_sidebar_body_item_title}>Hard</p>
          </div>
        </div>
      </div>
      <div className={style.right_content_header_type}>
        <div
          className={`${style.right_content_header_type_list} 
              ${activeLayout === LAYOUT_TYPE.LIST && style.active}
              `}
          onClick={() => setActiveLayout(LAYOUT_TYPE.LIST)}
        >
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </div>
        <div
          className={`${style.right_content_header_type_grid}    ${
            activeLayout === LAYOUT_TYPE.GRID && style.active
          }`}
          onClick={() => setActiveLayout(LAYOUT_TYPE.GRID)}
        >
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </div>
      </div>
    </div>
  );
}

export default AdvanceHeader;
