import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FOOTER_HIDE_LIST, URLPaths } from "../../utils/constant";
import style from "./Footer.module.scss";
import Image from "next/image";
import buyMeCoffee from "../../assets/buy_me_coffee.png";

function Footer() {
  const router = useRouter();
  const { database } = router.query;
  return (
    <footer
      className={`${style.footer} ${
        //@ts-ignore
        FOOTER_HIDE_LIST?.includes(database) && style.hide_footer
      }`}
    >
      <div className={style.footer_container}>
        <div className={style.footer_row}>
          <div className={style.footer_column}>
            <Link className={style.footer_item} href={URLPaths.JAVASCRIPT}>
              JavaScript
            </Link>
            <Link className={style.footer_item} href={URLPaths.HTML}>
              HTML
            </Link>
            <Link className={style.footer_item} href={URLPaths.CSS}>
              CSS
            </Link>
            <Link className={style.footer_item} href={URLPaths.BLOG}>
              Blog
            </Link>
          </div>
          <div className={style.footer_column}>
            <Link className={style.footer_item} href={URLPaths.REACTJS}>
              React
            </Link>
            <Link className={style.footer_item} href={URLPaths.REDUX}>
              Redux
            </Link>
            <Link className={style.footer_item} href={URLPaths.SCSS}>
              SCSS
            </Link>
          </div>
          <div className={style.footer_column}>
            <Link
              className={style.footer_item}
              href={URLPaths.FRONTEND_MACHINE_CODING_ROUND}
            >
              Machine Coding Round Questions{" "}
            </Link>
            <Link
              className={style.footer_item}
              href={URLPaths.TOP_FRONTEND_QUESTIONS}
            >
              Coding Round Questions
            </Link>
            <div
              className={`${style.footer_item} ${style.footer_item_buy_coffee}`}
              onClick={() => {
                window.open(
                  "https://www.buymeacoffee.com/sumitsinghJ",
                  "_blank"
                );
              }}
            >
              <Image
                title="Buy me a coffee"
                src={buyMeCoffee}
                alt="Buy me a coffee"
                width={36}
                height={36}
                className={style.header_container_right_item_coffee}
              />
              <p className={style.footer_buy_me_coffee_title}>
                Buy me a coffee
              </p>
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
