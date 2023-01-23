import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { DEVICE_TYPE, HEADER_LIST, URLPaths } from "../../utils/constant";
import useWindowWidth from "../../utils/hooks/useWindowWidth";
import style from "./Header.module.scss";
import HeaderMobile from "./mobile/HeaderMobile";
import buyMeCoffee from "../../assets/buy_me_coffee.png";
import Link from "next/link";
import dynamic from "next/dynamic";
const Feedback = dynamic(() => import("../../common/feedback/Feedback"));

function Header() {
  const [showFeedback, setShowFeedback] = React.useState(false);
  const windowWidth = useWindowWidth();
  const router = useRouter();
  const { database } = router.query;

  const openFeedBackForm = (e: any) => {
    e.stopPropagation();
    setShowFeedback(true);
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
            <div className={style.feedback_container}>
              <div
                className={style.header_container_right_item_feedback}
                onClick={openFeedBackForm}
              >
                Feedback
              </div>
              {showFeedback && (
                <Feedback
                  setShowFeedback={setShowFeedback}
                  showFeedback={showFeedback}
                />
              )}
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
