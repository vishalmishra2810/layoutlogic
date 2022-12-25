import React from "react";
import style from "./CodeSnippet.module.scss";
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
//@ts-ignore
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface ICodeSnippetProps {
  codeString?: string;
}

function CodeSnippet({ codeString }: ICodeSnippetProps) {
  return (
    <div className={style.codeSnippet}>
      <div className={style.codeSnippet_container}>
        <div className={style.codeSnippet_title}>copy code</div>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          showLineNumbers={true}
          customStyle={{
            fontSize: "1.4em",
            fontFamily: "monospace",
            borderRadius: "0px 0px 12px 12px",
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeSnippet;
