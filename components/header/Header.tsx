import { useRouter } from "next/router";
import React from "react";
import { URLPaths } from "../../utils/constant";
import style from "./Header.module.scss";

function Header() {
  const router = useRouter();
  const clickOnLogo = () => {
    router.push(URLPaths.HOME);
  };
  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <div className={style.header_title} onClick={clickOnLogo}>
          LayoutLogic
        </div>
        <div className={style.header_menu}>
          <div
            className={style.header_menu_item}
            onClick={() => {
              router.push(URLPaths.REACTJS);
            }}
          >
            ReactJs
          </div>
          <div
            className={style.header_menu_item}
            onClick={() => {
              router.push(URLPaths.HTML);
            }}
          >
            HTML
          </div>
          <div
            className={style.header_menu_item}
            onClick={() => {
              router.push(URLPaths.CSS);
            }}
          >
            CSS
          </div>
          <div
            className={style.header_menu_item}
            onClick={() => {
              router.push(URLPaths.JAVASCRIPT);
            }}
          >
            JavaScript
          </div>
          <div
            className={style.header_menu_item}
            onClick={() => {
              router.push(URLPaths.SCSS);
            }}
          >
            SCSS
          </div>

          <div
            className={style.header_menu_item}
            onClick={() => {
              router.push(URLPaths.REDUX);
            }}
          >
            Redux
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
