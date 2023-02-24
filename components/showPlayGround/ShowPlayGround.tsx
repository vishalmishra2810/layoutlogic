import React from "react";
import MonacoEditor from "../../common/customEditor/MonacoEditor";
import AllCompiler from "./allCompiler/AllCompiler";
import style from "./ShowPlayGround.module.scss";

function ShowPlayGround({ language }: any) {
  return (
    <div className={style.showPlayGround}>
      <AllCompiler language={language} />
      <MonacoEditor language={language} />
    </div>
  );
}

export default ShowPlayGround;
