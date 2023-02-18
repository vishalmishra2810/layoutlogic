import { useRouter } from "next/router";
import React from "react";
import { URLPaths } from "../../../utils/constant";
import style from "./AdvanceLayout.module.scss";

function AdvanceLayout({ layoutType, data }: any) {
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
  const openDetails = (slug: any) => {
    router.push("/" + URLPaths.ADVANCE_FRONTEND_FEATURE + "/" + slug);
  };
  return (
    <div className={style.adv_layout}>
      {layoutType === "grid" ? (
        data?.map((item: any, index: any) => (
          <div
            key={index}
            className={style.adv_layout_item}
            onClick={() => openDetails(item?.slug)}
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
          </div>
        ))
      ) : (
        <div className={style.adv_layout_item_list}>
          <div className={style.adv_layout_item_list_header}>
            <div className={style.adv_layout_item_level}>Level</div>
            <div className={style.adv_layout_item_title}>Title</div>
            <div className={style.adv_layout_item_question}>Description </div>
            <div className={style.adv_layout_item_tags}>Tags</div>
          </div>
          {data?.map((item: any, index: any) => (
            <div
              key={index}
              className={style.adv_layout_item_grid}
              onClick={() => openDetails(item?.slug)}
            >
              <div
                className={`${style.adv_layout_item_level} ${getColor(
                  item.level
                )}`}
              >
                {item.level}
              </div>
              <div className={style.adv_layout_item_title}>{item.title}</div>
              <div className={style.adv_layout_item_question}>
                {item.description}
              </div>
              <div className={style.adv_layout_item_tags}>
                {item.tags.map((tag: any, index: any) => (
                  <div key={index} className={style.adv_layout_item_tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdvanceLayout;
