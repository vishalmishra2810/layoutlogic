import React from "react";
import MonacoEditor from "../../common/customEditor/MonacoEditor";
import AllCompiler from "./allCompiler/AllCompiler";
import style from "./ShowPlayGround.module.scss";

function ShowPlayGround({ language }: any) {
  return (
    <div className={style.showPlayGround}>
      <AllCompiler language={language} key={language + "compiler"} />
      <MonacoEditor language={language} key={language} />
    </div>
  );
}

export default ShowPlayGround;
