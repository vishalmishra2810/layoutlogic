import { useRouter } from "next/router";
import React from "react";
import { ADVANCE_FRONTEND_URL, URLPaths } from "../../utils/constant";
import style from "./ShowAdvanceFrontEnd.module.scss";

function ShowAdvanceFrontEnd({ slug }: any) {
  const router = useRouter();
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
            src={`https://stackblitz.com/edit/${ADVANCE_FRONTEND_URL[slug]}?embed=1&file=App.tsx&theme=dark&hideNavigation=1`}
          ></iframe>
          <div className={style.coding_questions_container_footer}></div>
        </div>
      </div>
    </div>
  );
}

export default ShowAdvanceFrontEnd;
