import Link from "next/link";
import React from "react";
import { HEADER_LIST, URLPaths } from "../../../utils/constant";
import style from "./ShowFeature.module.scss";

function ShowFeature({ onClose, name }: any) {
  const handleModalHover = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className={style.showFeature} onMouseLeave={onClose}>
      <div
        className={style.showFeature__content}
        onMouseEnter={handleModalHover}
      >
        {name === "Features" ? (
          <>
            <Link
              className={style.showFeature__content__item}
              href={URLPaths.FRONTEND_MACHINE_CODING_ROUND}
              onClick={onClose}
            >
              <p className={style.showFeature__content__item__title}>
                Machine Coding Round
              </p>
              <p className={style.showFeature__content__item__description}>
                Deep dive into your frontend skills
              </p>
            </Link>
            <Link
              className={style.showFeature__content__item}
              href={URLPaths.TOP_FRONTEND_QUESTIONS}
              onClick={onClose}
            >
              <p className={style.showFeature__content__item__title}>
                Frontend Coding Question
              </p>
              <p className={style.showFeature__content__item__description}>
                Open ended questions to test your coding skills
              </p>
            </Link>
            <Link
              className={style.showFeature__content__item}
              href={URLPaths.ADVANCE_FRONTEND_FEATURE}
              onClick={onClose}
            >
              <p className={style.showFeature__content__item__title}>
                Advanced Frontend feature
              </p>
              <p className={style.showFeature__content__item__description}>
                Add advanced features to your next project
              </p>
            </Link>
          </>
        ) : name === "Learn" ? (
          <>
            {HEADER_LIST?.map((item: any, index: any) => (
              <Link
                key={index}
                className={`${style.showFeature__content__item} ${style.showFeature__content__item_learn}`}
                href={item.path}
                onClick={onClose}
              >
                <p className={style.showFeature__content__item__title}>
                  {item.title}
                </p>
              </Link>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ShowFeature;
