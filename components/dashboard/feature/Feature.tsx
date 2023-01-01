import React from "react";
import ReactCodepen from "react-codepen-embed";
import style from "./Feature.module.scss";

function Feature() {
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
