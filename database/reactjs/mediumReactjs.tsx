import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ListShow from "../../common/listShow/ListShow";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import {
  context_pass_string,
  first_form_string,
  first_test_string,
  higher_order_string,
  hoc_string,
  lazy_loading_string,
  props_pass_string,
  pure_component_string,
  react_memo_string,
  react_ref_string,
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
    question: "What is difference between Stateful and Stateless components?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between Stateful and Stateless components are as
        </p>
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={3}
          headerData={["Stateful Component", "Stateless Component"]}
          columnData={{
            0: [
              "Stateful components are also known as <b>Smart Components</b>.",
              "Have authority to change the state of the application.",
              "Contains the knowledge of past, present and future states of the application.",
            ],
            1: [
              "Stateless components are also known as <b>Dumb Components</b>.",
              "Do not have authority to change the state of the application.",
              "Contains no knowledge of past, present and future states of the application.",
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
            <br />
            <CodeSnippet codeString={props_pass_string} />
          </li>
          <li className="answer_list_item">
            <b>Context</b> - Context is used to pass data through the component
            tree without having to pass props down manually at every level.
            <br />
            <CodeSnippet codeString={context_pass_string} />
          </li>
          <li className="answer_list_item">
            <b>Redux</b> - Redux is a predictable state container for JavaScript
            apps. It helps you write applications that behave consistently, run
            in different environments (client, server, and native), and are easy
            to test. On top of that, it provides a great developer experience,
            such as live code editing combined with a time traveling debugger.
            <br />
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
        <CodeSnippet codeString={react_router} language="javascript" />
      </>
    ),
    top: true,
  },
  {
    question: "What is HOC in React?",
    answer: (
      <>
        <p className="simple_answers">
          A higher-order component (HOC) is an advanced technique in React for
          reusing component logic. HOCs are not part of the React API, per se.
          They are a pattern that emerges from React’s compositional nature.
        </p>
        <CodeSnippet codeString={hoc_string} language="javascript" />
      </>
    ),
  },
  {
    question: "What is advantage of using HOC in React?",
    answer: (
      <>
        <p className="simple_answers">
          The main advantage of using HOC in React are as follows:
        </p>
        <ListShow
          typeOfList={"ul"}
          list={[
            "HOCs are a great way to reuse code.",
            "HOCs are a great way to abstract state.",
            "Props manipulation.",
          ]}
        />
      </>
    ),
  },
  {
    question: "How do you modularize your React application?",
    answer: (
      <>
        <p className="simple_answers">
          There are many ways to modularize your React application. Here are a
          few ways to do it:
        </p>
        <br />
        <ol className="answer_list">
          <li className="answer_list_item">
            <b>Components</b> - Components are the building blocks of a React
            application. They are the smallest units of code that can be reused
            in a React application. Components are the building blocks of a
            React application. They are the smallest units of code that can be
            reused in a React application.
            <br />
          </li>
          <li className="answer_list_item">
            <b>Containers</b> - Containers are components that are connected to
            the Redux store. They are responsible for fetching data from the
            store and passing it to the presentational components.
            <br />
          </li>
          <li className="answer_list_item">
            <b>Presentational Components</b> - Presentational components are
            components that are responsible for displaying data. They are
            typically stateless components that receive data and callbacks
            exclusively via props.
            <br />
          </li>
        </ol>
      </>
    ),
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
            <CodeSnippet codeString={first_form_string} />
          </li>
          <li className="answer_list_item">
            Define the `handleSubmit` method in your component class. This
            method will be called when the form is submitted.
            <CodeSnippet codeString={second_form_string} />
          </li>
          <li className="answer_list_item">
            You can also use controlled components to manage the state of the
            form fields. In this case, you will need to store the form data in
            the component's state, and update the state whenever the form fields
            change.
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
            Use the `React.memo` higher-order component to wrap functional
            components that do not need to re-render when their props don't
            change. This can prevent unnecessary re-renders and improve
            performance.
          </li>
          <li className="answer_list_item">
            Use the `React.useCallback` hook to memoize callback functions. This
            can prevent unnecessary re-creating of functions on every render,
            improving performance.
          </li>
          <li className="answer_list_item">
            Use the `React.useRef` hook to store mutable values that do not need
            to trigger a re-render when they change. This can prevent
            unnecessary re-renders caused by updates to these values.
          </li>
          <li className="answer_list_item">
            Use the `React.useReducer` hook instead of the React.useState hook
            when you have complex state logic that involves multiple state
            variables or asynchronous updates. This can improve the performance
            of your application by avoiding unnecessary re-renders.
          </li>
          <li className="answer_list_item">
            Use the `React.lazy` and `React.Suspense` components to implement
            code splitting and lazy loading in your application. This can
            improve the performance of your application by only loading the code
            that is needed for a particular route or component.
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
            <CodeSnippet codeString={first_test_string} language="bash" />
          </li>
          <li className="answer_list_item">
            Create a test file in your project. The test file should have the
            same name as the component file, but with the .test.js extension.
            For example, if you have a component in a file called Button.js, you
            should create a test file called Button.test.js.
            <br />
          </li>
          <li className="answer_list_item">
            Write a test for your component. For example, you can check that
            element present in the component renders correctly.
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
          argument and return a new component. <br />
          They can be used to add functionality to a component, such as adding a
          new prop or state value, or adding a new method.
        </p>
        <CodeSnippet codeString={higher_order_string} />
      </>
    ),
    top: true,
  },
  {
    question:
      "Can you explain how to use the React Suspense and lazy APIs for code splitting and lazy loading components?",
    answer: (
      <>
        <p className="simple_answers">
          The React Suspense and lazy APIs can be used to implement code
          splitting and lazy loading in a React application. <br />
          Here is an example of how to use them:
        </p>
        <CodeSnippet codeString={lazy_loading_string} language="javascript" />
      </>
    ),
  },
  {
    question: "How do you use the React ref API to access the DOM?",
    answer: (
      <>
        <p className="simple_answers">
          The React ref API can be used to access the DOM. <br />
          You can use the ref prop to pass a callback function to a component.
          This callback function will be called with the DOM element as an
          argument when the component mounts. <br />
          You can then store the DOM element in a variable and use it to access
          the DOM. <br />
        </p>
        <br />
        <p className="simple_answers">Here is an example of how to use it:</p>
        <CodeSnippet codeString={react_ref_string} language="javascript" />
      </>
    ),
  },
  {
    question:
      "How do you use the React memo API to optimize functional components?",
    answer: (
      <>
        <p className="simple_answers">
          The React memo API can be used to optimize functional components.{" "}
          <br />
          You can use the React.memo higher-order component to wrap a functional
          component. <br />
          This will prevent the component from re-rendering when its props do
          not change. <br />
          This can improve the performance of your application. <br />
        </p>
        <br />
        <p className="simple_answers">Here is an example of how to use it:</p>
        <CodeSnippet codeString={react_memo_string} language="javascript" />
      </>
    ),
  },
  {
    question: "What are different types of hooks provided by React?",
    answer: (
      <>
        <p className="simple_answers">
          There are three types of hooks provided by React:
        </p>
        <ol className="answer_list">
          <li className="answer_list_item">
            <b>State hooks</b> - These hooks can be used to add state to a
            functional component. <br />
            The `<b>useState</b>` hook can be used to add a state variable to a
            functional component. <br />
            The `<b>useReducer</b>` hook can be used to add a state variable
            that is managed by a reducer function. <br />
            The `<b>useContext </b>`hook can be used to add a state variable
            that is managed by a context object. <br />
          </li>
          <li className="answer_list_item">
            <b>Effect hooks</b> - These hooks can be used to add side effects to
            a functional component. <br />
            The `<b>useEffect</b>` hook can be used to add a side effect to a
            functional component. <br />
            The `<b>useLayoutEffect</b>` hook can be used to add a side effect
            to a functional component that is executed after the DOM is updated.{" "}
            <br />
          </li>
          <li className="answer_list_item">
            <b>Other hooks</b> - These hooks can be used to add other
            functionality to a functional component. <br />
            The `<b>useRef</b>` hook can be used to add a mutable ref object to
            a functional component. <br />
            The `<b>useImperativeHandle</b>` hook can be used to add a custom
            method to a functional component. <br />
            The `<b>useMemo</b>` hook can be used to add a memoized value to a
            functional component. <br />
            The `<b>useCallback</b>` hook can be used to add a memoized callback
            function to a functional component. <br />
            The `<b>useDebugValue </b>` hook can be used to add a custom label
            to a functional component in the React DevTools. <br />
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "What are pure components in React?",
    answer: (
      <>
        <p className="simple_answers">
          Pure components are components that do not re-render when their props
          do not change. <br />
          They can be used to improve the performance of your application.{" "}
          <br />
          You can create a pure component by extending the React.PureComponent
          class. <br />
          You can also create a pure component by using the React.memo
          higher-order component. <br />
        </p>
        <br />
        <p className="simple_answers">Here is an example of how to use it:</p>
        <CodeSnippet codeString={pure_component_string} language="javascript" />
      </>
    ),
  },
];
