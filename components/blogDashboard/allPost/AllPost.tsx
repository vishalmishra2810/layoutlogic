import React from "react";
import Modal from "../../../common/blogModal/Modal";
import style from "./AllPost.module.scss";

function AllPost({ allPosts, selectedTopic }: any) {
  return (
    <div className={style.allPost}>
      <div className={style.allPost_header}>#{selectedTopic} Posts</div>
      <div className={style.allPost_posts}>
        {allPosts?.map((post: any, index: number) => (
          <Modal
            key={index}
            description={post?.description}
            title={post?.title}
            url={post?.img_url}
            width={post?.width}
            height={post?.height}
            slug={post?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default AllPost;
