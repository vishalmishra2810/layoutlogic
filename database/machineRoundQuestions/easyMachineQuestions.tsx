import TabView from "../../common/tabView/TabView";
import {
  calculator_css,
  calculator_html,
  calculator_js,
  fetch_css,
  fetch_html,
  navigation_css,
  navigation_html,
  navigation_js,
} from "./constant";
import {
  drag_css,
  drag_html,
  drag_js,
  fetch_js,
  todo_css,
  todo_html,
  todo_js,
} from "./easyConstant";

export const EASY_MACHINE_QUESTIONS = [
  {
    question:
      "Write a program that implements a simple to-do list using HTML, CSS, and JavaScript. The program should allow the user to add ,remove and complete items from the list.",
    answer: (
      <>
        <p className="simple-answer">
          To-do list is a simple list of tasks that need to be completed. It is
          a common practice for software developers to keep a list of tasks that
          need to be completed.
          <br /> This helps them stay organized and focused on the current task
          at hand.
        </p>
        <p className="simple-answer">
          The program should allow the user to add and remove items from the
          list.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[todo_html, todo_css, todo_js]}
          result_url="https://user-images.githubusercontent.com/76992713/210720850-3cf179fa-0195-4fff-ab4b-0388d12b221f.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "simple_todo_list",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/210720850-3cf179fa-0195-4fff-ab4b-0388d12b221f.png",
  },
  {
    question:
      "Write a program that fetches data from a public API (Application Programming Interface) and displays it on a webpage.",
    answer: (
      <>
        <p className="simple-answer">
          An API is a set of programming instructions and standards for
          accessing a web-based software application or web tool. <br />
          APIs are used when programming graphical user interface (GUI)
          components. For example, an API might be used to create a button on a
          webpage that, when clicked, displays a message.
        </p>
        <p className="simple-answer">
          The program should fetch data from a public API and display it on a
          webpage.
        </p>
        <p className="simple-answer">
          There are so many approaches to fetch data from API. Some of them are
          using fetch(), axios, etc.
        </p>
        <p className="simple-answer">
          here is an example of fetching data from API using fetch() method.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[fetch_html, fetch_css, fetch_js]}
          result_url="https://user-images.githubusercontent.com/76992713/211240272-6f17f874-a057-4b57-93ee-02c4e1dea20c.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "fetch_data_from_api",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/211240272-6f17f874-a057-4b57-93ee-02c4e1dea20c.png",
  },
  {
    question:
      "Write a program that implements a responsive navigation bar that collapses into a hamburger menu on smaller screens.",
    answer: (
      <>
        <p className="simple-answer">
          A responsive navigation bar is a navigation bar that changes its
          appearance based on the size of the screen.
        </p>
        <p className="simple-answer">
          The navigation bar should collapse into a hamburger menu on smaller
          screens.
        </p>
        <p className="simple-answer">
          The hamburger menu is a button that displays a drop-down menu when
          clicked.
        </p>
        <p className="simple-answer">
          The hamburger menu is a common design pattern used in responsive
          websites.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[navigation_html, navigation_css, navigation_js]}
          result_url="https://user-images.githubusercontent.com/76992713/211240564-95726f7e-dcf1-4aa8-b3b7-f741c53d708b.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "responsive_navigation_bar",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/211240564-95726f7e-dcf1-4aa8-b3b7-f741c53d708b.png",
  },
  {
    question:
      "Write a program that implements a simple calculator, using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          The program should allow the user to add, subtract, multiply, and
          divide numbers.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[calculator_html, calculator_css, calculator_js]}
          result_url="https://user-images.githubusercontent.com/76992713/211240906-003e1f19-ad12-41a8-b984-2e6bd057b699.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "simple_calculator",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/211240906-003e1f19-ad12-41a8-b984-2e6bd057b699.png",
  },
  {
    question:
      "How to add Drag and Drop functionality to a webpage using HTML, CSS, and JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          Drag and drop is a common design pattern used in web applications.
        </p>
        <p className="simple-answer">
          The program should allow the user to drag and drop items from one
          location to another.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[drag_html, drag_css, drag_js]}
          result_url="https://user-images.githubusercontent.com/76992713/212529057-f5c392ac-b4ce-4700-b315-50d980b9f678.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "drag_and_drop",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/212529057-f5c392ac-b4ce-4700-b315-50d980b9f678.png",
  },
];
