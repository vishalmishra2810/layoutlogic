import React from "react";
import DropDown from "../../common/dropDown/DropDown";
import style from "./SideBar.module.scss";

function SideBar() {
  return (
    <div className={style.sideBar}>
      <div className={style.sideBar_container}>
        <DropDown easy={["easy"]} />
        <DropDown medium={["medium"]} />
        <DropDown hard={["hello world"]} />
      </div>
    </div>
  );
}

export default SideBar;
