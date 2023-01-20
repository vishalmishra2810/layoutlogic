import React from "react";
import style from "./TopicsList.module.scss";
import { getTopicsList } from "../../utils/helper";

function TopicsList({ selectedTopic, setSelectedTopic }: any) {
  const changeSelectedTopic = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <div className={style.topicsList}>
      <div className={style.topicsList_container}>
        <div className={style.topicsList_heder_container}>
          <div className={style.topicsList_header}>Blog</div>
          <div className={style.topicsList_sub_header}>
            Top blogs on web development, design, and more
          </div>
        </div>
        <div className={style.topicsList_items_list}>
          {getTopicsList()?.map((topic, index) => (
            <div
              className={`${style.topicsList_item} ${
                topic === selectedTopic && style.topicsList_Selected
              } `}
              key={index}
              onClick={() => {
                changeSelectedTopic(topic);
              }}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicsList;
