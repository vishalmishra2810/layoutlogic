import React from "react";
import style from "./Dashboard.module.scss";
import TopSection from "./topSection/TopSection";
import dynamic from "next/dynamic";
const MachineCodingList = dynamic(
  () => import("./featureMachineCoding/MachineCodingList")
);
const FamousQuestions = dynamic(
  () => import("./famousQuestions/FamousQuestions")
);
const FeaturedQuestions = dynamic(
  () => import("./featuredQuestions/FeaturedQuestions")
);
const AdvanceFrontendFeature = dynamic(
  () => import("./advanceFrontendFeature/AdvanceFrontendFeature")
);
function Dashboard() {
  return (
    <div className={style.dashboard__container}>
      <TopSection />
      <FeaturedQuestions />
      <MachineCodingList />
      <FamousQuestions />
      <AdvanceFrontendFeature />
    </div>
  );
}

export default Dashboard;
