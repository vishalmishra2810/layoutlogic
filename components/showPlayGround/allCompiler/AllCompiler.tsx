import React from "react";
import style from "./AllCompiler.module.scss";
import Image from "next/image";
import { ALL_COMPILER } from "./constant";
import { useRouter } from "next/router";

function AllCompiler({ language }: any) {
  const router = useRouter();
  return (
    <div className={style.allCompiler}>
      {ALL_COMPILER?.map((item, index) => (
        <div
          className={`${style.compiler__item} ${
            item?.value === language ? style.active__item : ""
          }`}
          key={index}
          onClick={() => {
            router.push(`/playground/${item?.value}`);
          }}
        >
          <Image
            src={item?.icon}
            alt={item?.title}
            width={30}
            height={30}
            title={item?.title}
          />
        </div>
      ))}
    </div>
  );
}

export default AllCompiler;
