import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
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

function Modal({
  title,
  description,
  url,
  width,
  height,
  slug,
  route,
}: IModalProps) {
  const router = useRouter();
  const startQuestions = () => {
    if (slug) {
      router.push("/" + slug);
      return;
    }
    router.push("/" + title.toLowerCase());
  };
  return (
    <div className={style.modal} onClick={startQuestions}>
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
          Get all Questions
        </Link>
      </div>
    </div>
  );
}

export default Modal;
