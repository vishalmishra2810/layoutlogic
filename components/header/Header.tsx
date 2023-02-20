import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { DEVICE_TYPE, HEADER_LIST, URLPaths } from "../../utils/constant";
import useWindowWidth from "../../utils/hooks/useWindowWidth";
import style from "./Header.module.scss";
import buyMeCoffee from "../../assets/buy_me_coffee.svg";
import Link from "next/link";
import dynamic from "next/dynamic";
import dropDownIcon from "../../assets/dropdown.svg";
import ShowFeature from "../../common/showFeature/ShowFeature";
const HeaderMobile = dynamic(() => import("./mobile/HeaderMobile"));

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  const windowWidth = useWindowWidth();
  const router = useRouter();
  const { database } = router.query;

  const showFeatures = (e: any) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <header className={style.header}>
      {windowWidth > DEVICE_TYPE.MOBILE ? (
        <div className={style.header_container}>
          <div className={style.header_container_left}>
            <Link className={style.header_title} href={URLPaths.HOME}>
              LayoutLogic
            </Link>
            <ul className={style.header_menu}>
              <div className={style.header_menu_feature}>
                <div
                  className={style.header_menu_button}
                  onClick={showFeatures}
                >
                  <p className={style.header_menu_button_text}> Advanced </p>
                  <Image
                    src={dropDownIcon}
                    alt="dropdown"
                    width={28}
                    height={28}
                    className={`${style.header_menu_button_icon} ${
                      showMenu && style.header_menu_button_icon_rotate
                    }`}
                  />
                </div>
                {showMenu && <ShowFeature setShowMenu={setShowMenu} />}
              </div>
              {HEADER_LIST.map((item: any, index: any) => (
                <li key={index} className={style.header_menu_list_item}>
                  <Link
                    className={`${style.header_menu_item} ${
                      "/" + database === item?.path &&
                      style.header_menu_item_active
                    }`}
                    href={item?.path}
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.header_container_right}>
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
              width={34}
              height={34}
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
