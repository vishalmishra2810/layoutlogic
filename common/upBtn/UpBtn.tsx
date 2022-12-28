import React from "react";
import style from "./UpBtn.module.scss";
import downIcon from "../../assets/dropdown.svg";
import Image from "next/image";

function UpBtn() {
  const sendUserToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.upBtn}>
      <div className={style.upBtn_container} onClick={sendUserToTop}>
        <Image
          src={downIcon}
          alt="downIcon"
          width={36}
          height={36}
          className={style.upBtn_container_icon}
        />
      </div>
    </div>
  );
}

export default UpBtn;
