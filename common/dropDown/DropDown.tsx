import Image from "next/image";
import React from "react";
import style from "./DropDown.module.scss";
import bottom_arrow from "../../assets/dropdown.svg";

interface IDropDownProps {
  easy?: string[];
  medium?: string[];
  hard?: string[];
}
function DropDown({}: IDropDownProps) {
  return (
    <div className={style.dropDown}>
      <div className={style.dropDown_container}>
        <div className={style.dropDown_header}>
          <div className={style.dropDown_header_title}>easy</div>
          <Image src={bottom_arrow} alt="" width={20} height={20} />
        </div>
        <div className={style.dropDown_list}>
          <div className={style.dropDown_list_item}>hello world</div>
          <div className={style.dropDown_list_item}>hello world</div>
          <div className={style.dropDown_list_item}>hello world</div>
          <div className={style.dropDown_list_item}>hello world</div>
          <div className={style.dropDown_list_item}>hello world</div>
          <div className={style.dropDown_list_item}>hello world</div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
