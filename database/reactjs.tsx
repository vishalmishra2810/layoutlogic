import { ALL_COMPONENTS } from "./allTech";

export const REACTJS_QUESTIONS_WITH_ANSWERS = [
  {
    id: 1,
    question: <b>What is ReactJS?</b>,
    answer: [
      "React is a JavaScript library for building user interfaces. It was developed by Facebook and is often used for building single-page applications and mobile applications.",
      "React allows you to build reusable UI components. It provides a declarative API that makes it easy to reason about your code and keep it predictable. With React, you can create complex UIs from small, isolated pieces of code called 'components'.",
      "React uses a virtual DOM (a lightweight in-memory representation of the real DOM) to optimize updates to the actual DOM. When something in the component changes, React will update the virtual DOM, and then it will determine the most efficient way to update the real DOM. This makes it faster and easier to build and maintain complex applications.",
      "React is often used in combination with other libraries or frameworks, such as Redux for state management or React Router for routing.",
    ],
    components: ALL_COMPONENTS.LIST,
  },
  {
    id: 2,
    question: <b>What are the advantages of ReactJS?</b>,
    answer: (
      <>
        <p className="answer">React has the following advantages:</p>
        <ol className="order_list_style">
          <li className="order_list">
            React is a declarative library, which makes it easy to reason about
            your code and keep it predictable.
          </li>
          <li className="order_list">
            React is <b>component-based</b>, which makes it easy to build
            complex UIs from small, isolated pieces of code called components.
          </li>
          <li className="order_list">
            React is fast, because it uses a <b>virtual DOM </b>(a lightweight
            in-memory representation of the real DOM) to optimize updates to the{" "}
            <b>actual DOM</b>.
          </li>
          <li className="order_list">
            React is easy to learn and use, because it uses a declarative API
            and a <b>component-based approach</b>.
          </li>
          <li className="order_list">
            React is flexible, because it allows you to use other libraries or
            frameworks in combination with React.
          </li>
          <li className="order_list">
            React is popular, because it is used by many large companies, such
            as Facebook, Instagram, Netflix, Airbnb, and many more.
          </li>
        </ol>
      </>
    ),
    components: "",
  },
  {
    id: 3,
    question: <b>What is difference between Virtual DOM and Real DOM?</b>,
    answer: {
      totalColumn: 2,
      headerData: ["Virtual DOM", "Real DOM"],
      columnData: [
        [
          "A lightweight in-memory representation of the real DOM",
          "It is a JavaScript object",
          "It is faster than the real DOM",
          "It is used to optimize updates to the real DOM",
        ],
        [
          "A representation of the DOM that is rendered by the browser",
          "It is an object that is part of the browser's JavaScript API",
          "It is slower than the virtual DOM",
          "It is updated directly by the browser",
        ],
      ],
      columnDataLength: 4,
    },
    components: ALL_COMPONENTS.TABLE,
  },
  {
    id: 4,
    question: <b>What are the features of React?</b>,
    answer: (
      <>
        <p className="answer">React has the following features:</p>
        <ol className="order_list_style">
          <li className="order_list">
            React is a JavaScript library for building user interfaces.
          </li>
          <li className="order_list">
            React is a component-based library, which makes it easy to build
            complex UIs from small, isolated pieces of code called components.
          </li>
          <li className="order_list">
            React is declarative, which makes it easy to reason about your code
            and keep it predictable.
          </li>
          <li className="order_list">
            React uses a virtual DOM (a lightweight in-memory representation of
            the real DOM) to optimize updates to the actual DOM.
          </li>
          <li className="order_list">
            React is fast, because it uses a virtual DOM to optimize updates to
            the actual DOM.
          </li>

          <li className="order_list">
            React is easy to learn and use, because it uses a declarative API
            and a component-based approach.
          </li>
          <li className="order_list">
            React is flexible, because it allows you to use other libraries or
            frameworks in combination with React.
          </li>
          <li className="order_list">
            React is popular, because it is used by many large companies, such
            as Facebook, Instagram, Netflix, Airbnb, and many more.
          </li>
        </ol>
      </>
    ),
    components: "",
  },
  {
    id: 5,
    question: <b>What are the disadvantages of ReactJS?</b>,
    answer: (
      <>
        <p className="answer">React has the following disadvantages:</p>
        <ol className="order_list_style">
          <li className="order_list">
            React is a JavaScript library, which means that you need to learn
            JavaScript before you can use React.
          </li>
          <li className="order_list">
            React is a library, not a framework. This means that you need to
            choose additional libraries and frameworks to build your
            application.
          </li>
          <li className="order_list">
            React is not a complete solution, because it only provides the view
            layer for your application. You need to choose additional libraries
            and frameworks to build your application.
          </li>
        </ol>
      </>
    ),
    components: "",
  },
  {
    id: 6,
    question: <b>What is JSX?</b>,
    answer: {
      description: [
        "JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.",
        "JSX produces React 'elements'.",
        "A React element is a plain object describing a component instance or DOM node and its desired properties.",
      ],
      codeString: `
    return(               
    <div>                
    <h1> hii </h1>
    <p> welcome to CarrierBoosts </p>
    </div>
  );`,
    },
    components: ALL_COMPONENTS.CODE,
  },
];
