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

function Dashboard() {
  return (
    <div className={style.dashboard__container}>
      <TopSection />
      <FeaturedQuestions />
      <MachineCodingList />
      <FamousQuestions />
    </div>
  );
}

export default Dashboard;
