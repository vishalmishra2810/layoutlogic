import React from "react";
import style from "./Dashboard.module.scss";
import Feature from "./feature/Feature";
import FeaturedQuestions from "./featuredQuestions/FeaturedQuestions";
import MachineCodingList from "./featureMachineCoding/MachineCodingList";
import StartLearning from "./startLearning/StartLearning";
import TopSection from "./topSection/TopSection";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <TopSection />
      <FeaturedQuestions />
      <MachineCodingList />
      <Feature />
      <StartLearning />
    </div>
  );
}

export default Dashboard;
