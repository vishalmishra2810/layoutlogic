import Image from "next/image";
import React from "react";
import CodeSnippet from "../codeSnippet/CodeSnippet";
import style from "./Style.module.scss";

function TabView({ tabList, tabComponentList, result_url }: any) {
  const [activeTab, setActiveTab]: any = React.useState(0);
  console.log(tabList[activeTab]?.toLowerCase(), tabComponentList[activeTab]);
  return (
    <div className={style.tabView}>
      <div className={style.tabView__container}>
        <div className={style.tabView__container__header}>
          <div className={style.tabView__container__header_left}>
            {tabList?.map((tab: any, index: number) => (
              <div
                className={`${style.tabView__container__header__tab} ${
                  index === activeTab
                    ? style.tabView__container__header__tab_active
                    : ""
                }`}
                key={index}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {tab}
              </div>
            ))}
          </div>
          <div
            className={`${style.tabView__container__header__tab} ${
              "Result" === activeTab
                ? style.tabView__container__header__tab_active
                : ""
            }`}
            onClick={() => {
              setActiveTab("Result");
            }}
          >
            Result
          </div>
        </div>
        <div className={style.tabView__container__content}>
          {activeTab === "Result" ? (
            <div className={style.tabView__container__content__result}>
              <Image
                src={result_url}
                width={800}
                height={800}
                alt={result_url}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          ) : (
            <CodeSnippet
              codeString={tabComponentList[activeTab]}
              language={tabList[activeTab]?.toLowerCase()}
              removeTopMargin={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TabView;
