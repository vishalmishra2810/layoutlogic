import { useRouter } from "next/router";
import React from "react";
import { ADVANCE_FRONTEND_URL, URLPaths } from "../../utils/constant";
import style from "./ShowAdvanceFrontEnd.module.scss";

function ShowAdvanceFrontEnd({ slug }: any) {
  const [loading, setLoading] = React.useState<boolean>(true);
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
            //hide loader when iframe is loaded
            onLoad={() => setLoading(false)}
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
