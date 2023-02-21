import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/header/Header";
import ReadBlog from "../../components/readBlog/ReadBlog";
import { BLOG_SLUG_LIST } from "../../utils/constant";

export async function getStaticPaths() {
  const paths = BLOG_SLUG_LIST.map((item) => ({
    params: { blog: item.toLowerCase() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      url: params.blog,
    },
  };
}

function OpenBlog({ url }: any) {
  const router = useRouter();
  const { blog }: any = router.query;
  return (
    <>
      <Head>
        <title>{`Best Blog on FrontEnd Development related to ${url} | Layoutlogic`}</title>
        <meta
          name="description"
          content="
          Read the best blog on FrontEnd Development related to ${url} and use the same in your project to create a better user experience or to get a better job in the industry.
        "
        />
        <meta
          name="keywords"
          content="
          jobs, interview, preparation, practice, problem solving, data structures, algorithms, flipkart, uber, google, amazon, microsoft, swiggy, salary, sde 1, sde 2, software engineer, software developer, frontend, reactjs, javascript, html, css, redux, scss, advance frontend snippet, project, advance project, standout project, blog, best blog,
           read blog
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <Header />
      <ReadBlog slug={blog} />
    </>
  );
}

export default OpenBlog;
