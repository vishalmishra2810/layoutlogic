import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import ReplaceCode from "../../common/replaceCode/ReplaceCode";
import {
  check_valid_prop,
  class_based_string,
  context_api,
  functional_based,
  jest_test,
  react_router_example,
  usestate_example,
  use_effect_example,
  use_reducer_example,
} from "./constant";

export const EASY_REACTJS = [
  {
    question: "What is ReactJS used for?",
    answer: (
      <p className="simple_answers">
        ReactJS is used to build single-page applications, mobile apps, and
        desktop apps.
      </p>
    ),
  },
  {
    question: "What is a component in ReactJS?",
    answer: (
      <p className="simple_answers">
        A component is a small, reusable piece of code that is responsible for
        one job.
        <br /> It is used to split the UI into independent, reusable pieces, and
        think about each piece in isolation.
      </p>
    ),
  },
  {
    question: "What is the virtual DOM and how does it work in ReactJS?",
    answer: (
      <p className="simple_answers">
        The virtual DOM (VDOM) is a programming concept where an ideal, or
        “virtual”, representation of a UI is kept in memory and synced with the
        “real” DOM by a library such as ReactDOM.
        <br /> This process is called reconciliation.
      </p>
    ),
  },
  {
    question: "How is data passed between components in ReactJS?",
    answer: (
      <>
        <p className="simple_answers">
          Data is passed between components in ReactJS using props.
          <br /> Props are arguments passed into React components.
          <br /> Props are passed to components via HTML attributes.
        </p>
        <CodeSnippet codeString={`<ChildComponent name="John Doe" />`} />
        <ReplaceCode
          codeString={`In the above example, the name prop is passed to the 
         ChildComponent component. The ChildComponent component
          can access the name prop using props.name or you can directly 
          destructure the name prop from the props object.
          `}
          list={["name", "ChildComponent", "props.name"]}
        />
      </>
    ),
  },
  {
    question: "How can you define the UI of a ReactJS app using JSX?",
    answer: (
      <>
        <p className="simple_answers">
          JSX (JavaScript XML) is a syntax extension for JavaScript that allows
          developers to write HTML-like code in their JavaScript files.
          <br />
          <br /> It is used in conjunction with React, a JavaScript library for
          building user interfaces, to define the UI components of an app.
        </p>
        <CodeSnippet codeString={`const element = <h1>Hello, world!</h1>`} />
      </>
    ),
  },
  {
    question:
      "What is the difference between a class component and a functional component in ReactJS?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between a class component and a functional
          component in ReactJS are as follows:
        </p>
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={3}
          headerData={["Class Component", "Functional Component"]}
          columnData={{
            0: [
              "There is a render method used in class components. ",
              "Constructors are used to initialize the state of a class component.",
              "React lifecycle methods can be used inside class components (for example, componentDidMount).",
            ],
            1: [
              "There is no render method used in functional components.",
              "Functional components do not have constructors.",
              "Functional components do not have lifecycle methods. like componentDidMount. but you can use hooks to use lifecycle methods.",
            ],
          }}
        />
        <br />
        <p className="simple_answers">Here is Example of Class Component:</p>
        <CodeSnippet codeString={class_based_string} />
        <br />
        <p className="simple_answers">
          Here is Example of Functional Component:
        </p>
        <CodeSnippet codeString={functional_based} />
      </>
    ),
  },
  {
    question: "How do you handle events in ReactJS?",
    answer: (
      <>
        <p className="simple_answers">
          Events are handled in ReactJS using event handlers.
          <br /> Event handlers are functions that are called when an event
          occurs.
          <br /> Event handlers are passed as attributes to the elements that we
          want to handle events on.
        </p>
        <CodeSnippet
          codeString={`<button onClick={handleClick}>Click Me</button>`}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "How do you style components in ReactJS?",
    answer: (
      <>
        <p className="simple_answers">
          Components are styled in ReactJS using inline styles, CSS stylesheets,
          and CSS-in-JS.
        </p>
        <br />
        <p className="simple_answers">Inline Styles:</p>
        <CodeSnippet codeString={`<div style={{color: 'red'}}></div>`} />
        <br />
        <p className="simple_answers">CSS Stylesheets:</p>
        <CodeSnippet codeString={`import './styles.css';`} />
        <br />
        <p className="simple_answers">CSS-in-JS:</p>
        <CodeSnippet codeString={`import styled from 'styled-components';`} />
      </>
    ),
  },
  {
    question: "What is the ReactJS lifecycle and how does it work?",
    top: true,
    answer: (
      <p className="simple_answers">
        The ReactJS lifecycle refers to the series of methods that are called in
        different stages of the component’s existence.
        <br /> These methods are called in a specific order during the mounting
        and updating of a component.
      </p>
    ),
  },
  {
    question: "How do you perform server-side rendering with ReactJS?",
    answer: (
      <p className="simple_answers">
        Server-side rendering is performed in ReactJS using the ReactDOMServer
        module.
        <br /> The ReactDOMServer module is used to render React components to
        static markup.
      </p>
    ),
  },
  {
    question: "What is the purpose of PropTypes module in Reactjs?",
    answer: (
      <>
        <p className="simple_answers">
          PropTypes module is used to check the type of props passed to a
          component.
          <br /> It is used to ensure that the props passed to a component are
          of the correct type.
        </p>
        <CodeSnippet codeString={check_valid_prop} />
        <ReplaceCode
          codeString={
            "If someone uses the MyComponent component and passes it a prop called name that is not a string, then PropTypes will log a warning in the developer console."
          }
          list={["MyComponent", "name"]}
        />
      </>
    ),
  },
  {
    question:
      "How do you use Context API to pass data through the component tree?",
    answer: (
      <>
        <p className="simple_answers">
          Context API is used to pass data through the component tree without
          having to pass props down manually at every level.
          <br /> Context API is used to share data that can be considered
          “global” for a tree of React components.
        </p>
        <CodeSnippet codeString={context_api} />
      </>
    ),
    top: true,
  },
  {
    question:
      "What is Router and how is it used to manage navigation in a single-page app?",
    answer: (
      <>
        <p className="simple_answers">
          Router is a library that is used to manage navigation in a single-page
          app.
          <br /> It is used to define the routes of an app and to render the
          appropriate components when a route is matched.
        </p>
        <CodeSnippet codeString={react_router_example} />
        <ReplaceCode
          codeString={
            "The BrowserRouter component is used to define the routes of the app. The Route component is used to define the path of a route and the component that should be rendered when the route is matched. The Switch component is used to render the first route that matches the current URL."
          }
          list={["BrowserRouter", "App", "Route", "Switch"]}
        />
      </>
    ),
    top: true,
  },
  {
    question: "How do you test a ReactJS app?",
    answer: (
      <>
        <p className="simple_answers">
          A ReactJS app is tested using the Jest testing framework.
          <br /> Jest is a JavaScript testing framework that is used to test
          React apps.
        </p>
        <CodeSnippet codeString={jest_test} />
      </>
    ),
  },
  {
    question:
      "What is the ReactJS Reconciliation algorithm and how does it work?",
    answer: (
      <p className="simple_answers">
        The ReactJS Reconciliation algorithm is a process that is used to update
        the DOM when a component’s props or state changes.
        <br /> It is used to update the DOM in an efficient way by minimizing
        the number of DOM operations.
      </p>
    ),
  },
  {
    question: "What is JSX?",
    answer: (
      <>
        <p className="simple_answers">
          JSX (JavaScript XML) is a syntax extension for JavaScript that allows
          developers to write HTML-like code in their JavaScript files.
          <br /> It is used in conjunction with React, a JavaScript library for
          building user interfaces, to define the UI components of an app.
        </p>
        <CodeSnippet
          codeString={`
          return (
            <div className="App">
              <h1>Hello World</h1>
              <button>Click Me</button>
            </div>
          )
        `}
        />
      </>
    ),
  },
  {
    question: "What is use of key in ReactJS?",
    answer: (
      <>
        <p className="simple_answers">
          The key attribute is used to give a unique identifier to each element
          in a list.
          <br /> It is used by React to identify which items have changed, are
          added, or are removed.
        </p>
      </>
    ),
  },
  {
    question: "Why should you not use index as a key in ReactJS?",
    answer: (
      <>
        <p className="simple_answers">
          Keys are used by React to determine which elements in a list have
          changed, added, or been removed.
          <br /> When an element is added or removed, React uses the key to
          determine which element has changed, and re-renders the appropriate
          components.
          <br /> If you use the index of an element as the key, React will have
          to re-render all elements in the list whenever the list changes,
          because the index of every element will have changed.
        </p>
      </>
    ),
  },
  {
    question:
      "Can you explain the difference between the useState and useReducer Hooks?",
    answer: (
      <>
        <p className="simple_answers">
          The useState Hook is used to manage the state of a component.
          <br /> It is used to store the state of a component and to update the
          state of a component.
          <br />
          <br /> The useReducer Hook is used to manage the state of a component
          in a more complex way.
          <br /> It is used to store the state of a component and to update the
          state of a component in a more complex way.
        </p>
        <p className="simple_answers">
          here is an example of the useState Hook:
        </p>
        <CodeSnippet codeString={usestate_example} language="javascript" />
        <br />
        <p className="simple_answers">
          here is an example of the useReducer Hook:
        </p>
        <CodeSnippet codeString={use_reducer_example} language="javascript" />
      </>
    ),
  },
  {
    question:
      "How to use the useEffect Hook to perform side effects in a function component?",
    answer: (
      <>
        <p className="simple_answers">
          The useEffect Hook is used to perform side effects in a function
          component.
          <br /> It is used to perform side effects such as fetching data from
          an API, setting up a subscription, or manually changing the DOM in
          React components.
        </p>
        <CodeSnippet codeString={use_effect_example} language="javascript" />
      </>
    ),
  },
];
