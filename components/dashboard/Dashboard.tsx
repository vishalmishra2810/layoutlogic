import React, { memo } from "react";
import style from "./Dashboard.module.scss";
import FamousQuestions from "./famousQuestions/FamousQuestions";
import FeaturedQuestions from "./featuredQuestions/FeaturedQuestions";
import MachineCodingList from "./featureMachineCoding/MachineCodingList";
import TopSection from "./topSection/TopSection";
import Footer from "../footer/Footer";
import { Adsense } from "@ctrl/react-adsense";
import { GOOGLE_ADSENSE } from "../../utils/constant";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <div className={style.dashboard__container}>
        <TopSection />
        <FeaturedQuestions />
        <MachineCodingList />
        <FamousQuestions />
        {/* <Adsense
          client={GOOGLE_ADSENSE.CLIENT_ID}
          slot={GOOGLE_ADSENSE.AD_SLOT}
          style={{ display: "block" }}
          layout="in-article"
          format="autorelaxed"
        /> */}
      </div>
      <Footer />
    </div>
  );
}

export default memo(Dashboard);
