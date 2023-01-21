import React from "react";
import style from "./TopicsList.module.scss";

function TopicsList({
  selectedTopic,
  setSelectedTopic,
  title,
  description,
  topicList,
}: any) {
  const changeSelectedTopic = (topic: string) => {
    setSelectedTopic(topic);
  };
  return (
    <>
      <div className={style.topicsList}>
        <div className={style.topicsList_container}>
          <div className={style.topicsList_heder_container}>
            <div className={style.topicsList_header}>{title}</div>
            <div className={style.topicsList_sub_header}>{description}</div>
          </div>
        </div>
      </div>
      <div className={style.topicsList_items_list}>
        {topicList?.map((topic: any, index: any) => (
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
    </>
  );
}

export default TopicsList;
