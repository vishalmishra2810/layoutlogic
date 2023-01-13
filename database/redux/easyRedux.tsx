import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import { action_in_redux, reducer_function_example } from "./constant";

export const EASY_REDUX = [
  {
    question: "What is Redux?",
    answer: (
      <>
        <p className="simple_answers">
          Redux is a predictable state container for JavaScript apps. <br /> It
          helps you write applications that behave consistently, run in
          different environments (client, server, and native), and are easy to
          test. <br />
          <br /> On top of that, it provides a great developer experience, such
          as live code editing combined with a time traveling debugger.
        </p>
      </>
    ),
  },
  {
    question: "What are the three principles of Redux?",
    answer: (
      <>
        <p className="simple_answers">The three principles of Redux are:</p>
        <br />
        <p className="simple_answers">
          <b>1. Single source of truth</b>
          <br />
          The state of your whole application is stored in an object tree within
          a single store.
        </p>
        <br />
        <p className="simple_answers">
          <b>2. State is read-only</b>
          <br />
          The only way to change the state is to emit an action, an object
          describing what happened.
        </p>
        <br />
        <p className="simple_answers">
          <b>3. Changes are made with pure functions</b>
          <br />
          To specify how the state tree is transformed by actions, you write
          pure reducers.
        </p>
        <br />
      </>
    ),
  },
  {
    question: "What are advantages of using Redux?",
    answer: (
      <>
        <p className="simple_answers">
          <b>1. Predictable state management</b>
          <br />
          <b>2. Centralized state management</b>
          <br />
          <b>3. Easy to debug</b>
          <br />
          <b>4. Easy to test</b>
          <br />
          <b>5. Easy to maintain</b>
          <br />
          <b>6. Easy to scale</b>
          <br />
          <b>7. Easy to integrate with other libraries</b>
          <br />
          <b>8. Easy to integrate with server side</b>
          <br />
          <b>9. Easy to integrate with native apps</b>
        </p>
      </>
    ),
  },
  {
    question:
      "Can you use Redux only with React or can you use it with other libraries?",
    answer: (
      <>
        <p className="simple_answers">
          Yes, you can use Redux with other libraries like Angular, Vue, etc.
          <br />
          Because Redux is a state management library, it can be used with any
          other library or framework.
        </p>
      </>
    ),
  },
  {
    question: "What is React Toolkit?",
    answer: (
      <>
        <p className="simple_answers">
          Redux Toolkit is the official, opinionated, batteries-included toolset
          for efficient Redux development. <br />
          It is intended to be the standard way to write Redux logic.
        </p>
        <p className="simple_answers">
          <b>Features of Redux Toolkit:</b>
        </p>
        <br />
        <p className="simple_answers">
          <b>1. Configure Store</b>
          <br />
          <b>2. Create Slice</b>
          <br />
          <b>3. Create Async Thunks</b>
          <br />
          <b>4. Create Async Hooks</b>
          <br />
          <b>5. Create Async Entities</b>
          <br />
          <b>6. Create Async Queries</b>
          <br />
          <b>7. Create Async Mutations</b>
          <br />
        </p>
      </>
    ),
  },
  {
    question: "What is flux?",
    answer: (
      <>
        <p className="simple_answers">
          In simple terms, Flux is an application architecture for React
          utilizing a unidirectional data flow.
        </p>
        <p className="simple_answers">
          <b>Flux</b> has multiple stores, one for each domain of the app.
        </p>
      </>
    ),
  },
  {
    question: "What is the difference between Redux and Flux?",
    answer: (
      <>
        <p className="simple_answers">
          <b>Flux</b> is an application architecture for React utilizing a
          unidirectional data flow.
        </p>
        <br />
        <p className="simple_answers">
          <b>Redux</b> is a predictable state container for JavaScript apps.
        </p>
        <br />
        <p className="simple_answers">
          <b>Flux</b> and <b>Redux</b> are both unidirectional data flow
          architectures. <br /> The main difference between them is that Redux
          uses a single store to hold the state of the entire application.
        </p>
        <br />
        <p className="simple_answers">
          <b>Flux</b> has multiple stores, one for each domain of the app.
        </p>
        <br />
      </>
    ),
  },
  {
    question: "What is a reducer in Redux and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          A reducer is a pure function that takes the previous state and an
          action, and returns the next state. (previousState, action) = newState
        </p>
        <CodeSnippet
          codeString={reducer_function_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question: "What is an action in Redux and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          Actions are payloads of information that send data from your
          application to your store.
          <br /> They are the only source of information for the store. You send
          them to the store using store.dispatch().
        </p>
        <CodeSnippet codeString={action_in_redux} language="javascript" />
      </>
    ),
  },
  {
    question:
      "How do you use the Redux store to manage state in a React application?",
    answer: (
      <>
        <p className="simple_answers">
          The store is the object that brings them together. The store has the
          following responsibilities:
        </p>
        <br />
        <ul className="answer_list">
          <li className="answer_list_item">Holds application state</li>
          <li className="answer_list_item">
            Allows access to state via getState()
            <br />
            You can retrieve the current state of the Redux store by calling
            getState().
          </li>
          <li className="answer_list_item">
            Allows state to be updated via dispatch(action)
            <br />
            The only way to update the state is to emit an action, an object
            describing what happened. You can send actions to the store by
            calling dispatch(action).
          </li>
          <li className="answer_list_item">
            Registers listeners via subscribe(listener)
            <br />
            The store allows you to register listeners via the subscribe method.
            The listeners are called whenever an action is dispatched, and some
            part of the state tree may potentially have changed.
          </li>
          <li className="answer_list_item">
            Handles unregistering of listeners via the function returned by
            subscribe(listener)
            <br />
            The subscribe method returns a function for unregistering the
            listener.
          </li>
        </ul>
        <br />
      </>
    ),
  },
  {
    question: "What is Redux Thunk?",
    answer: (
      <>
        <p className="simple_answers">
          Redux Thunk is a middleware that allows you to write action creators
          that return a function instead of an action.
        </p>
        <p className="simple_answers">
          The thunk can be used to delay the dispatch of an action, or to
          dispatch only if a certain condition is met. The inner function
          receives the store methods dispatch and getState as parameters.
        </p>
      </>
    ),
  },
  {
    question: "What is middleware in Redux?",
    answer: (
      <>
        <p className="simple_answers">
          Middleware provides a third-party extension point between dispatching
          an action, and the moment it reaches the reducer.
        </p>
        <p className="simple_answers">
          It is a way to extend Redux with custom functionality. Middleware lets
          you wrap the store's dispatch method for fun and profit.
        </p>
        <p className="simple_answers">
          The key feature of middleware is that it is composable. Multiple
          middleware can be combined together, where each middleware requires no
          knowledge of what comes before or after it in the chain.
        </p>
        <p className="simple_answers">
          Redux ships with a applyMiddleware() function to facilitate the use of
          middleware.
        </p>
      </>
    ),
  },
  {
    question: "What is purpose of constants in Redux?",
    answer: (
      <>
        <p className="simple_answers">
          Constants are used to define action types. They are used to avoid
          typos and duplication when writing action types.
        </p>
        <p className="simple_answers">
          They are also used to keep the naming consistent between different
          parts of the codebase.
        </p>
      </>
    ),
  },
];
