import React from "react";
import style from "./ReplaceCode.module.scss";

interface IReplaceCodeProps {
  codeString: string;
  list: string[];
}
function ReplaceCode({ codeString, list }: IReplaceCodeProps) {
  return (
    <p className="simple_answers">
      {codeString.split(" ").map((word, index) => {
        if (list?.includes(word)) {
          return (
            <span key={index} className={style.replace_code}>
              {" `" + word + "` "}
            </span>
          );
        }
        return " " + word + " ";
      })}
    </p>
  );
}

export default ReplaceCode;
