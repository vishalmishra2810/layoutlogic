import React from "react";
import style from "./AdvanceFrontendFeature.module.scss";
import { ADVANCE_FRONTEND_LIST } from "../../../database/advanceFrontEnd";
import Link from "next/link";
import { useRouter } from "next/router";

function AdvanceFrontendFeature() {
  const router = useRouter();
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
            className={style.advancedFeature_body__item}
            key={index}
            href={"/advance-frontend-feature/" + item?.slug}
          >
            <div className={style.advancedFeature_body__item__header}>
              {item.title}
            </div>
            <div className={style.advancedFeature_body__item__description}>
              {item.description}
            </div>
            <div className={style.advancedFeature_body__item__tags}>
              {item.tags?.map((tag, index) => (
                <div
                  className={style.advancedFeature_body__item__tags__item}
                  key={index}
                >
                  {tag}
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
