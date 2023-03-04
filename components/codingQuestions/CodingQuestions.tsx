import React, { useEffect } from "react";
import style from "./CodingQuestions.module.scss";
import { stack_blitz_url, URLPaths } from "../../utils/constant";
import QuestionsExplanations from "../../common/questionsExplanation/QuestionsExplanations";
import { getQuestionsInformation } from "../../utils/helper";
import { useRouter } from "next/router";

interface ICodingQuestionsProps {
  slug: string;
}
function CodingQuestions({ slug }: ICodingQuestionsProps) {
  const router = useRouter();
  const [question_info, setQuestionInfo] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);
  useEffect(() => {
    if (slug) {
      const coding_question_info = getQuestionsInformation(slug);
      setQuestionInfo(coding_question_info);
    }
  }, [slug]);

  const goBack = () => {
    router.back();
  };

  const goToDashboard = () => {
    router.push(URLPaths.HOME);
  };
  return (
    <div className={style.machine}>
      <div className={style.machine_left}>
        <div className={style.machine_left_header}>
          <div
            className={style.machine_left_header_title}
            onClick={goToDashboard}
          >
            LayoutLogic
          </div>
          <div className={style.machine_left_header_subTitle} onClick={goBack}>
            <span>&#8592;</span> Go back
          </div>
        </div>
        <div className={style.machine_left_body}>
          {loading ? <Loader /> : null}
          <iframe
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full; midi; geolocation; microphone; camera; midi; vr *; xr-spatial-tracking *;  "
            frameBorder={0}
            allowFullScreen={true}
            loading="eager"
            className={style.iframe_container}
            //hide loader when iframe is loaded
            onLoad={() => setLoading(false)}
            //@ts-ignore
            src={`https://stackblitz.com/edit/${stack_blitz_url[slug]}?embed=1&file=App.tsx&theme=dark&hideNavigation=1`}
          ></iframe>
          <div className={style.coding_questions_container_footer}></div>
        </div>
      </div>
      <div className={style.machine_right}>
        <QuestionsExplanations question_info={question_info} />
      </div>
    </div>
  );
}

export default CodingQuestions;

function Loader() {
  return (
    <div className={style.loader}>
      <div className={style["loader-bar"]}></div>
      <div className={style["loader-bar"]}></div>
      <div className={style["loader-bar"]}></div>
      <div className={style["loader-bar"]}></div>
    </div>
  );
}
