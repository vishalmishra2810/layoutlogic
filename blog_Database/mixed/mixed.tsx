import ListShow from "../../common/listShow/ListShow";
import { IPostProps, TOPIC_LIST } from "../../utils/constant";

export const Mixed_POST: IPostProps[] = [
  {
    topic: [TOPIC_LIST.MIXED],
    title: "Search engine optimization (SEO)",
    description:
      "Search engine optimization (SEO) is the process of increasing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine.",
    img_url:
      "https://user-images.githubusercontent.com/76992713/213144973-c5d985b1-a065-4190-b940-5aa476c1e2fb.png",
    slug: "search-engine-optimization-seo",
    date: "2023-01-18",
    answer: (
      <>
        <p className="simple_answer">
          <b> Search engine optimization (SEO)</b> is the process of increasing
          the quality and quantity of website traffic by increasing the
          visibility of a website or a web page to users of a web search engine.
          SEO refers to the improvement of unpaid results and excludes direct
          traffic/visitors and the purchase of paid placement.
        </p>
        <br />
        <p className="simple_answer">
          As an Internet marketing strategy, SEO considers how search engines
          work, what people search for, the actual search terms or keywords
          typed into search engines and which search engines are preferred by
          their targeted audience. <br />
          <br />
          <br />
        </p>
        <p className="simple_answer">
          There are many different ways to optimize a website so that it can be
          found by search engines. Some of the most common ways are:
          <br />
        </p>
        <ol className="answer_list">
          <li className="answer_list_item">
            <b>Keyword Research</b>
            <p className="simple_answer">
              Keyword research is the process of finding and analyzing actual
              search terms that people enter into search engines. It is one of
              the most important steps in SEO.
              <br /> It is important to understand the difference between
              `keyword research ` and `keyword selection`.
              <br /> Keyword research is the process of finding and analyzing
              actual search terms that people enter into search engines. Keyword
              selection is the process of choosing the best keywords to target
              for your website.
            </p>
          </li>
          <li className="answer_list_item">
            <b>On-Page SEO</b>
            <p className="simple_answer">
              On-page SEO is the practice of optimizing individual web pages in
              order to rank higher and earn more relevant traffic in search
              engines.
            </p>
            <br />
            <p className="simple_answer">
              On-page SEO includes optimizing the content on your web pages,
              HTML source code, and more.
            </p>
          </li>
          <li className="answer_list_item">
            <b>Off-Page SEO</b>
            <p className="simple_answer">
              Off-page SEO is the process of optimizing your website to rank
              higher in search engines by building backlinks to your website.
            </p>
            <br />
            <p className="simple_answer">
              Backlinks are links from other websites to your website. They are
              one of the most important factors in search engine ranking.
            </p>
          </li>
          <li className="answer_list_item">
            <b>Technical SEO</b>
            <p className="simple_answer">
              Technical SEO is the practice of optimizing a website to improve
              its technical performance and user experience.
            </p>
            <p className="simple_answer">
              We can also say that technical SEO is the process of optimizing
              your website to rank higher in search engines by improving the
              technical performance of your website.
            </p>
            <br />
            <p className="simple_answer">
              Technical SEO includes optimizing the following:
              <br />
              <br />
              <ListShow
                list={[
                  "Website Speed",
                  "Mobile Friendliness",
                  "Site Architecture",
                  "Site Structure",
                  "Site Navigation",
                  "Site Indexing",
                  "Site Security",
                  "Site Performance",
                  "Site Accessibility",
                  "Site Usability",
                  "Site Crawlability",
                  "Site Load Time",
                  "Site Responsiveness",
                  "Site Errors",
                ]}
                typeOfList="ol"
              />
            </p>
          </li>
        </ol>
      </>
    ),
  },
];
