import React from "react";
import style from "./NoPostFound.module.scss";

function NoPostFound() {
  return (
    <div className={style.no_post}>
      <div className={style.no_post_container}>
        No post found for this topic
      </div>
    </div>
  );
}

export default NoPostFound;
