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
}

function Modal({ title, description, url, width, height }: IModalProps) {
  const router = useRouter();
  const startQuestions = () => {
    router.push("/" + title.toLowerCase());
  };
  return (
    <div className={style.modal} onClick={startQuestions}>
      <div
        title={title}
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
          width={60}
          height={60}
          className={style.modal_icon}
        />
        <div className={style.modal_box_title}>{title}</div>
        <div className={style.modal_box_description}>{description}</div>
        <div
          onClick={startQuestions}
          className={style.modal_box_button}
          style={{
            marginTop: height < 350 ? 0 : height < 400 ? 12 : "",
          }}
        >
          Get all Questions
        </div>
      </div>
    </div>
  );
}

export default Modal;
