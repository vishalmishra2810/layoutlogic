import { useRouter } from "next/router";
import React from "react";
import style from "./MinimalHeader.module.scss";

function MinimalHeader() {
  const router = useRouter();
  const goToDashboard = () => {
    router.push("/");
  };
  return (
    <div className={style.minimalHeader}>
      <div className={style.minimalHeader__title} onClick={goToDashboard}>
        LayoutLogic
      </div>
    </div>
  );
}

export default MinimalHeader;