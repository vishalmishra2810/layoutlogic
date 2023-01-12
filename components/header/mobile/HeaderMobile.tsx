import { useRouter } from "next/router";
import React, { useState } from "react";
import { URLPaths } from "../../../utils/constant";
import style from "./HeaderMobile.module.scss";
import closeIcon from "../../../assets/close.svg";
import Image from "next/image";

function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const clickOnLogo = () => {
    router.push(URLPaths.HOME);
    setIsMenuOpen(false);
  };
  const chooseTopic = (topic: string) => {
    router.push(topic);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 500);
  };
  return (
    <div className={style.header_container_mobile}>
      <div className={style.header_mobile}>
        <div
          className={style.header_menu_icon}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? (
            <Image src={closeIcon} alt="X" width={32} height={32} />
          ) : (
            <>
              <div className={style.header_menu_icon_line}></div>
              <div className={style.header_menu_icon_line}></div>
              <div className={style.header_menu_icon_line}></div>
            </>
          )}
        </div>
        <div className={style.header_title_mobile} onClick={clickOnLogo}>
          LayoutLogic
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`${style.header_menu_mobile} ${
            isMenuOpen && style.open_side_bar_mobile
          }`}
        >
          <div
            className={style.header_menu_item_mobile}
            onClick={() => {
              chooseTopic(URLPaths.REACTJS);
            }}
          >
            ReactJs
          </div>
          <div
            className={style.header_menu_item_mobile}
            onClick={() => {
              chooseTopic(URLPaths.HTML);
            }}
          >
            HTML
          </div>
          <div
            className={style.header_menu_item_mobile}
            onClick={() => {
              chooseTopic(URLPaths.CSS);
            }}
          >
            CSS
          </div>
          <div
            className={style.header_menu_item_mobile}
            onClick={() => {
              chooseTopic(URLPaths.JAVASCRIPT);
            }}
          >
            JavaScript
          </div>
          <div
            className={style.header_menu_item_mobile}
            onClick={() => {
              chooseTopic(URLPaths.SCSS);
            }}
          >
            SCSS
          </div>

          <div
            className={style.header_menu_item_mobile}
            onClick={() => {
              chooseTopic(URLPaths.REDUX);
            }}
          >
            Redux
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderMobile;
