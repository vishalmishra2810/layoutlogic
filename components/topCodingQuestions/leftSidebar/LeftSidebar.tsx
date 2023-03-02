import React from "react";
import style from "./LeftSidebar.module.scss";
import dropdownIcon from "../../../assets/dropdown.svg";
import Image from "next/image";
import { FRONT_END_CODING_TOPICS, URLPaths } from "../../../utils/constant";
import LayoutLogicIcon from "../../../public/layoutlogic.jpg";
import { useRouter } from "next/router";

function LeftSidebar({ topic }: any) {
  const router = useRouter();
  return (
    <div className={style.leftSidebar}>
      <div className={style.leftSidebar__title}>
        <Image
          src={LayoutLogicIcon}
          alt="LayoutLogic"
          width={32}
          height={32}
          className={style.leftSidebar__title__icon}
          onClick={() => router.push(URLPaths.HOME)}
        />
        <div
          className={style.leftSidebar__title__text}
          onClick={() => router.back()}
        >
          <span>&#x2190;</span> Go back
        </div>
      </div>
      <div className={style.leftSidebar__list}>
        {FRONT_END_CODING_TOPICS?.map((item: any, index: number) => (
          <div
            className={`${style.leftSidebar__list__item} ${
              topic === item?.value ? style.leftSidebar__list__item__active : ""
            }`}
            key={index}
            onClick={() => {
              router.push(`/coding-question/${item?.value}`);
            }}
          >
            <div className={style.leftSidebar__list__item__title}>
              {item?.title}
            </div>
            <Image
              src={dropdownIcon}
              alt="dropdown"
              width={20}
              height={20}
              className={style.leftSidebar__list__item__icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;
