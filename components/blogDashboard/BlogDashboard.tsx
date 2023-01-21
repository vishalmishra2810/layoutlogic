import React, { useEffect } from "react";
import AllPost from "./allPost/AllPost";
import style from "./BlogDashboard.module.scss";
import NoPostFound from "./noPostFound/NoPostFound";
import { useSelector } from "react-redux";
import { getAllPosts, getPostsByTopic } from "../../utils/helper";
import TopicsList from "../../common/topicsList/TopicsList";
import { BLOG_TOPICS } from "../../utils/constant";

function BlogDashboard() {
  const [selectedTopic, setSelectedTopic] = React.useState<string>("All");
  const [allPosts, setAllPosts]: any = React.useState([]);
  const { value } = useSelector((state: any) => state.search);

  useEffect(() => {
    if (value.length === 0) {
      setAllPosts(getAllPosts());
    } else {
      setAllPosts(
        getAllPosts().filter((post: any) => {
          return post.title.toLowerCase().includes(value.toLowerCase());
        })
      );
    }
  }, [value]);
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
        {getPostsByTopic(allPosts, selectedTopic)?.length > 0 ? (
          <AllPost
            allPosts={getPostsByTopic(allPosts, selectedTopic)}
            selectedTopic={selectedTopic}
          />
        ) : (
          <NoPostFound />
        )}
      </div>
    </div>
  );
}

export default BlogDashboard;
