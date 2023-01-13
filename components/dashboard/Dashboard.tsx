import React, { memo } from "react";
import style from "./Dashboard.module.scss";
import FamousQuestions from "./famousQuestions/FamousQuestions";
import FeaturedQuestions from "./featuredQuestions/FeaturedQuestions";
import MachineCodingList from "./featureMachineCoding/MachineCodingList";
import TopSection from "./topSection/TopSection";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <TopSection />
      <FeaturedQuestions />
      <MachineCodingList />
      <FamousQuestions />
    </div>
  );
}

export default memo(Dashboard);
