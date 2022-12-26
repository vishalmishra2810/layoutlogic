import Image from "next/image";
import React, { useState } from "react";
import style from "./DropDown.module.scss";
import bottom_arrow from "../../assets/dropdown.svg";

interface IDropDownProps {
  itemList: string[];
  title: string;
}
function DropDown({ itemList, title }: IDropDownProps) {
  const [show, setShow] = useState(false);
  const openMenu = () => {
    setShow(!show);
  };
  return (
    <div className={style.dropDown}>
      <div
        className={`${style.dropDown_container} ${
          show && style.open_dropwDown_Style
        }`}
      >
        <div className={style.dropDown_header} onClick={openMenu}>
          <div className={style.dropDown_header_title}>
            {title?.toUpperCase()}
          </div>
          <Image
            src={bottom_arrow}
            alt=""
            width={24}
            height={24}
            className={show ? style.dropDown_icon_reverse : style.dropDown_icon}
          />
        </div>
        {show && (
          <div className={style.dropDown_list}>
            {itemList?.map((item, index) => (
              <div key={index} className={style.dropDown_list_item}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
