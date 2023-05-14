import React, { useEffect } from "react";
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
  useEffect(() => {
    (() => {
      if (typeof window !== "undefined") {
        console.log("window", window, 'identify');
        (window as any).hj('identify', {
          'name': "Sumit Kumar Singh",
          'email': "sumit@gmail.com",
          'address': "Bangalore",
          'phone': "1234567890",
          'company': "Google",
          'role': "Software Engineer",
          'experience': "5 years",
        });
      }
    })();
  }, []);
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
