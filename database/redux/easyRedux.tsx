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
    question: "What is a reducer in Redux and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          A reducer is a pure function that takes the previous state and an
          action, and returns the next state. (previousState, action) = newState
        </p>
        <br />
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
        <br />
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
        <ul className="simple_answers">
          <li>Holds application state</li>
          <li>
            Allows access to state via getState()
            <br />
            You can retrieve the current state of the Redux store by calling
            getState().
          </li>
          <li>
            Allows state to be updated via dispatch(action)
            <br />
            The only way to update the state is to emit an action, an object
            describing what happened. You can send actions to the store by
            calling dispatch(action).
          </li>
          <li>
            Registers listeners via subscribe(listener)
            <br />
            The store allows you to register listeners via the subscribe method.
            The listeners are called whenever an action is dispatched, and some
            part of the state tree may potentially have changed.
          </li>
          <li>
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
];
