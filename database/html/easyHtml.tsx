import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import { table_str } from "./constant";

export const EASY_HTML = [
  {
    question: "What is HTML?",
    answer: (
      <p className="simple_answers">
        HTML stands for Hyper Text Markup Language. It is the standard markup
        language for creating web pages and web applications.
        <br />
        It is used to give meaning to text, images, and other content, and to
        specify how they should be displayed in a web browser.
      </p>
    ),
  },
  {
    question: "How do you create an HTML file?",
    answer: (
      <p className="simple_answers">
        To create an HTML file, you will need to use a text editor (such as
        Notepad or TextEdit) to write your HTML code. Save the file with an
        .html or .htm file extension.
      </p>
    ),
  },
  {
    question: "How do you create a hyperlink in HTML?",
    answer: (
      <p className="simple_answers">
        To create a hyperlink in HTML, you will need to use the anchor tag{" "}
        <code>&lt;a&gt;</code> and specify the link in the <code>href</code>{" "}
        attribute.
      </p>
    ),
  },
  {
    question: "What is the difference between HTML and XHTML?",
    answer: (
      <p className="simple_answers">
        XHTML is an XML-based markup language that is used to create web pages.
        It is a stricter version of HTML.
        <br />
        XHTML is more strict than HTML, and requires that all tags are closed
        and that all elements are properly nested.
      </p>
    ),
  },
  {
    question: "How do you create a table in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a table in HTML, you will need to use the table tag{" "}
          <code>&lt;table&gt;</code> and specify the table rows in the{" "}
          <code>&lt;tr&gt;</code> tag.
          <br />
          You will also need to specify the table data in the{" "}
          <code>&lt;td&gt;</code> tag.
        </p>
        <br />
        <CodeSnippet codeString={table_str} language="html" />
      </>
    ),
  },
  {
    question: "How do you add an image in HTML?",
    answer: (
      <p className="simple_answers">
        To add an image in HTML, you will need to use the image tag{" "}
        <code>&lt;img&gt;</code> and specify the image source in the{" "}
        <code>src</code> attribute.
      </p>
    ),
  },
  {
    question: "How do you create a form in HTML?",
    answer: (
      <p className="simple_answers">
        To create a form in HTML, you will need to use the form tag{" "}
        <code>&lt;form&gt;</code> and specify the form fields in the{" "}
        <code>&lt;input&gt;</code> tag.
        <br />
        You will also need to specify the form action in the <code>
          action
        </code>{" "}
        attribute.
      </p>
    ),
  },
  {
    question: "How do you create a list in HTML?",
    answer: (
      <p className="simple_answers">
        To create a list in HTML, you will need to use the list tag{" "}
        <code>&lt;ul&gt;</code> and specify the list items in the{" "}
        <code>&lt;li&gt;</code> tag.
      </p>
    ),
  },
  {
    question: "How do you create a heading in HTML?",
    answer: (
      <p className="simple_answers">
        To create a heading in HTML, you will need to use the heading tag{" "}
        <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> and specify the
        heading text in the <code>&lt;h1&gt;</code> tag.
      </p>
    ),
  },
];