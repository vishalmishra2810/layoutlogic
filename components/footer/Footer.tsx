import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_row}>
          <div className={style.footer_column}>
            <div className={style.footer_item}>JavaScript</div>
            <div className={style.footer_item}>HTML</div>
            <div className={style.footer_item}>CSS</div>
          </div>
          <div className={style.footer_column}>
            <div className={style.footer_item}>React</div>
            <div className={style.footer_item}>Redux</div>
            <div className={style.footer_item}>SCSS</div>
          </div>
          <div className={style.footer_column}>
            <div className={style.footer_item}>
              Machine Coding Round Questions{" "}
            </div>
            <div className={style.footer_item}>Coding Round Questions</div>
          </div>
        </div>
        <div className={style.footer_row}>
          <div className={style.footer_title}>
            @2023 CareerBoosts All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
