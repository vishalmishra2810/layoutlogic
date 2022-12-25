import { useRouter } from "next/router";
import React from "react";
import QuestionDisplay from "../common/questionDisplay/QuestionDisplay";
import { getFileContent } from "../utils/helper";
import style from "./../styles/style.module.scss";

function Database() {
  const router = useRouter();
  const { database }: any = router.query;
  return (
    <div className={style.database}>
      <div className={style.database_container}>
        <QuestionDisplay questionData={getFileContent(database)} />
      </div>
    </div>
  );
}

export default Database;
