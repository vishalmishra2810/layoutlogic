import React from "react";
import style from "./DrawLine.module.scss";

function DrawLine({
  title,
  circleNumber,
  firstColor,
  secondColor,
  addMargin,
  description = "",
}: any) {
  return (
    <div className={style.design}>
      <div
        className={style.line}
        style={{
          background: `linear-gradient(180deg, ${firstColor}, ${secondColor})`,
          marginTop: addMargin ? "56px" : "0px",
        }}
      ></div>
      <div
        className={style.circle}
        style={{
          background: `linear-gradient(-90deg, ${firstColor}, ${secondColor})`,
        }}
      >
        {circleNumber}
      </div>
      <div
        className={style.title}
        style={{
          background: `linear-gradient(-90deg, ${firstColor}, ${secondColor})`,
        }}
      >
        {title}
      </div>
      <div
        className={style.description}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
}

export default DrawLine;
