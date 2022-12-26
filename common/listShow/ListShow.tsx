import React from "react";
import style from "./ListShow.module.scss";

interface IListShowProps {
  list: string[];
  typeOfList: "ul" | "ol";
}
function ListShow({ list, typeOfList }: IListShowProps) {
  return (
    <div className={style.listShow}>
      <div className={style.listShow_container}>
        <ul
          className={style.listShow_list}
          style={{
            listStyleType: typeOfList === "ul" ? "disc" : "decimal",
          }}
        >
          {list?.map((item: any, index) => (
            <li key={index} className={style.listShow_item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListShow;
