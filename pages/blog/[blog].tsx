import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ReadBlog from "../../components/readBlog/ReadBlog";
import { BLOG_SLUG_LIST, META_TAGS } from "../../utils/constant";
import { client } from "../../utils/sanity";

//getStaticPaths is used to generate the paths for the dynamic routes
export async function getStaticPaths() {
  const paths = BLOG_SLUG_LIST.map((blog: any) => ({
    params: { blog: blog },
  }));
  return { paths, fallback: false };
}

//getStaticProps is used to fetch the data for the dynamic routes
export async function getStaticProps({ params }: any) {
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]`,
    { slug: params.blog }
  );
  return {
    props: {
      blog,
    },
  };
}

function OpenBlog({ blog }: any) {
  return (
    <>
      <Head>
        <title>LayoutLogic</title>
        <meta name="description" content={META_TAGS.DESCRIPTION} />
        <meta name="keywords" content={META_TAGS.KEYWORDS} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <ReadBlog blog={blog} />
    </>
  );
}

export default OpenBlog;
