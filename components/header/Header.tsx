import React from "react";
import { DEVICE_TYPE, URLPaths } from "../../utils/constant";
import useWindowWidth from "../../utils/hooks/useWindowWidth";
import style from "./Header.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import ShowFeature from "./showFeature/ShowFeature";
const HeaderMobile = dynamic(() => import("./mobile/HeaderMobile"));

function Header() {
  const [showFeature, setShowFeature] = React.useState(false);
  const [showLearn, setShowLearn] = React.useState(false);
  const windowWidth = useWindowWidth();

  return (
    <header className={style.header}>
      {windowWidth > DEVICE_TYPE.MOBILE ? (
        <div className={style.header_container}>
          <div className={style.header_container_left}>
            <Link className={style.header_title} href={URLPaths.HOME}>
              LayoutLogic
            </Link>
            <ul className={style.header_menu}>
              <li
                className={style.header_menu_feature}
                onMouseEnter={() => setShowFeature(true)}
                onMouseLeave={() => setShowFeature(false)}
              >
                <div className={style.header_menu_button}>
                  <p className={style.header_menu_button_text}> Features </p>
                </div>
                {showFeature && (
                  <ShowFeature
                    onClose={() => setShowFeature(false)}
                    name="Features"
                  />
                )}
              </li>
              <li
                className={style.header_menu_feature}
                onMouseEnter={() => setShowLearn(true)}
                onMouseLeave={() => setShowLearn(false)}
              >
                <div className={style.header_menu_button}>
                  <p className={style.header_menu_button_text}> Learn </p>
                </div>
                {showLearn && (
                  <ShowFeature
                    onClose={() => setShowLearn(false)}
                    name="Learn"
                  />
                )}
              </li>
              <Link
                href={URLPaths.PLAYGROUND + "/javascript"}
                className={style.header_menu_feature}
              >
                <div className={style.header_menu_button}>
                  <p className={style.header_menu_button_text}>PlayGround</p>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        <HeaderMobile />
      )}
    </header>
  );
}

export default Header;
