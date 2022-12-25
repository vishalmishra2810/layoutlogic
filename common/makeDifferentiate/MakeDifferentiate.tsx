import React from "react";
import style from "./MakeDifferentiate.module.scss";

interface IDifferentiateProps {
  totalColumn: number;
  headerData: string[];
  columnData: any;
  columnDataLength: number;
}
function MakeDifferentiate({
  totalColumn,
  headerData,
  columnData,
  columnDataLength,
}: IDifferentiateProps) {
  return (
    <div className={style.differentiate}>
      <div className={style.differentiate_container}>
        <table className={style.differentiate_table}>
          <thead>
            <tr>
              {Array.from({ length: totalColumn }, (v, i) => i).map(
                (item, index) => (
                  <th key={index} className={style.differentiate_header}>
                    {headerData[index]}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: columnDataLength }, (v, i) => i)?.map(
              (item, index) => (
                <tr key={index}>
                  {Object?.keys(columnData).map((key) => (
                    <td key={index + key}>{columnData[key][index]}</td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MakeDifferentiate;
