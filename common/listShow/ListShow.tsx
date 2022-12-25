import React from "react";
import style from "./ListShow.module.scss";

interface IListShowProps {
  list: string[];
}
function ListShow({ list }: IListShowProps) {
  return (
    <div className={style.listShow}>
      <div className={style.listShow_container}>
        <ul className={style.listShow_list}>
          {list?.map((item: any, index) => (
            <li key={index} className={style.listShow_item}>
              {item?.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListShow;
