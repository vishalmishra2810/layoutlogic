import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import {
  callback_example,
  call_apply_bind_example,
  closure_example,
  doble_triple_example,
  dom_example,
  event_example,
  fetch_example,
  for_forin_forof_example,
  map_filter_reduce_example,
  object_example,
  promise_example,
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />

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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
        <CodeSnippet codeString={dom_example} language="javascript" />
      </>
    ),
  },
  {
    question :"How does prototypal inheritance work in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"What is the difference between a forEach loop and a for loop in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"How do you handle exceptions in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"What is difference between a function declaration and a function expression in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"What is the difference between shallow and deep copying in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"How do you implement debouncing in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"How do you implement throttling in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"What is the difference between a promise and a callback in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"How do you handle asynchronous code using async/await in JavaScript?",
    answer: (
      <>
      </>
    ),
  },
  {
    question :"What is the difference between a class and a function in JavaScript?",
    answer: (
      <>
      </>
    ),
  },

];
