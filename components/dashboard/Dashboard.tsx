import React from "react";
import style from "./Dashboard.module.scss";
import Feature from "./feature/Feature";
import FeaturedQuestions from "./featuredQuestions/FeaturedQuestions";
import TopSection from "./topSection/TopSection";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <TopSection />
      <FeaturedQuestions />
      <Feature />
    </div>
  );
}

export default Dashboard;
