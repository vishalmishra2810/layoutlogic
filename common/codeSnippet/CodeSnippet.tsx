//@ts-nocheck
import React from "react";
import style from "./CodeSnippet.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

interface ICodeSnippetProps {
  codeString?: string;
}

function CodeSnippet({ codeString }: ICodeSnippetProps) {
  const copyCode = () => {
    navigator?.clipboard?.writeText(codeString);
  };
  return (
    <div className={style.codeSnippet}>
      <div className={style.codeSnippet_container}>
        <div className={style.codeSnippet_title} onClick={copyCode}>
          copy code
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          showLineNumbers={true}
          customStyle={{
            borderRadius: "0px 0px 12px 12px",
          }}
        >
          {prettier.format(codeString, {
            parser: "babel",
            plugins: [parserBabel],
          })}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeSnippet;
