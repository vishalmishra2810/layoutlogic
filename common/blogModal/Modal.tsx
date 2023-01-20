import Image from "next/image";
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
}

function Modal({
  title,
  description,
  url,
  width = 494,
  height,
  slug,
}: IModalProps) {
  const router = useRouter();
  const startQuestions = () => {
    router.push("/blog/" + slug);
  };
  return (
    <div className={style.modal} onClick={startQuestions}>
      <div
        className={style.modal_box}
        style={{
          width: width,
          height: height,
        }}
      >
        <Image
          src={url}
          alt={title}
          width={450}
          height={320}
          className={style.modal_icon}
        />
        <div className={style.modal_box_title}>{title}</div>
        <div className={style.modal_box_description}>{description}</div>
        <div onClick={startQuestions} className={style.modal_box_button}>
          Read full article
        </div>
      </div>
    </div>
  );
}

export default Modal;