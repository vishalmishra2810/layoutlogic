import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ListShow from "../../common/listShow/ListShow";
import {
  array_flat_example,
  palindrome_string_example,
  reverse_word_string_example,
  string_example,
} from "./constant";

export const EASY_CODING_QUESTIONS = [
  {
    question:
      "What is string in JavaScript, and what are some methods to work with strings?",
    answer: (
      <>
        <p className="simple-answer">
          A string is a sequence of characters. It is a primitive data type in
          JavaScript. <br />
          Strings are immutable, which means that once created, they cannot be
          changed.
        </p>
        <p className="simple-answer">
          Since strings are a sequence of characters, so we can access each
          character using its index.
        </p>
        <br />
        <p className="simple-answer">
          Here are some methods that can be used to work with strings in
          JavaScript:
        </p>
        <ListShow
          list={[
            "charAt()",
            "charCodeAt()",
            "concat()",
            "includes()",
            "slice()",
            "split()",
            "substr()",
            "substring()",
            "toLowerCase()",
            "toUpperCase()",
            "trim()",
          ]}
          typeOfList="ul"
        />
        <p className="simple-answer">Here is an example of a string:</p>
        <CodeSnippet codeString={string_example} language="javascript" />
      </>
    ),
    topic: ["string"],
  },
  {
    question: `Write a function that takes in a string and returns a new string with the words reversed. For example, given the string "The quick brown fox", the function should return "fox brown quick The"`,
    answer: (
      <>
        <CodeSnippet
          codeString={reverse_word_string_example}
          language="javascript"
        />
      </>
    ),
    topic: ["string"],
  },
  {
    question:
      "Write a program that checks if a given string is a palindrome (a word or phrase that reads the same backwards as forwards).",
    answer: (
      <>
        <p className="simple-answer">
          Palindrome is a word or phrase that reads the same backwards as
          forwards. For example, “madam” is a palindrome. Because it reads the
          same backwards as forwards.
        </p>
        <CodeSnippet
          codeString={palindrome_string_example}
          language="javascript"
        />
      </>
    ),
    topic: ["string"],
  },
  {
    question: "How can I work with arrays in JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          Array is a data structure that stores a collection of elements. It is
          a linear data structure where elements are stored in contiguous memory
          locations.
        </p>
        <p className="simple-answer">
          Here are some methods that can be used to work with arrays in
          JavaScript:
        </p>
        <br />
        <ul className="answer_list">
          <li className="answer_list_item">Array.prototype.concat()</li>
          <li className="answer_list_item">Array.prototype.every()</li>
          <li className="answer_list_item">Array.prototype.fill()</li>
          <li className="answer_list_item">Array.prototype.filter()</li>
          <li className="answer_list_item">Array.prototype.find()</li>
          <li className="answer_list_item">Array.prototype.findIndex()</li>
          <li className="answer_list_item">Array.prototype.forEach()</li>
          <li className="answer_list_item">Array.prototype.includes()</li>
          <li className="answer_list_item">Array.prototype.indexOf()</li>
          <li className="answer_list_item">Array.prototype.join()</li>
          <li className="answer_list_item">Array.prototype.lastIndexOf()</li>
        </ul>
      </>
    ),
    topic: ["array"],
  },
  {
    question:
      "Write a polyfill for Array.flat() , Array.flatMap() methods if it doesn't exist.",
    answer: (
      <>
        <p className="simple-answer">
          Array.flat() method is used to flatten an array of nested arrays into
          a single array.
        </p>
        <p className="simple-answer">
          Array.flatMap() method is used to apply a function to each element in
          an array and then flatten the result into a new array.
        </p>
        <p className="simple-answer">
          Here is an example of using Array.flat() and Array.flatMap() method:
        </p>
        <CodeSnippet codeString={array_flat_example} language="javascript" />
      </>
    ),
    topic: ["array"],
  },
];
