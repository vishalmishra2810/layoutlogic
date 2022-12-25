import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_title}>
            @2021 ClearJobs. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
