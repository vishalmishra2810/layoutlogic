//@ts-nocheck
import React from "react";
import style from "./CodeSnippet.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserHtml from "prettier/parser-html";

interface ICodeSnippetProps {
  codeString?: string;
  language?: string;
}

function CodeSnippet({
  codeString,
  language = "javascript",
}: ICodeSnippetProps) {
  return (
    <div className={style.codeSnippet}>
      <div className={style.codeSnippet_container}>
        <SyntaxHighlighter language={language} style={atomOneDark}>
          {language === "javascript"
            ? prettier.format(codeString, {
                parser: "babel",
                plugins: [parserBabel],
              })
            : prettier.format(codeString, {
                parser: "html",
                plugins: [parserHtml],
              })}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeSnippet;
