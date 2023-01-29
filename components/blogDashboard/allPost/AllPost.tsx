import React from "react";
import Modal from "../../../common/blogModal/Modal";
import style from "./AllPost.module.scss";

function AllPost({ allPosts, selectedTopic }: any) {
  return (
    <div className={style.allPost}>
      <div className={style.allPost_posts}>
        {allPosts?.map((post: any, index: number) => (
          <Modal
            key={index}
            description={post?.meta_description}
            title={post?.name}
            url={post?.mainImage}
            width={post?.width}
            height={post?.height}
            slug={post?.slug?.current}
          />
        ))}
      </div>
    </div>
  );
}

export default AllPost;
