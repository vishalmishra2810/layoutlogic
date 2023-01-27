import Link from "next/link";
import React from "react";
import { URLPaths } from "../../utils/constant";
import useClickOutSide from "../../utils/hooks/useClickoutSide";
import style from "./ShowFeature.module.scss";

function ShowFeature({ setShowMenu }: any) {
  const ref = React.useRef(null);
  const closePopup = () => {
    setShowMenu(false);
  };
  useClickOutSide(ref, closePopup);
  return (
    <div className={style.showFeature} ref={ref}>
      <div className={style.showFeature__content}>
        <Link
          className={style.showFeature__content__item}
          href={URLPaths.FRONTEND_MACHINE_CODING_ROUND}
          onClick={() => setShowMenu(false)}
        >
          <p className={style.showFeature__content__item__title}>
            Machine Coding Round
          </p>
          <p className={style.showFeature__content__item__description}>
            Deep dive into your frontend skills
          </p>
        </Link>
        <Link
          className={style.showFeature__content__item}
          href={URLPaths.TOP_FRONTEND_QUESTIONS}
          onClick={() => setShowMenu(false)}
        >
          <p className={style.showFeature__content__item__title}>
            Frontend Coding Question
          </p>
          <p className={style.showFeature__content__item__description}>
            Open ended questions to test your coding skills
          </p>
        </Link>
        <Link
          className={style.showFeature__content__item}
          href={URLPaths.ADVANCE_FRONTEND_FEATURE}
          onClick={() => setShowMenu(false)}
        >
          <p className={style.showFeature__content__item__title}>
            Advanced Frontend feature
          </p>
          <p className={style.showFeature__content__item__description}>
            Add advanced features to your next project
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ShowFeature;
