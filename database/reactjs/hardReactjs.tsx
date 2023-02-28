import Link from "next/link";
import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ListShow from "../../common/listShow/ListShow";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import {
  async_string_first,
  async_string_second,
  controlling_string,
  error_boundary_string,
  use_callback_string,
  use_effect_to_achieve_component_did_mount,
  use_memo_string,
} from "./constant";

export const HARD_REACTJS = [
  {
    question:
      "Can you explain the difference between the virtual DOM and the actual DOM, and why React uses a virtual DOM?",
    answer: (
      <>
        <p className="simple_answers">
          The virtual DOM is a copy of the actual DOM. It is a lightweight
          representation of the actual DOM. <br />
          It is a JavaScript object that is kept in memory. It is synced with
          the actual DOM by a library such as ReactDOM. This process is called
          reconciliation.
          <br /> The virtual DOM is faster than the actual DOM because it is a
          lightweight representation of the actual DOM. <br /> It is faster
          because it does not need to be updated as often as the actual DOM. It
          is updated only when there is a change in the state of the
          application.
        </p>
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={7}
          headerData={["Virtual DOM", "Actual DOM"]}
          columnData={{
            0: [
              "It is a lightweight representation of the actual DOM.",
              "It is a JavaScript object that is kept in memory.",
              "It is synced with the actual DOM by a library such as ReactDOM.",
              "This process is called reconciliation.",
              "It is faster than the actual DOM because it is a lightweight representation of the actual DOM.",
              "It is faster because it does not need to be updated as often as the actual DOM.",
              "It is updated only when there is a change in the state of the application.",
            ],
            1: [
              "It is a representation of the actual DOM.",
              "It is a tree of nodes that is kept in memory.",
              "It is synced with the virtual DOM by a library such as ReactDOM.",
              "This process is called reconciliation.",
              "It is slower than the virtual DOM because it is a representation of the actual DOM.",
              "It is slower because it needs to be updated as often as the virtual DOM.",
              "It is updated every time there is a change in the state of the application.",
            ],
          }}
        />
      </>
    ),
  },
  {
    question:
      "How do you handle asynchronous actions in a React application, such as API calls?",
    answer: (
      <>
        <p className="simple_answers">
          In a React application, you can handle asynchronous actions, such as
          API calls, in a few different ways. One common approach is to use the
          `async` and `await` keywords, which are part of the JavaScript
          language and allow you to write asynchronous code that looks and
          behaves like synchronous code.
          <br /> There are many other ways to handle asynchronous actions in a
          React application, such as using the Promise API or the async and
          await keywords with the fetch function. Ultimately, the choice of
          which approach to use will depend on your specific needs and
          preferences.
        </p>
        <CodeSnippet codeString={async_string_first} />
        <p className="simple_answers">
          In the above example, we are using the `async` and `await` keywords to
          handle asynchronous actions in a React application. We are using the
          `async` keyword to define an asynchronous function, and we are using
          the `await` keyword to wait for the asynchronous function to complete
          before continuing with the rest of the code.
        </p>

        <br />
        <p className="simple_answers">
          Another common way to handle asynchronous actions in a React
          application is to use a library like axios to make HTTP requests. For
          example:
        </p>
        <CodeSnippet codeString={async_string_second} />
      </>
    ),
    top: true,
  },
  {
    question:
      "Can you explain the difference between a controlled and an uncontrolled form element in React, and give an example of each?",
    answer: (
      <>
        <p className="simple_answers">
          A controlled form element is an element whose value is controlled by
          React. For example, a controlled input element would have its value
          controlled by React, and would not update its value based on user
          input.
          <br /> An uncontrolled form element is an element whose value is not
          controlled by React. For example, an uncontrolled input element would
          have its value controlled by the user, and would not update its value
          based on React state.
        </p>
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={7}
          headerData={["Controlled", "Uncontrolled"]}
          columnData={{
            0: [
              "A controlled form element is an element whose value is controlled by React.",
              "For example, a controlled input element would have its value controlled by React, and would not update its value based on user input.",
              "A controlled form element is an element whose value is controlled by React.",
              "For example, a controlled input element would have its value controlled by React, and would not update its value based on user input.",
              "A controlled form element is an element whose value is controlled by React.",
              "For example, a controlled input element would have its value controlled by React, and would not update its value based on user input.",
              "A controlled form element is an element whose value is controlled by React.",
            ],
            1: [
              "An uncontrolled form element is an element whose value is not controlled by React.",
              "For example, an uncontrolled input element would have its value controlled by the user, and would not update its value based on React state.",
              "An uncontrolled form element is an element whose value is not controlled by React.",
              "For example, an uncontrolled input element would have its value controlled by the user, and would not update its value based on React state.",
              "An uncontrolled form element is an element whose value is not controlled by React.",
              "For example, an uncontrolled input element would have its value controlled by the user, and would not update its value based on React state.",
              "An uncontrolled form element is an element whose value is not controlled by React.",
            ],
          }}
        />
        <p className="simple_answers">
          Here's an example of a controlled form element in a React component:
        </p>
        <CodeSnippet codeString={controlling_string} />
      </>
    ),
  },
  {
    question:
      "Can you explain how to optimize the performance of a React application, and give some examples of techniques that can be used?",
    answer: (
      <>
        <p className="simple_answers">
          There are many ways to optimize the performance of a React
          application. Some of the most common techniques include:
        </p>
        <br />
        <br />
        <ol className="answer_list">
          <li className="answer_list_item">
            Using the `React.lazy` and `React.Suspense` components to implement
            code-splitting and lazy-loading of components.
          </li>
          <li className="answer_list_item">
            Using the `PureComponent` class to prevent unnecessary re-renders.
          </li>
          <li className="answer_list_item">
            Using the `React.memo` higher-order component to memoize functional
            components and avoid unnecessary re-renders.
          </li>
          <li className="answer_list_item">
            Using the `useMemo` hook to prevent unnecessary re-renders.
          </li>
          <li className="answer_list_item">
            Using the `useCallback` hook to prevent unnecessary re-renders.
          </li>
          <li className="answer_list_item">
            Using the `key` prop when rendering a list of elements to help React
            identify which elements have changed and avoid unnecessary
            re-renders.
          </li>
        </ol>
        <br />

        <p className="simple_answers">
          Here's an example of using `useMemo` to prevent unnecessary
          re-renders:
        </p>
        <CodeSnippet codeString={use_memo_string} />
        <p className="simple_answers">
          Here's an example of using `useCallback` to prevent unnecessary
          re-renders:
        </p>
        <CodeSnippet codeString={use_callback_string} language="javascript" />
      </>
    ),
    top: true,
  },
  {
    question:
      "Can you explain how to use the React Error Boundary component to handle errors in a React application?",
    answer: (
      <>
        <p className="simple_answers">
          An Error Boundary is a component that can catch JavaScript errors
          anywhere in its child component tree, log those errors, and display a
          fallback UI instead of the component tree that crashed. <br /> Error
          boundaries catch errors during rendering, in lifecycle methods, and in
          constructors of the whole tree below them.
        </p>
        <br />
        <p className="simple_answers">
          Here's an example of using an Error Boundary component to handle
          errors in a React application:
        </p>
        <CodeSnippet codeString={error_boundary_string} language="javascript" />
      </>
    ),
  },
  {
    question: "How to achieve lifecycle methods in functional components?",
    answer: (
      <>
        <p className="simple_answers">
          There are a few ways to achieve lifecycle methods in functional
          components. Some of the most common techniques include:
        </p>
        <br />
        <ol className="answer_list">
          <li className="answer_list_item">
            Using the `useEffect` hook to implement the `componentDidMount`,
            `componentDidUpdate`, and `componentWillUnmount` lifecycle methods.
          </li>

          <li className="answer_list_item">
            Using the `useLayoutEffect` hook to implement the
            `componentDidMount` and `componentDidUpdate` lifecycle methods.
          </li>
        </ol>
        <br />
        <p className="simple_answers">
          Here's an example of using the `useEffect` hook to implement the
          `componentDidMount` , `componentDidUpdate`, and `componentWillUnmount`
          lifecycle methods:
        </p>
        <CodeSnippet
          codeString={use_effect_to_achieve_component_did_mount}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "Build a countdown timer using ReactJs",
    answer: (
      <>
        <p className="simple_answers">
          Here's an example of a countdown timer built using ReactJs:
        </p>
        <br />
        <Link
          className="simple_answers_link_btn"
          href={"/machine-round-question/reactjs-countdown-timer"}
        >
          Open Project
        </Link>
      </>
    ),
  },
  {
    question:
      "Create a React Project with Optimize search filter in ReactJs using debounce and infinite scroll(Pagination).",
    answer: (
      <>
        <p className="simple_answers">
          Here's an example of a React Project with Optimize search filter in
          ReactJs using debounce and infinite scroll(Pagination):
        </p>
        <br />
        <Link
          className="simple_answers_link_btn"
          href={
            "/machine-round-question/optimize-search-filter-in-reactjs-using-debounce-and-infinite-scroll"
          }
        >
          Open Project
        </Link>
      </>
    ),
  },
  {
    question:
      "How to create a React counter application with start, reset, and pause functionality?",
    answer: (
      <>
        <p className="simple_answers">
          Here's an example of a React counter application with start, reset,
          and pause functionality:
        </p>
        <br />
        <Link
          className="simple_answers_link_btn"
          href={"/machine-round-question/reactjs-counter-application"}
        >
          Open Project
        </Link>
      </>
    ),
  },
  {
    question: "If you know all of the above, these are the next steps to take:",
    answer: (
      <>
        <p className="simple_answers">
          First of all, if you know all of the above, what are you doing here
          dude! <br />
          You should be working on your own projects.
        </p>
        <br />
        <p className="simple_answers">
          OtherWise you can check out these projects to get started with
          ReactJs:
        </p>
        <br />
        <ListShow
          list={[
            "A web-based game: Develop a web-based game using React that utilizes the latest web technologies, such as WebSockets and WebRTC, to create a real-time, multiplayer experience.",
            "A social media platform for connecting with other gardeners and sharing tips and plant recommendations.",
            "A budgeting app that integrates with bank accounts and tracks spending in real-time.",
            "A language learning app that uses augmented reality to create immersive, interactive lessons.",
            "A real estate app that uses VR technology to allow users to virtually `visit` properties before scheduling a physical tour.",
            "A virtual wardrobe app that allows users to upload images of their clothing, create outfits, and plan their outfits for upcoming events.",
            "A real-time collaborative code editor: Allow multiple users to work on the same codebase simultaneously, with the changes being synced in real-time.",
          ]}
          typeOfList={"ol"}
        />
        <br />
      </>
    ),
  },
];
