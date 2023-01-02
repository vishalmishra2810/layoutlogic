import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  binary_search_example,
  generator_example,
  higher_order_function_example,
  integrate_third_party_api_example,
  proxy_example,
  set_example,
} from "./constant";

export const HARD_JAVASCRIPT = [
  {
    question:
      "How do you create and use a higher-order function in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          A higher-order function is a function that takes a function as an
          argument, or returns a function. <br />
          You can create a higher-order function using the function keyword.
          <br /> You can also create a higher-order function using the arrow
          function syntax.
        </p>
        <br />
        <CodeSnippet
          codeString={higher_order_function_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you optimize the performance of a JavaScript application?",
    answer: (
      <>
        <p className="simple_answers">
          You can optimize the performance of a JavaScript application by
          minimizing the number of HTTP requests, minimizing the amount of
          JavaScript, and minimizing the use of CSS expressions.
        </p>
        <br />
        <p className="simple_answers">
          You can also optimize the performance of a JavaScript application by
          using a content delivery network, or CDN.
        </p>
        <br />
        <p className="simple_answers">
          You can also optimize the performance of a JavaScript application by
          reducing the DOM access.
        </p>
        <br />
        <p className="simple_answers">
          You can also optimize the performance of a JavaScript application by
          avoiding global variables.
        </p>
        <br />
        <p className="simple_answers">
          You can also optimize the performance of a JavaScript application by
          minifying JavaScript and CSS.
        </p>
        <br />
      </>
    ),
  },
  {
    question: "How do you create and use a generator in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          A generator is a function that can stop midway and then continue from
          where it stopped. You can create a generator using the function
          keyword. <br /> You can also create a generator using the arrow
          function syntax.
        </p>
        <br />
        <CodeSnippet codeString={generator_example} language="javascript" />
      </>
    ),
  },
  {
    question: "How do you create and use a proxy in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          A proxy is an object that controls access to another object. You can
          create a proxy using the Proxy constructor.
        </p>
        <br />
        <CodeSnippet codeString={proxy_example} language="javascript" />
      </>
    ),
  },
  {
    question: "How do you create and use a set in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          A set is an object that stores unique values of any type. You can
          create a set using the Set constructor.
        </p>
        <br />
        <CodeSnippet codeString={set_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "How do you integrate a third-party API into a JavaScript application?",
    answer: (
      <>
        <p className="simple_answers">
          You can integrate a third-party API into a JavaScript application by
          using the fetch API, the XMLHttpRequest object, or the jQuery library.
        </p>
        <br />
        <CodeSnippet
          codeString={integrate_third_party_api_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you implement a search algorithm, such as binary search, in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can implement a search algorithm, such as binary search, in
          JavaScript by using the indexOf method, the findIndex method, or the
          find method.
        </p>
        <br/>
        <p className="simple_answers">
          You can also implement a search algorithm, such as binary search, in
          JavaScript by using the includes method, the some method, or the
          every method.
        </p>
        <br/>
        <CodeSnippet codeString={binary_search_example} language="javascript" />
      </>
    ),
  },
];
