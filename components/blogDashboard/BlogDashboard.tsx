import React, { useEffect } from "react";
import style from "./BlogDashboard.module.scss";
import { BLOG_TOPICS } from "../../utils/constant";
import dynamic from "next/dynamic";
import { client } from "../../utils/sanity";
const AllPost = dynamic(() => import("./allPost/AllPost"));
const NoPostFound = dynamic(() => import("./noPostFound/NoPostFound"));
const Loader = dynamic(() => import("../../common/loader/Loader"));
const TopicsList = dynamic(() => import("../../common/topicsList/TopicsList"));

function BlogDashboard({ blog_list }: any) {
  const [selectedTopic, setSelectedTopic] = React.useState<string>("All");
  const [allPosts, setAllPosts] = React.useState<any>(blog_list);
  const [localLoading, setLocalLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setLocalLoading(true);
    if (selectedTopic === "All") {
      setAllPosts(blog_list);
      setLocalLoading(false);
    } else {
      (async () => {
        const blog_list = await client.fetch(
          `*[_type == "blog" && $topic in categories[]]`,
          { topic: selectedTopic.toLowerCase() }
        );
        setAllPosts(blog_list);
        setLocalLoading(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTopic]);

  return (
    <div className={style.dashboard}>
      <TopicsList
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        title="Blog"
        description="Read the latest blog posts from LayoutLogic."
        topicList={BLOG_TOPICS}
      />
      <div className={style.dashboard_container}>
        {localLoading ? (
          <div className={style.loader}>
            <Loader />
          </div>
        ) : allPosts?.length > 0 ? (
          <AllPost allPosts={allPosts} selectedTopic={selectedTopic} />
        ) : (
          <NoPostFound />
        )}
      </div>
    </div>
  );
}

export default BlogDashboard;
