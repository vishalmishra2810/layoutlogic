import React from "react";
import style from "./AdvanceFrontendFeature.module.scss";
import { ADVANCE_FRONTEND_FEATURE } from "./constant";
import outputIcon from "../../../assets/Loading-bro.svg";
import Image from "next/image";
import { URLPaths } from "../../../utils/constant";
import Link from "next/link";
import dynamic from "next/dynamic";
const CodeSnippet = dynamic(
  () => import("../../../common/codeSnippet/CodeSnippet")
);

function AdvanceFrontendFeature() {
  return (
    <div className={style.advancedFeature}>
      <div className={style.design}>
        <div className={style.line}></div>
        <div className={style.circle}>4</div>
        <div className={style.title}>Advanced Frontend Features</div>
      </div>
      <div className={style.advancedFeature_header}>
        <div className={style.advancedFeature_header__text}>
          Integrate Advanced Frontend Features in your project
        </div>
        <div className={style.advancedFeature_header__sub_text}>
          we have collected some of the most advanced frontend features that you
          can integrate in your project to make it more interactive and
          attractive. You can also use these features to make your project more
          user-friendly.
        </div>
        <Link
          className={style.advancedFeature_header__button}
          href={URLPaths.ADVANCE_FRONTEND_FEATURE}
        >
          Open Advanced Features List
        </Link>
      </div>
      <div className={style.advancedFeature_body}>
        <div className={style.advancedFeature_body__code_snippet_header}>
          <div className={style.advancedFeature_body__code_snippet_header__top}>
            <div
              className={
                style.advancedFeature_body__code_snippet_header__top__red
              }
            ></div>
            <div
              className={
                style.advancedFeature_body__code_snippet_header__top__yellow
              }
            ></div>
            <div
              className={
                style.advancedFeature_body__code_snippet_header__top__green
              }
            ></div>
            <div
              className={
                style.advancedFeature_body__code_snippet_header__top__text
              }
            >
              Index.jsx
            </div>
          </div>
          <CodeSnippet
            codeString={ADVANCE_FRONTEND_FEATURE}
            language="javascript"
            showLineNumber={true}
          />
          <div className={style.advancedFeature_body__output}>
            <div className={style.advancedFeature_body__output_header}>
              <div
                className={
                  style.advancedFeature_body__code_snippet_header__top__red
                }
              ></div>
              <div
                className={
                  style.advancedFeature_body__code_snippet_header__top__yellow
                }
              ></div>
              <div
                className={
                  style.advancedFeature_body__code_snippet_header__top__green
                }
              ></div>
              <div
                className={
                  style.advancedFeature_body__code_snippet_header__output_text
                }
              >
                localhost:3000
              </div>
            </div>
            <Image
              src={outputIcon}
              className={style.advancedFeature_body__output_img}
              alt="output"
              width={600}
              height={360}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvanceFrontendFeature;
