import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  binary_search_example,
  event_delegation_example,
  generator_example,
  higher_order_function_example,
  integrate_third_party_api_example,
  lodash_deep_copy_example,
  memoization_example,
  private_variables_example,
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
        <CodeSnippet codeString={generator_example} language="javascript" />
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
        <br />
        <p className="simple_answers">
          You can also implement a search algorithm, such as binary search, in
          JavaScript by using the includes method, the some method, or the every
          method.
        </p>
        <CodeSnippet codeString={binary_search_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is event delegation in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          Event delegation is a technique in which you add an event listener to
          a parent element instead of adding it to multiple child elements.
        </p>

        <p className="simple_answers">
          Event delegation is useful because it allows you to avoid adding event
          listeners to specific nodes; therefore, it improves performance.
        </p>

        <p className="simple_answers">
          Event delegation is also useful because it allows you to attach a
          single event listener, to a parent element, that will fire for all
          descendants matching a selector, whether those descendants exist now
          or are added in the future.
        </p>
        <CodeSnippet codeString={event_delegation_example} language="html" />
        <p className="simple_answers">
          In this example, we have attached a single click event listener to the
          parent `ul` element. When any of the `li` elements are clicked, the
          event listener will be triggered and we can check the event.target
          property to see which element was actually clicked. This allows us to
          handle the click event for all of the `li` elements without having to
          attach a separate event listener to each one.
        </p>
      </>
    ),
  },
  {
    question: "How do you perform deep copying of objects in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can perform deep copying of objects in JavaScript by using the
          JSON.parse and JSON.stringify methods.
        </p>

        <p className="simple_answers">
          You can also perform deep copying of objects in JavaScript by using
          the lodash library.
        </p>
        <CodeSnippet
          codeString={lodash_deep_copy_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "How do you create private variables in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can create private variables in JavaScript by using closures.
        </p>
        <CodeSnippet
          codeString={private_variables_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you optimize an algorithm for time and space complexity in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can optimize an algorithm for time complexity in JavaScript by
          using memoization.
        </p>
        <CodeSnippet codeString={memoization_example} language="javascript" />
      </>
    ),
  },
];
