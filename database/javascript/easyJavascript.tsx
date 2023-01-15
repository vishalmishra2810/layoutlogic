import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ListShow from "../../common/listShow/ListShow";
import {
  array_example,
  arrow_template_literal_example,
  break_example,
  continue_example,
  currying_example,
  function_example,
  if_example,
  implicit_example,
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
        <CodeSnippet codeString={variable_example} language="javascript" />
      </>
    ),
  },
  {
    question: "What are JavaScript Data Types?",
    answer: (
      <>
        <p className="simple_answers">
          Data types are the classifications we give to the different kinds of
          data that we use in programming.
        </p>
        <br />
        <p className="simple_answers">
          JavaScript has dynamic typing: you don't have to specify the data type
          of a variable when you declare it, as it is determined automatically.
          JavaScript has five primitive data types:
          <ListShow
            list={["Boolean", "Null", "Undefined", "Number", "String"]}
            typeOfList="ul"
          />
        </p>
        <br />
        <p className="simple_answers">
          In addition to those, JavaScript has two special values, `
          <code>Infinity</code>` and `<code>NaN</code>` (not a number).
        </p>
        <p className="simple_answers">
          JavaScript has three types of objects:
          <ListShow list={["Object", "Date", "Array"]} typeOfList="ul" />
        </p>
        <br />
        <p className="simple_answers">
          JavaScript has one type used for storing regular expressions: `
          <code>RegExp</code>`.
        </p>
        <br />
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
        <CodeSnippet codeString={break_example} language="javascript" />
        <p className="simple_answers">
          A continue statement is used to skip the current iteration of a loop.
          You can use a continue statement to skip the current iteration of a
          loop.
        </p>
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
          for and dispatches events or messages in a program. <br /> It works by
          making a request to some internal or external "event provider" (that
          generally blocks the request until an event has arrived), and then it
          calls the relevant event handler ("dispatches the event").
        </p>
      </>
    ),
  },
  {
    question:
      "What is the difference between synchronous and asynchronous code in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          Synchronous code is executed line by line, one after the other. <br />
          Asynchronous code is executed in a non-blocking way, which means that
          other code can run while it is waiting for a response.
        </p>
      </>
    ),
  },
  {
    question:
      " How do JavaScript primitive/object types passed in functions? or What is pass by value and pass by reference?",
    answer: (
      <>
        <p className="simple_answers">
          Primitive types are passed to functions by value, and objects are
          passed by reference.
        </p>
        <br />
        <p className="simple_answers">
          <strong>Pass by value : </strong> Pass by value means that the
          function gets a copy of the value. If a function changes the value of
          an argument, it does not change the original variable.
        </p>
        <p className="simple_answers">
          <strong>Pass by reference :</strong> Pass by reference means that the
          function gets a reference to the value. If a function changes the
          value of an argument, it changes the original variable.
        </p>
      </>
    ),
  },
  {
    question: 'What is NaN in JavaScript?"',
    answer: (
      <>
        <p className="simple_answers">
          `NaN` stands for Not a Number. It is a property of the global object.
          In other words, it is a variable in global scope. The initial value of
          NaN is Not a Number.
        </p>
        <br />
        <p className="simple_answers">
          When you try to convert a non-numeric string to a number, you get NaN.
        </p>
      </>
    ),
  },
  {
    question: "Explain Implicit Type Coercion in javascript.",
    answer: (
      <>
        <p className="simple_answers">
          Implicit type coercion is the automatic or implicit conversion of
          values from one data type to another (such as strings to numbers,
          object to primitive types, and so on).
        </p>
        <br />
        <p className="simple_answers">
          For example, when you use the + operator on a string and a number, the
          number is converted to a string.
        </p>
        <CodeSnippet codeString={implicit_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "How to use and implement ES6 features such as arrow functions, template literals, and destructuring?",
    answer: (
      <>
        <p className="simple_answers">
          <strong>Arrow functions</strong> are a new way to write functions in
          JavaScript. They are a shorter syntax for writing function
          expressions. <br />
          <br />
          Arrow functions are always anonymous. You cannot use an arrow function
          as a constructor.
        </p>
        <br />
        <p className="simple_answers">
          <strong>Template literals</strong> are string literals allowing
          embedded expressions. You can use multi-line strings and string
          interpolation features with them. <br />
          They were called "template strings" in prior editions of the ES2015
          specification.
        </p>
        <br />
        <p className="simple_answers">
          <strong>Destructuring</strong> is a JavaScript expression that makes
          it possible to unpack values from arrays, or properties from objects,
          into distinct variables.
        </p>
        <CodeSnippet
          codeString={arrow_template_literal_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "What is Currying in JavaScript?",
    answer: (
      <>
        <p className="simple_answers">
          Currying is a technique of evaluating function with multiple
          arguments, into sequence of functions with single argument.
        </p>
        <p className="simple_answers">
          In JavaScript, currying is a technique for creating a new function
          from an existing one by "pre-filling" some of its arguments.
          <br /> The resulting function can be called with fewer arguments than
          the original, and it will return a new function that takes the
          remaining arguments. <br />
          This can be useful for creating specialized versions of a function
          that only differ by a few arguments, or for creating more flexible and
          composable code.
        </p>
        <CodeSnippet codeString={currying_example} language="javascript" />
      </>
    ),
  },
];
