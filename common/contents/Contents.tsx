import { useRouter } from "next/router";
import React from "react";
import style from "./Contents.module.scss";

function Content({ contentList }: any) {
  const router = useRouter();
  return (
    <div className={style.content}>
      <div className={style.content__title}>Contents</div>
      <ul className={style.content__list}>
        {contentList?.map((content: any, index: number) => (
          <li
            className={style.content__list__item}
            key={index}
            onClick={() => {
              router.push(`#${content.title}`);
            }}
          >
            {content.title}
          </li>
        ))}
      </ul>
      <div className={style.content__description}>
        <ul className={style.content__description__list}>
          {contentList?.map((content: any, index: number) => (
            <li
              className={style.content__description__list__item}
              key={index}
              id={content.title}
            >
              <div className={style.content__description__list__item__title}>
                {content.title}
              </div>
              <div className={style.content__description__list__item__text}>
                {content.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
