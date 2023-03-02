import React from "react";
import style from "./AdvanceFrontendFeature.module.scss";
import { ADVANCE_FRONTEND_LIST } from "../../../database/advanceFrontEnd";
import Link from "next/link";
import { useRouter } from "next/router";

function AdvanceFrontendFeature() {
  const router = useRouter();
  const getColor = (level: any) => {
    switch (level) {
      case "Easy":
        return style.adv_layout_item_level_easy;
      case "Medium":
        return style.adv_layout_item_level_medium;
      case "Hard":
        return style.adv_layout_item_level_hard;
      default:
        return style.adv_layout_item_level_easy;
    }
  };
  return (
    <div className={style.advancedFeature}>
      <div className={style.advancedFeature_header}>
        <div className={style.advancedFeature_header__text}>
          Advanced Frontend Features
        </div>
        <div className={style.advancedFeature_header__sub_text}>
          Integrate these features in your project to make <br /> it more
          interactive and attractive.
        </div>
        <div className={style.advancedFeature_header__description}>
          we have collected some of the most advanced frontend <br />
          features that you can integrate in your project.
        </div>
      </div>
      <div className={style.advancedFeature_body}>
        {ADVANCE_FRONTEND_LIST?.map((item, index) => (
          <Link
            key={index}
            className={style.adv_layout_item}
            href={"/advance-frontend-feature/" + item?.slug}
          >
            <div className={`${getColor(item.level)}`}>{item.level}</div>
            <div className={style.adv_layout_item_title}>{item.title}</div>
            <div className={style.adv_layout_item_question}>
              {item.description}
            </div>
            <div className={style.adv_layout_item_tags}>
              {item.tags.map((tag: any, index: any) => (
                <div key={index} className={style.adv_layout_item_tag}>
                  #{tag}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div
        className={style.advancedFeature_footer}
        onClick={() => {
          router.push("/advance-frontend-feature");
        }}
      >
        {" "}
        Show More <span>&#8594;</span>
      </div>
    </div>
  );
}

export default AdvanceFrontendFeature;
