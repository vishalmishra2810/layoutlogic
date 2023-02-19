import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  binary_search,
  bubble_sort,
  coin_change_backtracking,
  coin_change_greedy_algo,
  factorial_recursive,
  fib_bottom_up,
  fib_top_down,
  graph_example,
  lcm,
  tree_example,
} from "./constant";

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
  {
    question: "What is dynamic programming and how to implement it?",
    answer: (
      <>
        <p className="simple-answer">
          Dynamic programming is both a mathematical optimization method and a
          computer programming method. The method was developed by Richard
          Bellman in the 1950s and has found applications in numerous fields,
          from aerospace engineering to economics.
        </p>
        <br />
        <p className="simple-answer">
          Dynamic programming is a method for solving a complex problem by
          <b> breaking it down into a collection of simpler subproblems</b>,
          solving each of those subproblems just once, and storing their
          solutions. The next time the same subproblem occurs, instead of
          recomputing its solution, one simply looks up the previously computed
          solution, thereby saving computation time at the expense of a
          (hopefully) modest expenditure in storage space.
        </p>
        <br />
        <p className="simple-answer">
          The technique of storing solutions to subproblems instead of
          recomputing them is called <b>memoization</b> (not to be confused with
          the computer science term of similar name). The goal of dynamic
          programming is to identify such subproblems and to store their
          solutions using a memory-based data structure (array, map,etc).
        </p>
        <br />
        <br />
        <p className="simple-answer">
          We will solve dynamic programming problem using top-down approach and
          bottom-up approach.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Top-down approach</strong>
        </p>
        <p className="simple-answer">
          Top-down approach is also called memoization. We will solve the
          problem recursively and store the result in a table. If the same
          subproblem occurs again, we will return the saved result instead of
          recomputing it.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Bottom-up approach</strong>
        </p>
        <p className="simple-answer">
          Bottom-up approach is also called tabulation. We will solve the
          problem iteratively and store the result in a table. If the same
          subproblem occurs again, we will return the saved result instead of
          recomputing it.
        </p>
        <br /> <br />
        <p className="simple-answer">
          <strong>Example</strong>
        </p>
        <p className="simple-answer">
          Let's say we have a problem to find the nth fibonacci number. The
          fibonacci sequence is defined as follows:
        </p>
        <p className="simple-answer">
          <strong>fib(0) = 0</strong>
        </p>
        <p className="simple-answer">
          <strong>fib(1) = 1</strong>
        </p>
        <p className="simple-answer">
          <strong>fib(n) = fib(n-1) + fib(n-2)</strong>
        </p>
        <br />
        <p className="simple-answer">
          We will solve this problem using top-down approach and bottom-up
          approach.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Top-down approach</strong>
        </p>
        <p className="simple-answer">
          We will solve the problem recursively and store the result in a table.
          If the same subproblem occurs again, we will return the saved result
          instead of recomputing it.
        </p>
        <CodeSnippet codeString={fib_top_down} language="javascript" />
        <br />
        <p className="simple-answer">
          <strong>Bottom-up approach</strong>
        </p>
        <p className="simple-answer">
          We will solve the problem iteratively and store the result in a table.
          If the same subproblem occurs again, we will return the saved result
          instead of recomputing it.
        </p>
        <CodeSnippet codeString={fib_bottom_up} language="javascript" />
      </>
    ),
    topic: ["dynamic-programming"],
  },
  {
    question: "What is greedy algorithm and how to implement it?",
    answer: (
      <>
        <p className="simple-answer">
          Greedy algorithms are a class of algorithms that follow the problem
          solving heuristic of making the locally optimal choice at each stage
          with the hope of finding a global optimum. In many problems, a greedy
          strategy does not in general produce an optimal solution, but
          nonetheless a greedy heuristic may yield locally optimal solutions
          that approximate a global optimal solution in a reasonable time.
        </p>
        <br />
        <p className="simple-answer">
          Greedy algorithms are used for optimization problems. An optimization
          problem can be solved using Greedy if the problem has the following
          property:
        </p>
        <ul className="answer_list">
          <li className="answer_list_item">
            <strong>Optimal Substructure</strong>
            <p className="simple-answer">
              A given problem has Optimal Substructure Property if optimal
              solution of the given problem can be obtained by using optimal
              solutions of its subproblems.
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Overlapping Subproblems</strong>
            <p className="simple-answer">
              A given problem has Overlapping Subproblems Property if it can be
              broken into subproblems which are reused several times.
            </p>
          </li>
        </ul>
        <br />
        <p className="simple-answer">
          Greedy algorithms find the optimal solution to a problem by making the
          locally optimal choice at each stage. In many problems, a greedy
          strategy does not in general produce an optimal solution, but
          nonetheless a greedy heuristic may yield locally optimal solutions
          that approximate a global optimal solution in a reasonable time.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Example</strong>
        </p>
        <p className="simple-answer">
          Let's say we have a problem to find the minimum number of coins that
          make a given value. We have infinite supply of each of the
          denominations in Indian currency, i.e., we have infinite supply of{" "}
          {`{`}1, 2, 5, 10, 20, 50, 100, 500{`}`} valued coins/notes.
        </p>
        <br />
        <p className="simple-answer">
          We will solve this problem using greedy algorithm.
        </p>
        <CodeSnippet
          codeString={coin_change_greedy_algo}
          language="javascript"
        />
      </>
    ),
    topic: ["greedy"],
  },
  {
    question: "What is backtracking and how to implement it?",
    answer: (
      <>
        <p className="simple-answer">
          Backtracking is an algorithmic-technique for solving problems
          recursively by trying to build a solution incrementally, one piece at
          a time, removing those solutions that fail to satisfy the constraints
          of the problem at any point of time (by time, here, is referred to the
          time elapsed till reaching any level of the search tree).
        </p>
        <br />
        <p className="simple-answer">
          Backtracking is mainly an optimization over brute-force. Backtracking
          tries to increase efficiency by not considering all the possible
          solutions. If we solve the problem by simply considering all
          possibilities then it will be a brute-force approach. Backtracking
          tries to avoid this by checking the possibility of a solution before
          going ahead and by removing the solution if it doesn't satisfy the
          constraints.
        </p>
        <br />
        <p className="simple-answer">
          Backtracking can be applied only for problems which admit the concept
          of a "partial candidate solution" and a relatively quick test of
          whether it can possibly be completed to a valid solution.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Example</strong>
        </p>
        <p className="simple-answer">
          Let's say we have a problem to find the minimum number of coins that
          make a given value. We have infinite supply of each of the
          denominations in Indian currency, i.e., we have infinite supply of{" "}
          {`{`}1, 2, 5, 10, 20, 50, 100, 500{`}`} valued coins/notes.
        </p>
        <br />
        <p className="simple-answer">
          We will solve this problem using backtracking.
        </p>
        <CodeSnippet
          codeString={coin_change_backtracking}
          language="javascript"
        />
      </>
    ),
    topic: ["backtracking"],
  },
  {
    question: "Explain bit manipulation ",
    answer: (
      <>
        <p className="simple-answer">
          Bit manipulation is a technique to manipulate bits and perform
          bit-level and low-level operations. In this article, we will learn
          about bit manipulation and various bit manipulation tricks.
        </p>
        <br />
        <p className="simple-answer">
          Bit manipulation is the act of algorithmically manipulating bits or
          other pieces of data shorter than a word. Computer programming tasks
          that require bit manipulation include low-level device control, error
          detection and correction algorithms, data compression, and encryption
          algorithms.
        </p>
        <br />
        <p className="simple-answer">
          Bit manipulation is used to manipulate value stored in the computer's
          memory. Bit manipulation is faster than arithmetic operations and
          makes some tasks easier to perform. Bit manipulation is also used in
          low-level programming, where hardware chips are directly accessed.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Bitwise Operators</strong>
        </p>
        <p className="simple-answer">
          Bitwise operators are used to perform bit-by-bit operations on
          integers. The operators are as follows:
        </p>
        <ul className="answer_list">
          <li className="answer_list_item">
            <strong>Bitwise AND</strong>
            <p className="simple-answer">
              The bitwise AND operator copies a bit to the result if it exists
              in both operands. (A & B) will give 12 which is 0000 1100
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Bitwise OR</strong>
            <p className="simple-answer">
              The bitwise OR operator copies a bit if it exists in either
              operand. (A | B) will give 61 which is 0011 1101
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Bitwise XOR</strong>
            <p className="simple-answer">
              The bitwise XOR operator copies the bit if it is set in one
              operand but not both. (A ^ B) will give 49 which is 0011 0001
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Bitwise NOT</strong>
            <p className="simple-answer">
              The bitwise NOT operator is unary and has the effect of 'flipping'
              bits. (~A ) will give -61 which is 1100 0011 in 2's complement
              form due to a signed binary number.
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Left Shift</strong>
            <p className="simple-answer">
              The left operands value is moved left by the number of bits
              specified by the right operand. (A {"<<"} 2) will give 240 which
              is 1111 0000
            </p>
          </li>
          <li className="answer_list_item">
            <strong>Right Shift</strong>
            <p className="simple-answer">
              The left operands value is moved right by the number of bits
              specified by the right operand. (A {">>"} 2) will give 15 which is
              0000 1111
            </p>
          </li>
        </ul>
      </>
    ),
    topic: ["bit-manipulation"],
  },
  {
    question: "What is recursion and how to implement it?",
    answer: (
      <>
        <p className="simple-answer">
          Recursion is a method of solving a problem where the solution depends
          on solutions to smaller instances of the same problem (as opposed to
          iteration). The approach can be applied to many types of problems, and
          recursion is one of the central ideas of computer science.
        </p>
        <br />
        <p className="simple-answer">
          A recursive algorithm must have a base case. The base case is a
          situation in which the solution is sufficiently simple that it can be
          solved without using recursion. The solution to the base case is
          returned. The solution of the bigger problem is created by combining
          the solution to the base case with the solution to smaller instances
          of the same problem.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Example</strong>
        </p>
        <p className="simple-answer">
          Let's say we have a problem to find the factorial of a number. We will
          solve this problem using recursion.
        </p>
        <CodeSnippet codeString={factorial_recursive} language="javascript" />
      </>
    ),
    topic: ["recursion"],
  },
  {
    question: "Explain sorting with bubble sort example",
    answer: (
      <>
        <p className="simple-answer">
          Sorting is the process of arranging the items in a collection in some
          kind of order. The most common order is from smallest to largest, but
          it's also possible to order the items alphabetically or based on
          custom criteria. Sorting is useful because it makes it easier to find
          or verify items in a collection.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Example</strong>
        </p>
        <p className="simple-answer">
          Let's say we have a problem to sort an array of numbers. We will solve
          this problem using bubble sort.
        </p>
        <CodeSnippet codeString={bubble_sort} language="javascript" />
      </>
    ),
    topic: ["sorting"],
  },
  {
    question: "Explain searching with binary search example",
    answer: (
      <>
        <p className="simple-answer">
          Searching is the process of finding an item with specified properties
          among a collection of items. The collection may be stored in an array
          or any other data structure. The item may have a specific position or
          may need to be found by matching one or more properties.
        </p>
        <br />
        <p className="simple-answer">
          <strong>Example</strong>
        </p>
        <p className="simple-answer">
          Let's say we have a problem to search an array of numbers. We will
          solve this problem using binary search.
        </p>
        <CodeSnippet codeString={binary_search} language="javascript" />
      </>
    ),
    topic: ["searching"],
  },
  {
    question: "Find LCM of two numbers",
    answer: (
      <>
        <CodeSnippet codeString={lcm} language="javascript" />
      </>
    ),
    topic: ["math"],
    type: "question",
    slug: "lcm",
  },
];
