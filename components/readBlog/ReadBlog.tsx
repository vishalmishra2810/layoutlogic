import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import { client } from "../../utils/sanity";
import style from "./ReadBlog.module.scss";
const BlockContent = require("@sanity/block-content-to-react");

function ReadBlog({ blog }: any) {
  const imageProps: any = useNextSanityImage(client, blog?.mainImage);
  const serializers = {
    types: {
      code: (props: any) => (
        <CodeSnippet
          codeString={props.node.code}
          language={props.node.language}
        />
      ),
    },
  };
  return (
    <div className={style.readBlog}>
      <div className={style.readBlog_container}>
        <div className={style.readBlog_container_header}>
          <div className={style.readBlog_container_header_title}>
            {blog?.name}
          </div>
          <div className={style.readBlog_container_title_date}>
            {new Date(blog?.publishedAt).toDateString()}
          </div>
        </div>
        <div className={style.readBlog_container_img_box}>
          <Image
            {...imageProps}
            alt={blog?.slug}
            width={700}
            height={420}
            className={style.readBlog_container_img}
          />
        </div>
        <div className={style.readBlog_container_content}>
          <BlockContent blocks={blog?.answer} serializers={serializers} />
        </div>
      </div>
    </div>
  );
}

export default ReadBlog;
