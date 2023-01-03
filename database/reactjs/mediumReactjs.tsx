import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ListShow from "../../common/listShow/ListShow";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import {
  context_pass_string,
  first_form_string,
  first_test_string,
  higher_order_string,
  props_pass_string,
  react_router,
  redux_pass_string,
  second_form_string,
  second_test_string,
  third_form_string,
} from "./constant";

export const MEDIUM_REACTJS = [
  {
    question: "What is ReactJS?",
    answer: (
      <ListShow
        typeOfList={"ul"}
        list={[
          "ReactJS is a JavaScript library for building user interfaces.",
          "ReactJS is a front-end library developed by Facebook.",
          "ReactJS allows us to create reusable UI components.",
          "ReactJS is used to handle the view layer for web and mobile apps.",
          "ReactJS is a component-based library.",
          "ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
        ]}
      />
    ),
  },
  {
    question: "What are the features of ReactJS?",
    answer: (
      <ol className="answer_list">
        <li className="answer_list_item">
          ReactJS uses <b> Virtual DOM </b> instead of Real DOM.
        </li>
        <li className="answer_list_item">
          React can be rendered on the server as well as the client, which can
          improve the performance and <b>SEO of the app</b>.
        </li>
        <li className="answer_list_item">
          ReactJS follows <b>uni-directional</b> data flow or data binding.This
          makes it easier to understand and debug the app, as the flow of data
          is predictable and explicit.
        </li>
        <li className="answer_list_item">
          ReactJS uses <b> reusable/composable UI</b> components to develop the
          view.
        </li>
        <li className="answer_list_item">
          ReactJS uses JSX as its primary scripting language.This allows
          developers to write HTML-like code in their JavaScript files, making
          it easier to build and style UI components.
        </li>
        <li className="answer_list_item">
          ReactJS uses one-way data binding between the components.
        </li>
        <li className="answer_list_item">
          ReactJS uses <b> Flux</b> architecture.
        </li>
      </ol>
    ),
    top: true,
  },
  {
    question: "What is difference between Virtual DOM and Real DOM?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between Virtual DOM and Real DOM are as follows:
        </p>
        <br />
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={5}
          headerData={["Virtual DOM", "Real DOM"]}
          columnData={{
            0: [
              "Virtual DOM is a lightweight copy of the real DOM.",
              "Virtual DOM is a JavaScript object.",
              "Virtual DOM is faster than the real DOM.",
              "Virtual DOM is used in ReactJS.",
              "Virtual DOM is a virtual representation of the real DOM.",
            ],
            1: [
              "Real DOM is a browser API.",
              "Real DOM is a tree of nodes/elements created by the browser.",
              "Real DOM is slower than the virtual DOM.",
              "Real DOM is not used in ReactJS.",
              "Real DOM is a representation of the page loaded in the browser.",
            ],
          }}
        />
      </>
    ),
    top: true,
  },
  {
    question: "What is the difference between ReactJS and AngularJS?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between ReactJS and AngularJS are as follows:
        </p>
        <br />
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={5}
          headerData={["ReactJS", "AngularJS"]}
          columnData={{
            0: [
              "ReactJS is a JavaScript library for building user interfaces.",
              "ReactJS is a front-end library developed by Facebook.",
              "ReactJS allows us to create reusable UI components.",
              "ReactJS is used to handle the view layer for web and mobile apps.",
              "ReactJS is a component-based library.",
            ],
            1: [
              "AngularJS is a JavaScript framework for building web applications.",
              "AngularJS is a front-end framework developed by Google.",
              "AngularJS allows us to create reusable UI components.",
              "AngularJS is used to handle the view layer for web apps.",
              "AngularJS is a component-based framework.",
            ],
          }}
        />
      </>
    ),
  },
  {
    question: "What are the limitations of ReactJS?",
    answer: (
      <ListShow
        typeOfList={"ul"}
        list={[
          "ReactJS is just a library and not a framework.",
          "ReactJS is a UI library and is not suitable for building complex apps.",
          "ReactJS is not suitable for building mobile apps.",
          "ReactJ has no standard way to structure application, and different developers and teams may have different approaches. This can make it harder for new developers to understand and work with existing React codebases.",
        ]}
      />
    ),
  },
  {
    question: "How do you pass data between different components in React?",
    answer: (
      <>
        <p className="simple_answers">
          There are many ways to pass data between different components in
          React: -
        </p>
        <br />
        <ol className="answer_list">
          <li className="answer_list_item">
            <b>Props</b> - Props are used to pass data from one component to
            another. Props are immutable and are passed from parent to child
            components.
            <br /> <br />
            <CodeSnippet codeString={props_pass_string} />
          </li>
          <li className="answer_list_item">
            <b>Context</b> - Context is used to pass data through the component
            tree without having to pass props down manually at every level.
            <br /> <br />
            <CodeSnippet codeString={context_pass_string} />
          </li>
          <li className="answer_list_item">
            <b>Redux</b> - Redux is a predictable state container for JavaScript
            apps. It helps you write applications that behave consistently, run
            in different environments (client, server, and native), and are easy
            to test. On top of that, it provides a great developer experience,
            such as live code editing combined with a time traveling debugger.
            <br /> <br />
            <CodeSnippet codeString={redux_pass_string} />
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "How do you implement routing in a React application?",
    answer: (
      <>
        <p className="simple_answers">
          To implement routing in a React application, you can use the
          react-router-dom library. This library provides a `Router` component
          that manages the application's routing, and a set of `Route`
          components that define the individual routes in your application.
        </p>
        <br />
        <CodeSnippet codeString={react_router} />
      </>
    ),
    top: true,
  },
  {
    question: "How do you handle forms in React?",
    answer: (
      <>
        <p className="simple_answers">
          In React, you can handle forms in a number of ways. Here is one way to
          do it:
        </p>
        <br />
        <ol className="answer_list">
          <li className="answer_list_item">
            Create a form element in your render method with an onSubmit event
            handler:
            <br /> <br />
            <CodeSnippet codeString={first_form_string} />
          </li>
          <li className="answer_list_item">
            Define the `handleSubmit` method in your component class. This
            method will be called when the form is submitted.
            <br /> <br />
            <CodeSnippet codeString={second_form_string} />
          </li>
          <li className="answer_list_item">
            You can also use controlled components to manage the state of the
            form fields. In this case, you will need to store the form data in
            the component's state, and update the state whenever the form fields
            change.
            <br /> <br />
            <CodeSnippet codeString={third_form_string} />
          </li>
        </ol>
      </>
    ),
    top: true,
  },
  {
    question: "How do you optimize the performance of a React application?",
    answer: (
      <>
        <p className="simple_answers">
          There are many ways to optimize the performance of a React
          application. Here are some of them:
        </p>
        <br />
        <ol className="answer_list">
          <li className="answer_list_item">
            Use the React.memo higher-order component to wrap functional
            components that do not need to re-render when their props don't
            change. This can prevent unnecessary re-renders and improve
            performance.
          </li>
          <li className="answer_list_item">
            Use the React.useCallback hook to memoize callback functions. This
            can prevent unnecessary re-creating of functions on every render,
            improving performance.
          </li>
          <li className="answer_list_item">
            Use the React.useRef hook to store mutable values that do not need
            to trigger a re-render when they change. This can prevent
            unnecessary re-renders caused by updates to these values.
          </li>
          <li className="answer_list_item">
            Use the React.useReducer hook instead of the React.useState hook
            when you have complex state logic that involves multiple state
            variables or asynchronous updates. This can improve the performance
            of your application by avoiding unnecessary re-renders.
          </li>
          <li className="answer_list_item">
            Use the React.lazy and React.Suspense components to implement code
            splitting and lazy loading in your application. This can improve the
            performance of your application by only loading the code that is
            needed for a particular route or component.
          </li>
        </ol>
      </>
    ),
    top: true,
  },
  {
    question: "How do you implement unit testing in a React application?",
    answer: (
      <>
        <p className="simple_answers">
          Here is an example of how to set up Jest and write a simple unit test
          for a React component:
        </p>
        <br />
        <ol className="answer_list">
          <li className="answer_list_item">
            Install the Jest testing framework and the React testing library:
            <br /> <br />
            <CodeSnippet codeString={first_test_string} language="bash" />
          </li>
          <li className="answer_list_item">
            Create a test file in your project. The test file should have the
            same name as the component file, but with the .test.js extension.
            For example, if you have a component in a file called Button.js, you
            should create a test file called Button.test.js.
            <br /> <br />
          </li>
          <li className="answer_list_item">
            Write a test for your component. For example, you can check that
            element present in the component renders correctly.
            <br /> <br />
            <CodeSnippet codeString={second_test_string} />
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "How do you use higher-order components in React?",
    answer: (
      <>
        <p className="simple_answers">
          Higher-order components are functions that take a component as an
          argument and return a new component. They can be used to add
          functionality to a component, such as adding a new prop or state
          value, or adding a new method.
        </p>
        <br />
        <CodeSnippet codeString={higher_order_string} />
      </>
    ),
    top: true,
  },
  {
    question:
      "Can you explain how to use the React Suspense and lazy APIs for code splitting and lazy loading components?",
    answer: <></>,
  },
  {
    question: "How do you use the React ref API to access the DOM?",
    answer: <></>,
  },
  {
    question:
      "How do you use the React memo API to optimize functional components?",
    answer: <></>,
  },
  {
    question: "What are different types of hooks provided by React?",
    answer: <></>,
  },
];
