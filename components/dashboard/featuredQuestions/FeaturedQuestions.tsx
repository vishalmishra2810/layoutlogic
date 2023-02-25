import React from "react";
import style from "./FeaturedQuestions.module.scss";
import { FEATURED_DATA } from "./constant";
import Image from "next/image";
import Link from "next/link";
import DrawLine from "../../../common/drawLine/DrawLine";

function FeaturedQuestions() {
  return (
    <div className={style.featuredQuestions}>
      <DrawLine
        title="Featured Questions"
        circleNumber="1"
        firstColor="#6dd5ed"
        secondColor="#2193b0"
      />
      <div className={style.featuredQuestions_grid}>
        {FEATURED_DATA?.map((item: any, index: any) => (
          <div
            className={`${style.featuredQuestions_grid_item}
            ${index === 0 && style.featuredQuestions_grid_item_1}
            ${index === 4 && style.featuredQuestions_grid_item_5}
            `}
            key={index}
          >
            <Image src={item?.icon} alt={item?.title} width={80} height={80} />
            <div className={style.featuredQuestions_grid_item_title}>
              {item?.title}
            </div>
            <div className={style.featuredQuestions_grid_item_description}>
              {item?.description}
            </div>
            <Link
              className={style.featuredQuestions_grid_item_button}
              href={item?.url}
            >
              Open {item?.title} Questions
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedQuestions;
