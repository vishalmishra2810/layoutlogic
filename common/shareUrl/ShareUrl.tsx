import React from "react";
import style from "./ShareUrl.module.scss";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { useRouter } from "next/router";

function ShareUrl() {
  const router = useRouter();
  return (
    <div className={style.share_url}>
      <div className={style.share_url_container}>
        <EmailShareButton url={"https://clearjobs.com"}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <FacebookShareButton url={"https://clearjobs.com"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={"https://clearjobs.com"}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={"https://clearjobs.com"}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={"https://clearjobs.com"}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default ShareUrl;
