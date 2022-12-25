import React from "react";
import style from "./Header.module.scss";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.header_container}>
        <div className={style.header_title}>ClearJobs</div>
      </div>
    </div>
  );
}

export default Header;
