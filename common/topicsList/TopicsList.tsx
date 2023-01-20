import React from "react";
import style from "./TopicsList.module.scss";
import Image from "next/image";
import forwardIcon from "../../assets/forward.svg";
import { getTopicsList } from "../../utils/helper";

function TopicsList({ selectedTopic, setSelectedTopic }: any) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const scrollForward = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 50;
    }
  };

  const scrollBackward = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 50;
    }
  };

  const changeSelectedTopic = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <div className={style.topicsList}>
      <div className={style.topicsList_icon} onClick={scrollBackward}>
        <Image
          src={forwardIcon}
          alt="Forward Icon"
          width={24}
          height={24}
          className={style.topicsList_icon_backward}
        />
      </div>
      <div className={style.topicsList_container} ref={scrollRef}>
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
      <div className={style.topicsList_icon} onClick={scrollForward}>
        <Image
          src={forwardIcon}
          alt="Forward Icon"
          width={24}
          height={24}
          className={style.topicsList_icon_forward}
        />
      </div>
    </div>
  );
}

export default TopicsList;
