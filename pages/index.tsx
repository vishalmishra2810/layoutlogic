import Head from "next/head";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>ClearJobs</title>
        <meta
          name="description"
          content="Best website to prepare for interviews and get a job"
        />
        <meta
          name="keywords"
          content="React, Next.js, TypeScript, HTML, CSS, JavaScript, Interview, Job, Preparation , ClearJobs , ClearJobs.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/clearjobs.png" />
      </Head>
      <Dashboard />
    </>
  );
}
