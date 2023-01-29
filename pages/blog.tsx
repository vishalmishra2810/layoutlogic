import Head from "next/head";
import BlogDashboard from "../components/blogDashboard/BlogDashboard";
import { META_TAGS } from "../utils/constant";
import { client } from "../utils/sanity";

export async function getStaticProps() {
  const blog_list = await client.fetch(`*[_type == "blog"]`);
  return {
    props: {
      blog_list,
    },
  };
}

export default function Home({ blog_list }: any) {
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
      <BlogDashboard blog_list={blog_list} />
    </>
  );
}
