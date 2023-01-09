import { useRouter } from "next/router";
import React from "react";
import ReactCodepen from "react-codepen-embed";
import { URLPaths } from "../../../utils/constant";
import style from "./Feature.module.scss";

function Feature() {
  const router = useRouter();
  return (
    <div className={style.feature}>
      <div className={style.feature_container}>
        <div className={style.feature_container_text}>
          Particles Effect and Machine Coding Round Questions
        </div>
        <div className={style.feature_container_description}>
          Practice in a real-time environment and get a feel of the real
          interview. Get all the questions asked in the Machine Coding round of
          the top companies.
        </div>
        <div className={style.startLearning__container__button}>
          <button
            className={style.startLearning__container__button__text}
            onClick={() => {
              router.push(URLPaths.MACHINECODING);
            }}
          >
            Start Learning
          </button>
        </div>
        <ReactCodepen
          hash="eYjZwEp"
          height={600}
          user="sumitsingh4411"
          defaultTab="html,result"
          editable={true}
          themeId="dark"
        />
      </div>
    </div>
  );
}

export default Feature;
