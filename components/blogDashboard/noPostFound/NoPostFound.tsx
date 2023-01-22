import React from "react";
import style from "./NoPostFound.module.scss";

function NoPostFound({ title }: any) {
  return (
    <div className={style.no_post}>
      <div className={style.no_post_container}>
        <div className={style.no_post_container_title}>
          {title ? title : "No post found for this topic"}
        </div>
      </div>
    </div>
  );
}

export default NoPostFound;
