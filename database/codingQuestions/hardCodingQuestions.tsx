import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import { tree_example } from "./constant";

export const HARD_CODING_QUESTIONS = [
  {
    question: "How to implement a tree in JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          A tree is a hierarchical data structure. <br /> The topmost node is
          called root of the tree. <br /> The elements that are directly under
          an element are called its children. <br /> The element directly above
          something is called its parent.
        </p>
        <p className="simple-answer">
          A tree data structure can be defined recursively (locally) as a
          collection of nodes (starting at a root node), where each node is a
          data structure consisting of a value, together with a list of
          references to nodes (the "children"), with the constraints that no
          reference is duplicated, and none points to the root.
        </p>
        <p className="simple-answer">Here is an example of a tree:</p>
        <CodeSnippet codeString={tree_example} language="javascript" />
      </>
    ),
  },
];
