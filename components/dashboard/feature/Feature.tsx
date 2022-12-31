import React from "react";
import ReactCodepen from "react-codepen-embed";
import style from "./Feature.module.scss";

function Feature() {
  return (
    <div className={style.feature}>
      <div className={style.feature_container}>
        <div className={style.feature_container_text}>
          Particles Effect with javascript and canvas element
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
