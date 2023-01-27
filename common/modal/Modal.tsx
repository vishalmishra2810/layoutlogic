import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { URLPaths } from "../../utils/constant";
import style from "./style.module.scss";

interface IModalProps {
  title: string;
  description?: string;
  url: string;
  width: number;
  height: number;
  slug?: string;
  route: string;
}

function Modal({ title, description, url, width, height, route }: IModalProps) {
  const router = useRouter();
  const changeRoute = () => {
    router.push(route);
  };
  return (
    <div className={style.modal} onClick={changeRoute}>
      <div
        className={style.modal_box}
        style={{
          width: width,
          height: height,
          gap: height < 400 ? 12 : "",
        }}
      >
        <Image
          src={url}
          alt={title}
          width={80}
          height={80}
          className={style.modal_icon}
        />
        <div className={style.modal_box_title}>{title}</div>
        <div className={style.modal_box_description}>{description}</div>
        <Link
          href={route}
          className={style.modal_box_button}
          style={{
            marginTop: height < 350 ? 0 : height < 400 ? 12 : "",
          }}
        >
          Open {title}{" "}
          {route !== URLPaths.TOP_FRONTEND_QUESTIONS ? "Questions" : ""}
        </Link>
      </div>
    </div>
  );
}

export default Modal;
