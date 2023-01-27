import React from "react";
import Feedback from "../../common/feedback/Feedback";
import style from "./AdvanceFrontEnd.module.scss";

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
