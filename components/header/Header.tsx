import { useRouter } from "next/router";
import React from "react";
import { DEVICE_TYPE, URLPaths } from "../../utils/constant";
import useWindowWidth from "../../utils/hooks/useWindowWidth";
import style from "./Header.module.scss";
import HeaderMobile from "./mobile/HeaderMobile";

function Header() {
  const windowWidth = useWindowWidth();
  const router = useRouter();
  const clickOnLogo = () => {
    router.push(URLPaths.HOME);
  };
  return (
    <header className={style.header}>
      {windowWidth > DEVICE_TYPE.MOBILE ? (
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
      ) : (
        <HeaderMobile/>
      )}
    </header>
  );
}

export default Header;
