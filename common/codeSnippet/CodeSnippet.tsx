//@ts-nocheck
import React from "react";
import style from "./CodeSnippet.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";
import parserjson from "prettier/parser-yaml";

interface ICodeSnippetProps {
  codeString?: string;
  language?: string;
  removeTopMargin?: boolean;
}

function CodeSnippet({
  codeString,
  language = "javascript",
  removeTopMargin = false,
}: ICodeSnippetProps) {
  return (
    <div className={style.codeSnippet}>
      <div
        className={style.codeSnippet_container}
        style={{
          marginTop: removeTopMargin ? 0 : "",
        }}
      >
        <SyntaxHighlighter language={language} style={atomOneDark}>
          {language === "javascript"
            ? prettier.format(codeString, {
                parser: "babel",
                plugins: [parserBabel],
              })
            : language === "html"
            ? prettier.format(codeString, {
                parser: "html",
                plugins: [parserHtml],
              })
            : language === "css" || language === "scss"
            ? prettier.format(codeString, {
                parser: "css",
                plugins: [parserCss],
              })
            : language === "bash"
            ? prettier.format(codeString, {
                parser: "yaml",
                plugins: [parserjson],
              })
            : codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeSnippet;
