import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  array_example,
  break_example,
  continue_example,
  function_example,
  if_example,
  loop_example,
  switch_example,
  variable_example,
} from "./constant";

export const EASY_JAVASCRIPT = [
  {
    question: "What is JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          JavaScript is a lightweight, interpreted, or just-in-time compiled
          programming language with first-class functions.
        </p>
      </>
    ),
  },
  {
    question: "What is a variable in JavaScript, and how do you declare one?",
    answer: (
      <>
        <p className="simple_answers">
          A variable is a container for a value, which can be a number, a
          string, a boolean, an array, an object, or even another function.
          <br /> <br /> Variables are declared using the <code> var </code>{" "}
          keyword. <br /> <br /> You can also declare a variable using the{" "}
          <code> let </code> and <code> const </code>
          keyword, which is the preferred way to declare variables in modern
          JavaScript.
        </p>
        <br />
        <CodeSnippet codeString={variable_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is a function in JavaScript, and how do you declare one?",
    answer: (
      <>
        <p className="simple_answers">
          A function is a block of code designed to perform a particular task. A
          JavaScript function is executed when `something` invokes it (calls
          it). <br /> <br />
          You can declare a function using the `<code>function</code>` keyword.
          You can also declare a function using the arrow function syntax.
        </p>
        <br />
        <CodeSnippet codeString={function_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is an array in JavaScript, and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          An array is a special variable, which can hold more than one value at
          a time. You can create an array using the array literal syntax or the
          Array constructor.
        </p>
        <br />
        <CodeSnippet codeString={array_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is an if statement in JavaScript, and how do you use one?",
    answer: (
      <>
        <p className="simple_answers">
          An if statement is used to execute a block of code if a specified
          condition is true. <br />
          <br />
          You can use an if statement to execute a block of code if a condition
          is true, or to execute a different block of code if that condition is
          false.
        </p>
        <br />
        <CodeSnippet codeString={if_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is a loop in JavaScript, and how do you use one?",
    answer: (
      <>
        <p className="simple_answers">
          A loop is a programming structure that repeats a sequence of
          instructions until a specific condition is met. <br />
          <br /> You can use a loop to execute a block of code a number of
          times.
        </p>
        <br />
        <CodeSnippet codeString={loop_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "What is a switch statement in JavaScript, and how do you use one?",
    answer: (
      <>
        <p className="simple_answers">
          A switch statement is used to perform different actions based on
          different conditions. You can use a switch statement to select one of
          many code blocks to be executed.
        </p>
        <br />
        <CodeSnippet codeString={switch_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "What is break statement and continue statement in JavaScript, and how do you use?",
    answer: (
      <>
        <p className="simple_answers">
          A break statement is used to terminate a switch or a loop. You can use
          a break statement to terminate a switch or a loop.
        </p>
        <br />
        <CodeSnippet codeString={break_example} language="javascript" />
        <br />
        <p className="simple_answers">
          A continue statement is used to skip the current iteration of a loop.
          You can use a continue statement to skip the current iteration of a
          loop.
        </p>
        <br />
        <CodeSnippet codeString={continue_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What is an anonymous function in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          An anonymous function is a function without a name. Anonymous
          functions are often not accessible after their initial creation.
        </p>
      </>
    ),
  },
  {
    question: "what is event loop in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          The event loop is a programming construct or design pattern that waits
          for and dispatches events or messages in a program. It works by making
          a request to some internal or external "event provider" (that
          generally blocks the request until an event has arrived), and then it
          calls the relevant event handler ("dispatches the event").
        </p>
      </>
    ),
  },
  {
    question:
      "What is the difference between synchronous and asynchronous code in JavaScript?",
    answer: <></>,
  },
];
