import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import {
  async_await_example,
  callback_example,
  call_apply_bind_example,
  closure_example,
  debouncing_example,
  doble_triple_example,
  dom_example,
  event_example,
  exception_example,
  fetch_example,
  for_forin_forof_example,
  function_declaration_expression_example,
  map_filter_reduce_example,
  object_example,
  promise_example,
  prototype_inheritance_chaingin_example,
  shallow_deep_copying_example,
  strict_mode_example,
  throttling_example,
} from "./constant";

export const MEDIUM_JAVASCRIPT = [
  {
    question: "What is an object in JavaScript, and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          An object is a collection of properties, and a property is an
          association between a name (or key) and a value.
          <br />
          <br />A property's value can be a function, in which case the property
          is known as a method. <br /> You can create an object using the object
          literal syntax or the Object constructor.
        </p>
        <CodeSnippet codeString={object_example} language="javascript" />
      </>
    ),
  },
  {
    question: "How do you create and use a callback function in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          A callback function is a function passed into another function as an
          argument, which is then invoked inside the outer function to complete
          some kind of routine or action.
          <br />
          <br /> You can create a callback function using the function keyword.
          You can also create a callback function using the arrow function
          syntax.
        </p>
        <CodeSnippet codeString={callback_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is a closure in JavaScript, and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          A closure is a function having access to the parent scope, even after
          the parent function has closed. <br />
          You can create a closure by nesting a function inside another
          function.
        </p>
        <CodeSnippet codeString={closure_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is a promise in JavaScript, and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          A promise is an object that may produce a single value some time in
          the future: either a resolved value, or a reason that it's not
          resolved (e.g., a network error occurred). <br />
          You can create a promise using the Promise constructor.
        </p>
        <CodeSnippet codeString={promise_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "How do you handle events in JavaScript, such as clicks or form submissions?",
    answer: (
      <>
        <p className="simple_answers">
          You can handle events in JavaScript using event listeners.
          <br /> An event listener is a procedure or function in a computer
          program that waits for an event to occur. <br /> You can create an
          event listener using the addEventListener method.
        </p>
        <CodeSnippet codeString={event_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "How do you make an HTTP request using the fetch API in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          The fetch API provides a JavaScript interface for accessing and
          manipulating parts of the HTTP pipeline, such as requests and
          responses.
          <br />
          <br /> You can make an HTTP request using the fetch API by calling the
          fetch method.
        </p>
        <CodeSnippet codeString={fetch_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "What is the difference between the var, let, and const keywords in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          these are the following differences between the var, let, and const
          keywords in JavaScript:
        </p>
        <MakeDifferentiate
          totalColumn={3}
          headerData={["var", "let", "const"]}
          columnDataLength={3}
          columnData={{
            0: [
              "var is function scoped",
              "var is hoisted",
              "var can be redeclared",
              "var can be updated",
            ],
            1: [
              "let is block scoped",
              "let is not hoisted",
              "let cannot be redeclared",
              "let can be updated",
            ],
            2: [
              "const is block scoped",
              "const is not hoisted",
              "const cannot be redeclared",
              "const cannot be updated",
            ],
          }}
        />
      </>
    ),
  },
  {
    question:
      "What is the difference between the == and === operators in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          The == operator compares two values for equality after converting both
          values to a common type. The === operator compares two values for
          equality without converting the values.
        </p>
        <CodeSnippet codeString={doble_triple_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "What is the difference between the null and undefined values in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          these are the following differences between the null and undefined
          values in JavaScript:
        </p>
        <MakeDifferentiate
          totalColumn={2}
          headerData={["null", "undefined"]}
          columnDataLength={2}
          columnData={{
            0: ["null is an assignment value", "null is an object"],
            1: ["undefined is a variable value", "undefined is a primitive"],
          }}
        />
      </>
    ),
  },
  {
    question:
      "What is the difference between the map, filter, and reduce methods in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          these are the following differences between the map, filter, and
          reduce methods in JavaScript:
        </p>
        <MakeDifferentiate
          totalColumn={3}
          headerData={["map", "filter", "reduce"]}
          columnDataLength={3}
          columnData={{
            0: [
              "map creates a new array",
              "map does not mutate the original array",
              "map returns the same number of items as the original array",
            ],
            1: [
              "filter creates a new array",
              "filter does not mutate the original array",
              "filter returns fewer items than the original array",
            ],
            2: [
              "reduce creates a single value",
              "reduce does not mutate the original array",
              "reduce returns a single value",
            ],
          }}
        />
        <CodeSnippet
          codeString={map_filter_reduce_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "What is the difference between the call, apply, and bind methods in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          these are the following differences between the call, apply, and bind
          methods in JavaScript:
        </p>
        <MakeDifferentiate
          totalColumn={3}
          headerData={["call", "apply", "bind"]}
          columnDataLength={2}
          columnData={{
            0: [
              "call invokes the function immediately",
              "call invokes the function immediately",
              "call accepts an argument list",
            ],
            1: [
              "apply invokes the function immediately",
              "apply invokes the function immediately",
              "apply accepts a single array of arguments",
            ],
            2: [
              "bind returns a new function",
              "bind does not invoke the function immediately",
              "bind accepts an argument list",
            ],
          }}
        />
        <CodeSnippet
          codeString={call_apply_bind_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "What is the difference between the for, for...in, and for...of loops in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          these are the following differences between the for, for...in, and
          for...of loops in JavaScript:
        </p>
        <MakeDifferentiate
          totalColumn={3}
          headerData={["for", "for...in", "for...of"]}
          columnDataLength={2}
          columnData={{
            0: [
              "for is used to iterate over arrays",
              "for is used to iterate over objects",
            ],
            1: [
              "for...in is used to iterate over arrays",
              "for...in is used to iterate over objects",
            ],
            2: [
              "for...of is used to iterate over arrays",
              "for...of is used to iterate over objects",
            ],
          }}
        />
        <CodeSnippet
          codeString={for_forin_forof_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you manipulate the DOM (Document Object Model) using JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can manipulate the DOM using JavaScript by using the document
          object.
          <br /> The document object is a global object that represents the HTML
          document. <br />
          You can use the document object to access the DOM tree and manipulate
          it.
        </p>
        <CodeSnippet codeString={dom_example} language="javascript" />
      </>
    ),
  },
  {
    question: "How does prototypal inheritance work in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          Prototypal inheritance is a way of implementing inheritance in
          JavaScript. <br />
          It is based on the concept of prototypes. <br />
          It is an alternative to classical inheritance, which is implemented in
          many object-oriented programming languages
        </p>
        <CodeSnippet
          codeString={prototype_inheritance_chaingin_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "How do you handle exceptions in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can handle exceptions using the try...catch statement.
          <br />
          The try...catch statement allows you to define a block of code to be
          tested for errors while it is being executed.
          <br />
          The try...catch statement has two main parts: the try block and the
          catch block.
          <br />
          The try block contains the code that you want to test for errors.
          <br />
          The catch block contains the code that you want to run if an error
          occurs in the try block.
        </p>
        <CodeSnippet codeString={exception_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "What is difference between a function declaration and a function expression in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between a function declaration and a function
          expression is the function name, which can be omitted in function
          expressions to create anonymous functions.
          <br />
          Function declarations are hoisted and can be called before they are
          defined.
          <br />
          Function expressions are not hoisted and cannot be called before they
          are defined.
        </p>
        <CodeSnippet
          codeString={function_declaration_expression_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "What is the difference between shallow and deep copying in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between shallow and deep copying is that shallow
          copying creates a new object that stores references to the original
          object’s properties, while deep copying creates a new object and
          copies the original object’s properties.
          <br />
          Shallow copying is faster than deep copying.
          <br />
          Deep copying is preferred over shallow copying when you want to make
          sure that changes to a copied object don’t affect the original object.
        </p>
        <CodeSnippet
          codeString={shallow_deep_copying_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "How do you implement debouncing in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can implement debouncing in JavaScript by using the setTimeout()
          function.
          <br />
          The setTimeout() function is used to delay the execution of a function
          for a specified number of milliseconds.
          <br />
          The setTimeout() function is called at the beginning of the debounced
          function.
          <br />
          The setTimeout() function is called with the delay time as the first
          argument and the debounced function as the second argument.
          <br />
          The setTimeout() function returns a timer ID.
          <br />
          The timer ID is stored in a variable.
          <br />
          If the setTimeout() function is called again before the delay time has
          passed, the timer ID is cleared.
        </p>
        <CodeSnippet codeString={debouncing_example} language="javascript" />
      </>
    ),
  },
  {
    question: "How do you implement throttling in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can implement throttling in JavaScript by using the setTimeout()
          function.
          <br />
          The setTimeout() function is used to delay the execution of a function
          for a specified number of milliseconds.
          <br />
          The setTimeout() function is called at the beginning of the throttled
          function.
          <br />
          The setTimeout() function is called with the delay time as the first
          argument and the throttled function as the second argument.
          <br />
          The setTimeout() function returns a timer ID.
          <br />
          The timer ID is stored in a variable.
          <br />
          If the setTimeout() function is called again before the delay time has
          passed, the timer ID is cleared.
        </p>
        <CodeSnippet codeString={throttling_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "What is the difference between a promise and a callback in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between a promise and a callback is that a promise
          can be resolved or rejected only once, while a callback can be called
          multiple times.
          <br />
          A promise is an object that represents the eventual completion or
          failure of an asynchronous operation.
          <br />
          A promise can be in one of three states: pending, fulfilled, or
          rejected.
          <br />
          A callback is a function passed as an argument to another function.
          <br />A callback is executed after another function has finished.
        </p>
      </>
    ),
  },
  {
    question:
      "How do you handle asynchronous code using async/await in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          You can handle asynchronous code using async/await in JavaScript by
          using the async and await keywords.
          <br />
          The async keyword is used to define an asynchronous function.
          <br />
          The await keyword is used to wait for a Promise.
          <br />
          The await keyword can only be used inside an asynchronous function.
        </p>
        <CodeSnippet codeString={async_await_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "What is `strict mode` in JavaScript, and what are the advantages of using it?",
    answer: (
      <>
        <p className="simple_answers">
          Strict mode is a new feature in ECMAScript 5 that allows you to place
          a program, or a function, in a “strict” operating context.
        </p>
        <br />
        <p className="simple_answers">
          This strict context prevents certain actions from being taken and
          throws more exceptions.
          <br />
          It is not a statement, but a literal expression, ignored by earlier
          versions of JavaScript.
          <br />
          The purpose of “use strict” is to indicate that the code should be
          executed in “strict mode”.
        </p>
        <br />
        <p className="simple_answers">
          With strict mode, you can not, for example, use undeclared variables.
          <br />
          Strict mode makes it easier to write “secure” JavaScript.
        </p>
        <CodeSnippet codeString={strict_mode_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is difference between Window and Document in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          The difference between Window and Document in JavaScript is that the
          Window object represents an open window in a browser and the Document
          object represents the HTML document loaded in a window.
        </p>
        <br />
        <p className="simple_answers">
          The Window object is the global object in JavaScript.
          <br />
          The Document object is the root node of the HTML document.
        </p>
        <br />
        <p className="simple_answers">
          Window is the global object which contains all the global variables,
          functions, location, history, etc.
          <br />
          Document come under the window object and it is the root node of the
          HTML document.
        </p>
      </>
    ),
  },
  {
    question:
      "What is difference between `Local Storage` and `Session Storage` in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          These are the differences between Local Storage and Session Storage in
          JavaScript:
        </p>
        <br />
        <MakeDifferentiate
          headerData={["Local Storage", "Session Storage"]}
          columnDataLength={2}
          totalColumn={2}
          columnData={{
            0: [
              "Local Storage is a permanent storage.",
              "Local Storage is not cleared when the browser is closed.",
            ],
            1: [
              "Session Storage is a temporary storage.",
              "Session Storage is cleared when the browser is closed.",
            ],
          }}
        />
      </>
    ),
  },
  {
    question:
      "What is cookie in JavaScript?, and what are the advantages of using it?",
    answer: (
      <>
        <p className="simple_answers">
          A cookie is a small piece of data that is stored on the user's
          computer by the web browser while browsing a website.
          <br />
          Cookies are mainly used for authentication, maintaining user sessions,
          and storing site preferences.
          <br />
          Cookies are small text files that are stored on your computer by
          websites that you visit.
          <br />
          Cookies are widely used to make websites work, or work more
          efficiently, as well as to provide information to the owners of the
          site.
        </p>
        <br />
      </>
    ),
  },
];
