import React from "react";
import style from "./ReplaceCode.module.scss";

interface IReplaceCodeProps {
  codeString: string;
  list: string[];
}
function ReplaceCode({ codeString, list }: IReplaceCodeProps) {
  return (
    <p>
      {codeString.split(" ").map((word, index) => {
        if (list?.includes(word)) {
          return (
            <code key={index} className={style.replace_code}>
              {" `" + word + "` "}
            </code>
          );
        }
        return " " + word + " ";
      })}
    </p>
  );
}

export default ReplaceCode;
