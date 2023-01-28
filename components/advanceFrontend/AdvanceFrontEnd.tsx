import dynamic from "next/dynamic";
import React from "react";
import style from "./AdvanceFrontEnd.module.scss";
const Feedback = dynamic(() => import("../../common/feedback/Feedback"));

function AdvanceFrontEnd() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        Out team is collecting the best resources for you to learn advance
        frontend development. We will update this page soon. Stay tuned!
      </div>
      <div className={style.description}>
        If you want to contribute to this page, please send us your questions
        and suggestions to{" "}
      </div>
      <Feedback />
    </div>
  );
}

export default AdvanceFrontEnd;
