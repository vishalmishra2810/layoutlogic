import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_title}>
          @2023 CareerBoosts All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
