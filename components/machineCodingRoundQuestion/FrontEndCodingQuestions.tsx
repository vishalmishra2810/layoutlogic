import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import {
  getAllMachineRoundQuestions,
  getAllMachineRoundQuestionsByTopics,
  getTechIcon,
} from "../../utils/helper";
import style from "./FrontEndCodingQuestions.module.scss";
import { FRONT_END_MACHINE_CODING_TOPICS } from "../../utils/constant";
import dynamic from "next/dynamic";
const TopicsList = dynamic(() => import("../../common/topicsList/TopicsList"));
const Loader = dynamic(() => import("../../common/loader/Loader"));
const NoPostFound = dynamic(
  () => import("../blogDashboard/noPostFound/NoPostFound")
);

function FrontEndCodingQuestions() {
  const [selectedTopic, setSelectedTopic] = React.useState<string>("All");
  const [listData, setListData] = useState<any>([]);
  const [localLoading, setLocalLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setLocalLoading(true);
    if (selectedTopic === "All") {
      setListData(getAllMachineRoundQuestions());
      setLocalLoading(false);
    } else {
      setListData(getAllMachineRoundQuestionsByTopics(selectedTopic));
      setLocalLoading(false);
    }
  }, [selectedTopic]);

  return (
    <div className={style.machine_round}>
      <TopicsList
        title="Machine Coding Round Questions"
        description="Practice Machine Coding Round Questions and get ready for your next interview."
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        topicList={FRONT_END_MACHINE_CODING_TOPICS}
      />
      <ul className={style.machine_round_list}>
        {localLoading ? (
          <div className={style.machine_round_list_loader}>
            <Loader />
          </div>
        ) : listData?.length > 0 ? (
          listData?.map((question: any, index: number) => (
            <Link
              href={"/questions/" + question.slug}
              className={style.machine_round_list_item}
              key={index}
            >
              <div className={style.machine_round_list_item_question}>
                {question.question}
              </div>
              <div className={style.machine_round_list_item_image}>
                <Image
                  src={question.imgUrl}
                  width={300}
                  height={200}
                  alt={question.slug}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className={style.machine_round_list_item_language_container}>
                {question?.language?.map((language: any, index: number) => (
                  <div
                    className={
                      style.machine_round_list_item_language_container_item
                    }
                    key={index}
                  >
                    <Image
                      alt={language}
                      src={getTechIcon(language)}
                      width={30}
                      height={30}
                    />
                  </div>
                ))}
              </div>
            </Link>
          ))
        ) : (
          <NoPostFound title="Currently there are no questions available." />
        )}
      </ul>
    </div>
  );
}

export default memo(FrontEndCodingQuestions);
