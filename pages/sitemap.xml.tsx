import { getAllMachineRoundQuestions } from "../utils/helper";

function generateSiteMap(posts: any) {
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
     <url>
       <loc>https://www.layoutlogic.com</loc>
     </url>

     <url>
       <loc>https://www.layoutlogic.com/top-front-end-coding-questions</loc>
     </url>

      <url>
        <loc>https://www.layoutlogic.com/reactjs</loc>
      </url>

      <url>
        <loc>https://www.layoutlogic.com/html</loc>
      </url>

      <url>
        <loc>https://www.layoutlogic.com/css</loc>
      </url>

      <url>
        <loc>https://www.layoutlogic.com/javascript</loc>
      </url>

      <url>
        <loc>https://www.layoutlogic.com/scss</loc>
      </url>

      <url>
        <loc>https://www.layoutlogic.com/redux</loc>
      </url>

      <url>
        <loc>https://www.layoutlogic.com/front-end-machine-coding-round-questions</loc>
      </url>

     ${posts
       .map((slug: any) => {
         return `
       <url>
           <loc>${`https://www.layoutlogic.com/questions/${slug}`}</loc>
       </url>
       
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make to get all slugs from our data source
  const request = getAllMachineRoundQuestions().map((item: any) => item?.slug);
  //sending the slugs to the generateSiteMap function
  const sitemap = generateSiteMap(request);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
