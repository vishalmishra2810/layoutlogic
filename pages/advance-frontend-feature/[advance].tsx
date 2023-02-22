import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ShowAdvanceFrontEnd from "../../components/showAdvanceFrontEnd/ShowAdvanceFrontEnd";
import { ALL_PATH_ADVANCE_FRONTEND } from "../../utils/constant";

export async function getStaticPaths() {
  const paths = ALL_PATH_ADVANCE_FRONTEND.map((item) => ({
    params: { advance: item.toLowerCase() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      url: params.advance,
    },
  };
}

function AdvanceFrontEnd({ url }: any) {
  const router = useRouter();
  const { advance } = router.query;
  return (
    <>
      <Head>
        <title>{`Advance Snippet for project on FrontEnd ${url} | Layoutlogic`}</title>
        <meta
          name="description"
          content={`
          Read and use the advance snippet for project on FrontEnd ${url} and use the same in your project to create a better user experience or to get a better job in the industry.
        `}
        />
        <meta
          name="keywords"
          content="
          jobs, interview, preparation, practice, problem solving, data structures, algorithms, flipkart, uber, google, amazon, microsoft, swiggy, salary, sde 1, sde 2, software engineer, software developer, frontend, reactjs, javascript, html, css, redux, scss, advance frontend snippet, project, advance project, standout project, blog, best blog,
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <ShowAdvanceFrontEnd slug={advance} />
    </>
  );
}

export default AdvanceFrontEnd;
