import Image from "next/image";
import React, { useEffect } from "react";
import { getPostsBySlug } from "../../utils/helper";
import style from "./ReadBlog.module.scss";

function ReadBlog({ slug }: any) {
  const [blog, setBlog] = React.useState<any>(null);
  useEffect(() => {
    setBlog(getPostsBySlug(slug));
  }, [slug]);
  return (
    <div className={style.readBlog}>
      <div className={style.readBlog_container}>
        <div className={style.readBlog_container_header}>
          <div className={style.readBlog_container_header_title}>
            {blog?.title}
          </div>
          <div className={style.readBlog_container_title_date}>
            {new Date(blog?.date).toDateString()}
          </div>
        </div>
        {blog?.img_url && (
          <div className={style.readBlog_container_img_box}>
            <Image
              src={blog?.img_url}
              alt={blog?.slug}
              width={700}
              height={420}
              className={style.readBlog_container_img}
            />
          </div>
        )}
        <div className={style.readBlog_container_content}>{blog?.answer}</div>
      </div>
    </div>
  );
}

export default ReadBlog;
