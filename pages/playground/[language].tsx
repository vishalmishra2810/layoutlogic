import Head from "next/head";
import React from "react";
import MinimalHeader from "../../components/blogDashboard/minimalHeader/MinimalHeader";
import { ALL_COMPILER } from "../../components/showPlayGround/allCompiler/constant";
import ShowPlayGround from "../../components/showPlayGround/ShowPlayGround";

export async function getStaticPaths() {
  const paths = ALL_COMPILER.map((item) => ({
    params: { language: item?.value?.toLowerCase() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      url: params.language,
    },
  };
}

export default function PlayGround({ url }: any) {
  return (
    <>
      <Head>
        <title>
          {`Online ${url} Compiler (Editor) for practice and learning | LayoutLogic`}
        </title>
        <meta
          name="description"
          content={`Best Online ${url} Compiler (Editor) with multiple themes , multiple font size and multiple language support for practice and learning.
          `}
        />
        <meta
          name="keywords"
          content="
          code, compiler, editor, practice, learning, javascript, html, css, reactjs, redux, scss, advance frontend snippet, project, advance project, standout project
         "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <MinimalHeader />
      <ShowPlayGround language={url} />
    </>
  );
}
