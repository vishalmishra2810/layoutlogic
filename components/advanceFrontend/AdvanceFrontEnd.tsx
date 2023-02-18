import React, { useEffect } from "react";
import style from "./AdvanceFrontEnd.module.scss";
import AdvanceLayout from "./advanceLayout/AdvanceLayout";
import { getAdvanceFrontEndList } from "../../utils/helper";
import AdvanceHeader from "./advanceHeader/AdvanceHeader";

function AdvanceFrontEnd() {
  const [activeLayout, setActiveLayout] = React.useState<"list" | "grid">(
    "grid"
  );
  const [level, setLevel] = React.useState<any>({
    easy: true,
    medium: true,
    hard: true,
  });
  const [searchText, setSearchText] = React.useState<string>("");
  const [list, setList] = React.useState<any[]>([]);
  useEffect(() => {
    setList(getAdvanceFrontEndList(searchText, level));
  }, [searchText, level]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.title}>Advance Frontend</h1>
        <p className={style.description}>
          Integrate advance frontend features in your project with ease.
        </p>
      </div>
      <div className={style.content}>
        <div className={style.content_header}>
          <AdvanceHeader
            searchText={searchText}
            setSearchText={setSearchText}
            level={level}
            setLevel={setLevel}
            activeLayout={activeLayout}
            setActiveLayout={setActiveLayout}
          />
        </div>
        <div className={style.right_content}>
          <AdvanceLayout layoutType={activeLayout} data={list} />
        </div>
      </div>
    </div>
  );
}

export default AdvanceFrontEnd;
