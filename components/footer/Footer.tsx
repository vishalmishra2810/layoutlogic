import { useRouter } from "next/router";
import React from "react";
import { URLPaths } from "../../utils/constant";
import style from "./Footer.module.scss";

function Footer() {
  const router = useRouter();
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_row}>
          <div className={style.footer_column}>
            <div
              className={style.footer_item}
              onClick={() => {
                router.push(URLPaths.JAVASCRIPT);
              }}
            >
              JavaScript
            </div>
            <div
              className={style.footer_item}
              onClick={() => {
                router.push(URLPaths.HTML);
              }}
            >
              HTML
            </div>
            <div
              className={style.footer_item}
              onClick={() => {
                router.push(URLPaths.CSS);
              }}
            >
              CSS
            </div>
          </div>
          <div className={style.footer_column}>
            <div
              className={style.footer_item}
              onClick={() => {
                router.push(URLPaths.REACTJS);
              }}
            >
              React
            </div>
            <div
              className={style.footer_item}
              onClick={() => {
                router.push(URLPaths.REDUX);
              }}
            >
              Redux
            </div>
            <div
              className={style.footer_item}
              onClick={() => {
                router.push(URLPaths.SCSS);
              }}
            >
              SCSS
            </div>
          </div>
          <div className={style.footer_column}>
            <div
              className={style.footer_item}
              onClick={() => {
                router.push("/" + "#frontend_machine_coding_round");
              }}
            >
              Machine Coding Round Questions{" "}
            </div>
            <div
              className={style.footer_item}
              onClick={() => {
                router.push(URLPaths.TOP_FRONTEND_QUESTIONS);
              }}
            >
              Coding Round Questions
            </div>
          </div>
        </div>
        <div className={style.footer_row}>
          <div className={style.footer_title}>
            @2023 LayoutLogic All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
