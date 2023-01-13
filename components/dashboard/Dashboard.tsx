import React, { memo } from "react";
import style from "./Dashboard.module.scss";
import FamousQuestions from "./famousQuestions/FamousQuestions";
import FeaturedQuestions from "./featuredQuestions/FeaturedQuestions";
import MachineCodingList from "./featureMachineCoding/MachineCodingList";
import TopSection from "./topSection/TopSection";
import Footer from "../footer/Footer";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <div className={style.dashboard__container}>
        <TopSection />
        <FeaturedQuestions />
        <MachineCodingList />
        <FamousQuestions />
      </div>
      <Footer />
    </div>
  );
}

export default memo(Dashboard);
