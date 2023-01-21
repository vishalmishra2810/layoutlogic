import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { DEVICE_TYPE, HEADER_LIST, URLPaths } from "../../utils/constant";
import useWindowWidth from "../../utils/hooks/useWindowWidth";
import style from "./Header.module.scss";
import HeaderMobile from "./mobile/HeaderMobile";
import buyMeCoffee from "../../assets/buy_me_coffee.png";
import Link from "next/link";

function Header() {
  const windowWidth = useWindowWidth();
  const router = useRouter();
  const { database } = router.query;
  return (
    <header className={style.header}>
      {windowWidth > DEVICE_TYPE.MOBILE ? (
        <div className={style.header_container}>
          <div className={style.header_container_left}>
            <Link className={style.header_title} href={URLPaths.HOME}>
              LayoutLogic
            </Link>
            <ul className={style.header_menu}>
              {HEADER_LIST.map((item: any, index: any) => (
                <Link
                  key={index}
                  className={`${style.header_menu_item} ${
                    "/" + database === item?.path &&
                    style.header_menu_item_active
                  }`}
                  href={item?.path}
                >
                  {item?.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className={style.header_container_right}>
            <div className={style.header_container_right_item_feedback}>
              Feedback
            </div>
            <Link
              className={style.header_container_right_item_blog}
              href={URLPaths.BLOG}
            >
              Blog
            </Link>
            <Image
              title="Buy me a coffee"
              src={buyMeCoffee}
              alt="Buy me a coffee"
              width={42}
              height={42}
              className={style.header_container_right_item_coffee}
              onClick={() => {
                window.open(
                  "https://www.buymeacoffee.com/sumitsinghJ",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      ) : (
        <HeaderMobile />
      )}
    </header>
  );
}

export default Header;
