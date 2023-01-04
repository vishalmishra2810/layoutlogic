import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  nexted_objexts_state_example,
  server_side_rendering_example,
} from "./constant";

export const HARD_REDUX = [
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
