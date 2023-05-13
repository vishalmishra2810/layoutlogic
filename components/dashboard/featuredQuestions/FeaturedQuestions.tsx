import React, { useEffect } from "react";
import style from "./FeaturedQuestions.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_DATA } from "./constant";

function FeaturedQuestions() {
  const [selectedTopics, setSelectedTopics] = React.useState<any>(
    FEATURED_DATA[0]
  );
  useEffect(() => {
    (() => {
      if (typeof window !== "undefined") {
        (window as any).hj("identify", {
          name: "Sumit Kumar Singh",
          email: "sumit@gmail.com",
          address: "Bangalore",
          phone: "1234567890",
          company: "Google",
          role: "Software Engineer",
          experience: "5 years",
        });
      }
    })();
  }, []);
  return (
    <div className={style.topics}>
      <div className={style.topics_grid}>
        <div className={style.topics_title}>Important Topics</div>
        <div className={style.topics_grid_item}>
          <div className={style.topics_grid_item_left}>
            <div className={style.topics_grid_item_title}>
              Every Questions that needed to ace FrontEnd Interviews are here.
            </div>
            <div className={style.topics_grid_item_description}>
              Ace your FrontEnd interviews with the Latest and Most Popular
              FrontEnd Interview Questions.
            </div>
            <div className={style.topics_grid_item_lists}>
              {FEATURED_DATA?.map((item: any, index: any) => (
                <div
                  className={`${style.topics_grid_item_list} ${
                    selectedTopics?.title === item?.title && style.selectedItem
                  }`}
                  key={index}
                  onClick={() => setSelectedTopics(item)}
                >
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    width={32}
                    height={32}
                    className={style.topics_grid_item_list_icon}
                  />
                  <div className={style.topics_grid_item_list_right}>
                    <div className={style.topics_grid_item_list_title}>
                      {item?.title}
                    </div>
                    <div className={style.topics_grid_item_list_description}>
                      {item?.description}
                    </div>
                    <Link
                      href={item?.url}
                      className={style.topics_grid_item_list_link}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.topics_grid_item_right}>
            {selectedTopics?.questions?.map((item: any, index: any) => (
              <div className={style.topics_grid_item_right_item} key={index}>
                <div className={style.topics_grid_item_right_item_title}>
                  {item?.question}
                </div>
                <div className={style.topics_grid_item_right_item_line}></div>
                <div className={style.topics_grid_item_right_item_answer}>
                  {item?.answer}
                </div>
              </div>
            ))}
            <Link
              href={selectedTopics?.url}
              className={style.topics_grid_item_right_link}
            >
              Show More <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedQuestions;
