import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import { graph_example, tree_example } from "./constant";

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
    topic: ["tree"],
  },
  {
    question: "How to implement graph in JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          A graph is a non-linear data structure that can be looked at as a
          collection of vertices (or nodes) potentially connected by line
          segments named edges.
        </p>
        <br />
        <p className="simple-answer">
          A graph data structure can be defined as a pair of sets (V, E), where
          V is the set of vertices and E is the set of edges, which are
          2-element subsets of V.
        </p>
        <br />

        <p className="simple-answer">
          There are mainly two ways to represent a graph.
        </p>
        <ul className="answer_list">
          <li className="answer_list_item">
            <strong> Adjacency Matrix</strong>
            <p className="simple-answer">
              An adjacency matrix is a 2D array of size V x V where V is the
              number of vertices in a graph.
              <br /> Let the 2D array be adj[][], a slot adj[i][j] = 1 indicates
              that there is an edge from vertex i to vertex j. Adjacency matrix
              for undirected graph is always symmetric. Adjacency Matrix is also
              used to represent weighted graphs. If adj[i][j] = w, then there is
              an edge from vertex i to vertex j with weight w.
            </p>
          </li>
          <li className="answer_list_item">
            <strong> Adjacency List</strong>
            <p className="simple-answer">
              An adjacency list is an array of linked lists. The size of the
              array is equal to the number of vertices. Let the array be
              array[]. An entry array[i] represents the linked list of vertices
              adjacent to the ith vertex. This representation can also be used
              to represent a weighted graph. The weights of edges can be
              represented as nodes with additional information.
            </p>
          </li>
        </ul>
        <br />
        <p className="simple-answer">
          We are mainly using adjacency list to implement graph because it is
          more space efficient.
        </p>
        <br />
        <p className="simple-answer">Here is an example of a graph:</p>
        <CodeSnippet codeString={graph_example} language="javascript" />
      </>
    ),
    topic: ["graph"],
  },
];
