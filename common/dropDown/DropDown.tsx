import Image from "next/image";
import React, { useState } from "react";
import style from "./DropDown.module.scss";
import bottom_arrow from "../../assets/dropdown.svg";
import { useRouter } from "next/router";

interface IDropDownProps {
  itemList: any;
  title: string;
}
function DropDown({ itemList, title }: IDropDownProps) {
  const [show, setShow] = useState(false);
  const router = useRouter();
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
          <Image
            src={bottom_arrow}
            alt=""
            width={24}
            height={24}
            className={show ? style.dropDown_icon_reverse : style.dropDown_icon}
          />
          <div className={style.dropDown_header_title}>
            {title}
            {" " + "Questions"}
          </div>
        </div>
        {show && (
          <div className={style.dropDown_list}>
            {itemList?.map((item: any, index: number) => (
              <div
                key={index}
                className={style.dropDown_list_item}
                onClick={() => {
                  router.push("#" + item?.question);
                }}
              >
                {item?.question}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;
