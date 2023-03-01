import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FOOTER_HIDE_LIST, HEADER_LIST, URLPaths } from "../../utils/constant";
import style from "./Footer.module.scss";
import Image from "next/image";
import buyMeCoffee from "../../assets/buy_me_coffee.svg";
import {
  ADVANCED_ROUND_LINKS,
  CODING_ROUND_LINKS,
  FOOTER_LINKS_MACHINE_ROUND,
} from "./constant";

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
            <div className={style.footer_header}>FrontEnd Topics</div>
            {HEADER_LIST.map((item: any, index: number) => (
              <Link className={style.footer_item} href={item?.path} key={index}>
                {item?.title}
              </Link>
            ))}
          </div>
          <div className={style.footer_column}>
            <div className={style.footer_header}>Machine Coding Round</div>
            {FOOTER_LINKS_MACHINE_ROUND?.map((item: any, index: number) => (
              <Link
                className={style.footer_item}
                href={URLPaths.FRONTEND_MACHINE_CODING_ROUND + "/" + item?.slug}
                key={index}
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <div className={style.footer_column}>
            <div className={style.footer_header}>Coding Round</div>
            {CODING_ROUND_LINKS?.map((item: any, index: number) => (
              <Link
                className={style.footer_item}
                href={URLPaths.TOP_FRONTEND_QUESTIONS + "/" + item?.slug}
                key={index}
              >
                {item?.title}
              </Link>
            ))}
          </div>
          <div className={style.footer_column}>
            <div className={style.footer_header}>Advance Features</div>
            {ADVANCED_ROUND_LINKS?.map((item: any, index: number) => (
              <Link
                className={style.footer_item}
                href={URLPaths.ADVANCE_FRONTEND_FEATURE + "/" + item?.slug}
                key={index}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={style.footer_row}>
          <div className={style.footer_title}>
            Copyright @2023 LayoutLogic All Rights Reserved
          </div>
          {/* <div
            className={`${style.footer_item} ${style.footer_item_buy_coffee}`}
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
            <p className={style.footer_buy_me_coffee_title}>Buy me a coffee</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
