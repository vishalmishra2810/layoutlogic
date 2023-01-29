import { useRouter } from "next/router";
import React, { useState } from "react";
import { HEADER_LIST, URLPaths } from "../../../utils/constant";
import style from "./HeaderMobile.module.scss";
import closeIcon from "../../../assets/close.svg";
import Image from "next/image";
import Link from "next/link";
import buyMeCoffee from "../../../assets/buy_me_coffee.svg";

function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { database } = router.query;

  const closeHeader = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 400);
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
            <Image
              src={closeIcon}
              alt="X"
              width={32}
              height={32}
              className={style.cross_btn}
            />
          ) : (
            <>
              <div className={style.header_menu_icon_line}></div>
              <div className={style.header_menu_icon_line}></div>
              <div className={style.header_menu_icon_line}></div>
            </>
          )}
        </div>
        <Link
          className={style.header_title_mobile}
          href={URLPaths.HOME}
          onClick={closeHeader}
        >
          LayoutLogic
        </Link>
      </div>

      {isMenuOpen && (
        <ul
          className={`${style.header_menu_mobile} ${
            isMenuOpen && style.open_side_bar_mobile
          }`}
        >
          {HEADER_LIST.map((item: any, index: any) => (
            <Link
              key={index}
              className={`${style.header_menu_item_mobile} ${
                "/" + database === item?.path && style.header_menu_item_active
              }`}
              href={item?.path}
              onClick={closeHeader}
            >
              {item?.title}
            </Link>
          ))}
          <Link
            className={style.header_menu_item_mobile}
            href={URLPaths.BLOG}
            onClick={closeHeader}
          >
            Blog
          </Link>
          <div
            className={style.header_menu_item_mobile_buy_me_coffee}
            onClick={() => {
              window.open("https://www.buymeacoffee.com/sumitsinghJ", "_blank");
            }}
          >
            <Image
              title="Buy me a coffee"
              src={buyMeCoffee}
              alt="Buy me a coffee"
              width={32}
              height={32}
              className={style.header_container_right_item_coffee}
            />
            <p className={style.header_menu_item_mobile_buy_me_coffee_text}>
              Buy me a coffee
            </p>
          </div>
        </ul>
      )}
    </div>
  );
}

export default HeaderMobile;
