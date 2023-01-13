import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ListShow from "../../common/listShow/ListShow";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import {
  combine_reducers_example,
  connect_function_example,
  create_redux_action_example,
  create_store_example,
  dispatch_action_example,
  redux_mock_store_example,
  thunk_asynchronours_actions_example,
} from "./constant";

export const MEDIUM_REDUX = [
  {
    question: "How do you connect a Redux store to a React component?",
    answer: (
      <>
        <p className="simple_answers">
          You can use the connect() function to connect a React component to a
          Redux store.
        </p>
        <p className="simple_answers">
          The connect() function connects a React component to a Redux store.
        </p>
        <CodeSnippet
          codeString={connect_function_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "How do you create a Redux store?",
    answer: (
      <>
        <p className="simple_answers">
          You can create a Redux store using the createStore() function.
        </p>
        <CodeSnippet codeString={create_store_example} language="javascript" />
      </>
    ),
  },
  {
    question: "How do you create a Redux action?",
    answer: (
      <>
        <p className="simple_answers">
          You can create a Redux action using the createAction() function.
        </p>
        <CodeSnippet
          codeString={create_redux_action_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you dispatch actions from a React component to update the Redux store?",
    answer: (
      <>
        <p className="simple_answers">
          You can dispatch actions from a React component using the
          useDispatch() hook.
        </p>
        <CodeSnippet
          codeString={dispatch_action_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you handle asynchronous actions in a Redux application, such as making HTTP requests?",
    answer: (
      <>
        <p className="simple_answers">
          You can handle asynchronous actions in a Redux application using the
          redux-thunk middleware.
        </p>
        <br />
        <p className="simple_answers">
          The redux-thunk middleware allows you to write action creators that
          return a function instead of an action. The thunk can be used to delay
          the dispatch of an action, or to dispatch only if a certain condition
          is met. <br /> The inner function receives the store methods dispatch
          and getState as parameters.
        </p>
        <CodeSnippet
          codeString={thunk_asynchronours_actions_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you split a Redux application into multiple reducers and combine them using the combineReducers function?",
    answer: (
      <>
        <p className="simple_answers">
          You can split a Redux application into multiple reducers and combine
          them using the combineReducers function.
        </p>
        <CodeSnippet
          codeString={combine_reducers_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you test a Redux application using a library such as redux-mock-store?",
    answer: (
      <>
        <p className="simple_answers">
          You can test a Redux application using a library such as
          redux-mock-store.
        </p>
        <br />
        <p className="simple_answers">
          The redux-mock-store library allows you to create a mock Redux store
          that you can use to test your Redux actions and reducers.
        </p>
        <CodeSnippet
          codeString={redux_mock_store_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "What is feature of Redux devtools?",
    answer: (
      <>
        <p className="simple_answers">
          Redux DevTools is a live-editing time travel environment for Redux
          with hot reloading, action replay, and customizable UI. It provides
          power-ups for your Redux development workflow.
        </p>
        <br />
        <p className="simple_answers">
          Redux DevTools is a set of packages that can be used to monitor and
          debug your Redux application. It is available as a browser extension
          for Chrome, Firefox, and Edge, as well as a standalone app for macOS,
          Windows, and Linux.
        </p>
        <p className="simple_answers">
          Redux DevTools features are as follows:
        </p>
        <br />
        <ListShow
          list={[
            "Time travel debugging",
            "Live code editing",
            "Undo and redo actions",
            "Jump to a specific state",
            "Dispatch actions manually",
            "Drag and drop actions",
            "Import and export state",
            "Lock/unlock changes",
            "Pause recording",
            "Diffing of states",
            "Customize UI",
          ]}
          typeOfList={"ol"}
        />
      </>
    ),
  },
  {
    question: "What is difference between React Redux and React Context API?",
    answer: (
      <>
        <p className="simple_answers">
          These are the main differences between Redux and React Context API:
        </p>
        <MakeDifferentiate
          headerData={["React Redux", "React Context API"]}
          totalColumn={2}
          columnDataLength={4}
          columnData={{
            0: [
              "Redux is a third-party library",
              "Provides more features than React Context API",
              "More complex to use than React Context API",
              "More suitable for large applications",
            ],
            1: [
              "React Context API is a built-in feature of React",
              "Provides less features than React Redux",
              "Easier to use than React Redux",
              "More suitable for small applications",
            ],
          }}
        />
      </>
    ),
  },
];
