import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  anagram_example,
  hash_table_example,
  linked_list_example,
  linked_list_reverse_example,
  stack_queue_example,
} from "./constant";

export const MEDIUM_CODING_QUESTIONS = [
  {
    question: "How to implement a linked list in JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          A linked list is a linear data structure, in which the elements are
          not stored at contiguous memory locations. <br /> The elements in a
          linked list are linked using pointers.
        </p>
        <p className="simple-answer">
          A linked list consists of nodes where each node contains a data field
          and a reference(link) to the next node in the list.
        </p>
        <p className="simple-answer">Here is an example of a linked list:</p>
        <CodeSnippet codeString={linked_list_example} language="javascript" />
      </>
    ),
    topic: ["linked-list"],
  },
  {
    question: "How to reverse a linked list in JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          To reverse a linked list, we need to change the next pointer of each
          node so that it points to its previous element. <br /> Since a node
          does not have reference to its previous node, we must store its
          previous element beforehand. <br /> You can refer to the following
          example:
        </p>
        <CodeSnippet
          codeString={linked_list_reverse_example}
          language="javascript"
        />
      </>
    ),
    topic: ["linked-list"],
    type: "question",
  },
  {
    question: "How can I implement a stack or queue in JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          A stack is a linear data structure that stores items in a Last-In/
          First-Out (LIFO) or First-In/Last-Out (FILO) manner. <br /> In stack,
          a new element is added at one end and an element is removed from that
          end only. <br /> The insert and delete operations are often called
          push and pop.
        </p>
        <br />
        <p className="simple-answer">
          A queue is a linear structure which follows a particular order in
          which the operations are performed. <br /> The order is First-In-
          First-Out (FIFO). <br /> A good example of a queue is any queue of
          consumers for a resource where the consumer that came first is served
          first. <br /> The difference between stacks and queues is in removing.
          <br /> In a stack we remove the item the most recently added; in a
          queue, we remove the item the least recently added.
        </p>
        <CodeSnippet codeString={stack_queue_example} language="javascript" />
      </>
    ),
    topic: ["stack", "queue"],
  },
  {
    question: "How to implement a hash table in JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          A hash table is a data structure that is used to store keys/value
          pairs.
        </p>
        <p className="simple-answer">
          It uses a hash function to compute an index into an array of buckets
          or slots, from which the desired value can be found.
        </p>
        <p className="simple-answer">
          Hash tables are used to implement associative arrays, database
          indexing, caches, sets, and maps.
        </p>
        <p className="simple-answer">
          A hash table uses a hash function to compute an index into an array of
          buckets or slots, from which the desired value can be found.
        </p>
        <CodeSnippet codeString={hash_table_example} language="javascript" />
      </>
    ),
    topic: ["hash-map"],
  },
  {
    question: "How to find two words are Anagrams or not in JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          An anagram is a word or phrase formed by rearranging the letters of a
          different word or phrase, typically using all the original letters
          exactly once.
        </p>
        <p className="simple-answer">
          For example, the word anagram can be rearranged into nag a ram, or the
          word binary into brainy or the word adobe into abode.
        </p>
        <p className="simple-answer">
          Two words are anagrams of each other if they both contain the same
          letters. For example, listen and silent are anagrams.
        </p>
        <p className="simple-answer">
          The challenge is to write a function that will find all the anagrams
          of a word from a list. You will be given two inputs a word and an
          array with words. You should return an array of all the anagrams or an
          empty array if there are none.
        </p>
        <CodeSnippet codeString={anagram_example} language="javascript" />
      </>
    ),
    topic: ["hash-map", "string"],
    type: "question",
    slug : "anagram"
  },
];
