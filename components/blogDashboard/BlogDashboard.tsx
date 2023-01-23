import React, { useEffect } from "react";
import AllPost from "./allPost/AllPost";
import style from "./BlogDashboard.module.scss";
import NoPostFound from "./noPostFound/NoPostFound";
import { getAllPosts, getPostsByTopic } from "../../utils/helper";
import TopicsList from "../../common/topicsList/TopicsList";
import { BLOG_TOPICS } from "../../utils/constant";
import Loader from "../../common/loader/Loader";

function BlogDashboard() {
  const [selectedTopic, setSelectedTopic] = React.useState<string>("All");
  const [allPosts, setAllPosts] = React.useState<any>([]);
  const [localLoading, setLocalLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setLocalLoading(true);
    if (selectedTopic === "All") {
      setAllPosts(getAllPosts());
      setLocalLoading(false);
    } else {
      setAllPosts(getPostsByTopic(selectedTopic));
      setLocalLoading(false);
    }
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
