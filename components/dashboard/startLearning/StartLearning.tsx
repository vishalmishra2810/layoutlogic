import Image from "next/image";
import React from "react";
import style from "./StartLearning.module.scss";
import blogIcon from "../../../public/blog_post.webp";
import { useRouter } from "next/router";
import { URLPaths } from "../../../utils/constant";

function StartLearning() {
  const router = useRouter();
  return (
    <div className={style.startLearning}>
      <div className={style.startLearning__container}>
        <div className={style.startLearning__container__heading}>
          Start Learning
        </div>
        <div className={style.startLearning__container__text}>
          Learn and practice coding and get ready for your next interview.
        </div>
        <Image
          title="Start Learning"
          src={blogIcon}
          alt="blog"
          width={650}
          height={400}
          className={style.blog_post_icon}
          onClick={() => {
            router.push(URLPaths.REACTJS);
          }}
        />
      </div>
    </div>
  );
}

export default StartLearning;
