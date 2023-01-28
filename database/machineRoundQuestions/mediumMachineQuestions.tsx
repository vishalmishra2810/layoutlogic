import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import TabView from "../../common/tabView/TabView";
import {
  carousel_css,
  carousel_html,
  carousel_js,
  comment_box_css,
  comment_box_html,
  comment_box_js,
  lazy_load_css,
  lazy_load_html,
  lazy_load_js,
  rating_css,
  rating_html,
  rating_js,
} from "./constant";

export const MEDIUM_MACHINE_QUESTIONS = [
  {
    question:
      "Write a program that implements a simple image carousel using HTML, CSS, and JavaScript.?",
    answer: (
      <>
        <p className="simple-answer">
          An image carousel is a slideshow for cycling through a series of
          images, which works like a slideshow.
        </p>
        <p className="simple-answer">
          The carousel should display a single image at a time.
        </p>
        <p className="simple-answer">
          The carousel should have a button to go to the next image.
        </p>
        <p className="simple-answer">
          The carousel should have a button to go to the previous image.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[carousel_html, carousel_css, carousel_js]}
          result_url="https://user-images.githubusercontent.com/76992713/215261310-fbe89f15-9f9b-4a75-9eeb-eb42f48429cc.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "image_carousel",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215261310-fbe89f15-9f9b-4a75-9eeb-eb42f48429cc.png",
  },
  {
    question:
      "Write a program that lazy load images using JavaScript. The program should load images as the user scrolls down the page.",
    answer: (
      <>
        <p className="simple-answer">
          Lazy loading is a technique that defers loading of non-critical
          resources at page load time.
        </p>
        <p className="simple-answer">
          The technique allows you to improve the page load speed and reduce
          bandwidth consumption.
        </p>
        <p className="simple-answer">
          The program should load images as the user scrolls down the page.
        </p>
        <p className="simple-answer">
          To lazy load images using JavaScript, you can use the
          IntersectionObserver API. Here's an example of how you can use it:
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[lazy_load_html, lazy_load_css, lazy_load_js]}
          result_url="https://user-images.githubusercontent.com/76992713/211284772-bfd8d4a1-c278-4d41-9675-14aeb86ee7e0.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "lazy_load_images",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/211284772-bfd8d4a1-c278-4d41-9675-14aeb86ee7e0.png",
  },
  {
    question:
      "Write a program that user can put nested comments in a comment box using HTML, CSS, and JavaScript.?",
    answer: (
      <>
        <p className="simple-answer">
          A comment box is a web application that allows users to post comments.
        </p>
        <p className="simple-answer">
          The comment box should have a text area to enter the comment.
        </p>
        <p className="simple-answer">
          The comment box should have a button to post the comment.
        </p>
        <p className="simple-answer">
          The comment box should have a button to reply to the comment.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[comment_box_html, comment_box_css, comment_box_js]}
          result_url="https://user-images.githubusercontent.com/76992713/215261484-1592b945-3029-48ce-804f-0adccb3df1fa.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "nested_comments",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215261484-1592b945-3029-48ce-804f-0adccb3df1fa.png",
  },
  {
    question: "Rating system using HTML, CSS, and JavaScript.?",
    answer: (
      <>
        <p className="simple-answer">
          A rating system is a web application that allows users to rate a
          product or service.
        </p>
        <p className="simple-answer">
          The rating system should have a star rating system.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[rating_html, rating_css, rating_js]}
          result_url="https://user-images.githubusercontent.com/76992713/214910462-978f5f3c-6c47-4304-bec7-afe3e54f178a.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "rating_system",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214910462-978f5f3c-6c47-4304-bec7-afe3e54f178a.png",
  },
];
