import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  nexted_objexts_state_example,
  server_side_rendering_example,
} from "./constant";

export const HARD_REDUX = [
  {
    question: "Can you explain at a high level how Redux works?",
    answer: (
      <>
        <p className="simple_answers">
          Redux is a predictable state container for JavaScript applications.
        </p>
        <p className="simple_answers">
          It helps you write applications that behave consistently, run in
          different environments (client, server, and native), and are easy to
          test.
        </p>
        <p className="simple_answers">
          On top of that, it provides a great developer experience, such as live
          code editing combined with a time traveling debugger.
        </p>
        <p className="simple_answers">
          Every Redux applications has these components:
        </p>
        <ul className="answer_list">
          <li className="answer_list_item">
            <strong> Containers</strong>
            <br />
            <p className="simple_answers">
              Containers are components that are connected to the Redux store.
              They are responsible for reading part of the state tree and
              injecting it into their child components as props.
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Actions</strong>
            <br />
            <p className="simple_answers">
              Actions are payloads of information that send data from your
              application to your store. They are the only source of information
              for the store. You send them to the store using store.dispatch().
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Reducers</strong>
            <br />
            <p className="simple_answers">
              Reducers specify how the application's state changes in response
              to actions sent to the store. Remember that actions only describe
              what happened, but don't describe how the application's state
              changes.
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Store</strong>
            <br />
            <p className="simple_answers">
              The store is the object that brings them together. The store has
              the following responsibilities:
            </p>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What are Redux forms, and how do you use them?",
    answer: (
      <>
        <p className="simple_answers">
          Redux forms are a set of reducers and actions to create and manage
          form state in Redux.
        </p>
        <br />
        <p className="simple_answers">
          You can use Redux forms to manage the state of your form and keep
          track of the values of the inputs in your form.
        </p>
        <br />
        <p className="simple_answers">
          You can use the redux-form library to implement Redux forms in your
          application.
        </p>
      </>
    ),
  },
  {
    question:
      "How do you implement server-side rendering with a Redux application?",
    answer: (
      <>
        <p className="simple_answers">
          You can implement server-side rendering with a Redux application using
          the react-redux-universal-hot-example project.
        </p>
        <br />
        <p className="simple_answers">
          The react-redux-universal-hot-example project is a boilerplate
          application that demonstrates how to implement server-side rendering
          with a Redux application.
        </p>
        <CodeSnippet
          codeString={server_side_rendering_example}
          language="javascript"
        />
      </>
    ),
  },
  {
    question:
      "How do you handle complex state management in a Redux application, such as updating nested objects or arrays?",
    answer: (
      <>
        <p className="simple_answers">
          You can handle complex state management in a Redux application using
          the Immer library.
        </p>
        <br />
        <p className="simple_answers">
          The Immer library allows you to work with immutable state in a more
          convenient way. It is based on the copy-on-write mechanism.
        </p>
        <CodeSnippet
          codeString={nexted_objexts_state_example}
          language="javascript"
        />
      </>
    ),
  },
];
