import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FOOTER_HIDE_LIST, HEADER_LIST, URLPaths } from "../../utils/constant";
import style from "./Footer.module.scss";
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
