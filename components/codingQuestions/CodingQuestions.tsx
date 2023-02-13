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
            Go back
          </div>
        </div>
        <div className={style.machine_left_body}>
          <iframe
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            frameBorder={0}
            allowFullScreen={true}
            loading="lazy"
            className={style.iframe_container}
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
