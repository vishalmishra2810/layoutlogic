import dynamic from "next/dynamic";
import Head from "next/head";
import Dashboard from "../components/dashboard/Dashboard";
import Header from "../components/header/Header";
const Footer = dynamic(() => import("../components/footer/Footer"));

export default function Home() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
var userId = your_user_id || null; // Replace your_user_id with your own if available.
window.hj('identify', userId, {
    // Add your own custom attributes here. Some EXAMPLES:
    // 'Signed up': '2019—06-20Z', // Signup date in ISO-8601 format.
    // 'Last purchase category': 'Electronics', // Send strings with quotes around them.
    // 'Total purchases': 15, // Send numbers without quotes.
    // 'Last purchase date': '2019-06-20Z', // Send dates in ISO-8601 format.
    // 'Last refund date': null, // Send null when no value exists for a user.
});
            `,
          }}
        />
        <title>
          Become a Front End Developer at Product Based Company or Best Startup
        </title>
        <meta
          name="description"
          content="
         Practice and Prepare for FrontEnd Machine Coding Round, Data Structure, Algorithm, 
         ReactJS, JavaScript, HTML, CSS, Redux, SCSS and add Advance FrontEnd Snippet to make your Project Standout.
        "
        />
        <meta
          name="keywords"
          content="
         jobs,interview,preparation,frontend machine coding,practice,problem solving,data structures,algorithms,flipkart,uber,google,amazon,microsoft,swiggy,salary,sde 1,sde 2,software engineer,software developer,frontend,reactjs,javascript,html,css,redux,scss,advance frontend snippet,project,advance project,standout project
        "
        />
        <meta
          name="og:title"
          content="Become a Front End Developer at Product Based Company or Best Startup"
        />
        <meta
          name="og:description"
          content="
          Practice and Prepare for FrontEnd Machine Coding Round, Problem Solving , Data Structure, Algorithm,
          ReactJS, JavaScript, HTML, CSS, Redux, SCSS and add Advance FrontEnd Snippet to make your Project Standout.
        "
        />
        <meta
          name="og:image"
          content="https://www.layoutlogic.com/layoutlogic.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Sumit Kumar Singh" />
        <link rel="icon" href="/layoutlogic.jpg" />
      </Head>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}
