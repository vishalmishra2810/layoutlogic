import { IPostProps, TOPIC_LIST } from "utils/constant";

export const JS_POST: IPostProps[] = [
  {
    topic: [TOPIC_LIST.JAVASCRIPT],
    title: "Top 10 JavaScript Concepts You Must Know!",
    description:
      "If you are a beginner or intermediate JavaScript developer, you must know these concepts to become a better developer.",
    img_url:
      "https://user-images.githubusercontent.com/76992713/213096902-68f8a560-3cf1-4e3c-86f4-db3ca124b336.jpg",
    slug: "top-10-javascript-concepts-you-must-know",
    date: "2023-01-18",
    answer: (
      <>
        <ol className="answer_list">
          <li className="answer_list_item">
            <b>Asynchronous JavaScript</b>
            <p className="simple_answer">
              JavaScript is a single-threaded language. It means that it can
              only execute one task at a time. But, in real-world applications,
              we need to perform multiple tasks at the same time. For example,
              we need to fetch data from the server and update the UI at the
              same time. So, how can we perform multiple tasks at the same time?
              <br />
              <br />
              The answer is asynchronous JavaScript. Asynchronous JavaScript
              allows us to perform multiple tasks at the same time. It uses
              callbacks, promises, and async/await to perform multiple tasks at
              the same time.
            </p>
          </li>
          <li className="answer_list_item">
            <b> Closures </b>
            <p className="simple_answer">
              A closure is a function that has access to the parent scope, even
              after the parent function has closed. In JavaScript, closures are
              created every time a function is created, at function creation
              time.
            </p>
          </li>
          <li className="answer_list_item">
            <b> Hoisting </b>
            <p className="simple_answer">
              Hoisting is a JavaScript mechanism where variables and function
              declarations are moved to the top of their scope before code
              execution. Inevitably, this means that no matter where functions
              and variables are declared, they are moved to the top of their
              scope regardless of whether their scope is global or local.
            </p>
          </li>
          <li className="answer_list_item">
            <b> Event Loop </b>
            <p className="simple_answer">
              The event loop is a programming construct or design pattern that
              waits for and dispatches events or messages in a program. It
              functions as a loop that waits for an event to occur. When the
              event occurs, the program resumes and can continue its process.
            </p>
          </li>
          <li className="answer_list_item">
            <b>Prototypal Inheritance</b>
            <p className="simple_answer">
              Prototypal inheritance is a way of implementing inheritance in
              JavaScript. It is a mechanism that allows objects to inherit
              features from other objects. It is based on prototypal
              inheritance, which is a dynamic mechanism that allows objects to
              inherit directly from other objects.
            </p>
          </li>
          <li className="answer_list_item">
            <b>Scope</b>
            <p className="simple_answer">
              Scope determines the accessibility (visibility) of variables.
              JavaScript has function scope: Each function creates a new scope.
              Variables defined inside a function are not accessible (visible)
              from outside the function.
            </p>
          </li>
          <li className="answer_list_item">
            <b>Execution Context</b>
            <p className="simple_answer">
              The execution context is an abstract concept of an environment
              where the JavaScript code is evaluated and executed. Whenever any
              code is run in JavaScript, it’s run inside an execution context.
              <br />
              <br />
              There are two types of execution contexts in JavaScript:
              <br />
              <b>Global Execution Context</b>
              <p className="answer_list_item">
                Code that is not inside any function. This code is automatically
                in the global scope and belongs to the global execution context.
              </p>
              <br />
              <b>Function Execution Context</b>
              <p className="answer_list_item">
                Code that is called inside a function. This code is
                automatically in the local scope and belongs to the local
                execution context.
              </p>
            </p>
          </li>
          <li className="answer_list_item">
            <b>Call Stack</b>
            <p className="simple_answer">
              The call stack is a data structure that uses the Last In, First
              Out (LIFO) principle to temporarily store and manage function
              invocation (call).
            </p>
          </li>
          <li className="answer_list_item">
            <b>Callbacks</b>
            <p className="simple_answer">
              A callback function is a function passed into another function as
              an argument, which is then invoked inside the outer function to
              complete some kind of routine or action.
            </p>
          </li>
          <li className="answer_list_item">
            <b>Promises</b>
            <p className="simple_answer">
              A promise is an object that may produce a single value some time
              in the future: either a resolved value, or a reason that it’s not
              resolved (e.g., a network error occurred). A promise may be in one
              of 3 possible states: fulfilled, rejected, or pending. Promise
              users can attach callbacks to handle the fulfilled value or the
              reason for rejection.
            </p>
          </li>
        </ol>
      </>
    ),
  },
];
