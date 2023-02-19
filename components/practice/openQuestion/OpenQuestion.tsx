import React, { useEffect } from "react";
import { getFrontOnlyQuestions } from "../../../utils/helper";
import style from "./OpenQuestion.module.scss";

function OpenQuestion({ slug }: any) {
  const [question_info, setQuestionInfo] = React.useState<any>("");
  useEffect(() => {
    if (slug) {
      setQuestionInfo(getFrontOnlyQuestions(slug));
    }
  }, [slug]);
  
  return (
    <div className={style.open}>
      <iframe
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        frameBorder={0}
        allowFullScreen={true}
        loading="lazy"
        className={style.iframe_container}
        //@ts-ignore
        src={`https://stackblitz.com/edit/js-o9atxo?devToolsHeight=33&embed=1&file=index.js&hideNavigation=1&theme=dark`}
      ></iframe>
      <div className={style.question_info}></div>
    </div>
  );
}

export default OpenQuestion;
