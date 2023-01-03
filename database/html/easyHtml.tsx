import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  form_string,
  html_str,
  semantic_tags_html_example,
  table_str,
  xhtml_str,
} from "./constant";

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
      <>
        <p className="simple_answers">
          To create a hyperlink in HTML, you will need to use the anchor tag{" "}
          <code>&lt;a&gt;</code> and specify the link in the <code>href</code>{" "}
          attribute.
        </p>
        <CodeSnippet codeString="<a href='https://www.google.com'>Google</a>" />
      </>
    ),
  },
  {
    question: "What is the difference between HTML and XHTML?",
    answer: (
      <>
        <p className="simple_answers">
          XHTML is an XML-based markup language that is used to create web
          pages. It is a stricter version of HTML.
          <br />
          XHTML is more strict than HTML, and requires that all tags are closed
          and that all elements are properly nested.
        </p>
        <br />
        <p className="simple_answers">Here is the example of XHTML:</p>{" "}
        <CodeSnippet codeString={xhtml_str} language="html" />
        <br />
        <p className="simple_answers">Here is the example of HTML:</p>
        <CodeSnippet codeString={html_str} language="html" />
      </>
    ),
  },
  {
    question: "How do you create a table in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a table in HTML, you can use the table element and its
          related elements, such as `thead`, `tbody`, and `td`.
        </p>
        <br />
        <p className="simple_answers">
          Here's an example of how you might create a table in HTML:
        </p>
        <CodeSnippet codeString={table_str} language="html" />
      </>
    ),
  },
  {
    question: "How do you add an image in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To add an image in HTML, you will need to use the image tag{" "}
          <code>&lt;img&gt;</code> and specify the image source in the{" "}
          <code>src</code> attribute.
        </p>
        <CodeSnippet codeString="<img src='https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' />" />
      </>
    ),
  },
  {
    question: "How do you create a form in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a form in HTML, you will need to use the form tag{" "}
          <code>&lt;form&gt;</code> and specify the form fields in the{" "}
          <code>&lt;input&gt;</code> tag.
          <br />
          You will also need to specify the form action in the{" "}
          <code>action</code> attribute.
        </p>
        <CodeSnippet codeString={form_string} language="html" />
      </>
    ),
  },
  {
    question: "How do you create a list in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a list in HTML, you will need to use the list tag{" "}
          <code>&lt;ul&gt;</code> and specify the list items in the{" "}
          <code>&lt;li&gt;</code> tag.
        </p>
        <CodeSnippet codeString="<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>" />
      </>
    ),
  },
  {
    question: "How do you create a heading in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a heading in HTML, you will need to use the heading tag{" "}
          <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> and specify the
          heading text in the <code>&lt;h1&gt;</code> tag.
        </p>
        <CodeSnippet
          codeString="<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6>"
          language="html"
        />
      </>
    ),
  },
  {
    question:
      "Can you explain the difference between id and class attributes in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          The id attribute is used to specify a unique id for an HTML element.
          <br />
          The class attribute is used to specify one or more class names for an
          HTML element.
          <br />
          The id attribute is used to point to a style in a style sheet, and the
          class attribute can be used to point to a style in a style sheet, or
          to be used by a script.
        </p>
      </>
    ),
  },
  {
    question:
      "What is difference between `display:none` and `visibility:hidden`?",
    answer: (
      <>
        <p className="simple_answers">
          The `<code>display:none</code>` property hides the element, and the
          element will not take up any space.
        </p>
        <p className="simple_answers">
          The `<code>visibility:hidden</code>` property hides the element, but
          the element will still take up the original space.
        </p>
      </>
    ),
  },
  {
    question: "What is semantic tags in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          Semantic tags are HTML tags that have a specific meaning.
        </p>
        <p className="simple_answers">
          For example, the <code>&lt;header&gt;</code> tag defines a header for
          a document or a section.
        </p>
        <CodeSnippet codeString={semantic_tags_html_example} language="html" />
      </>
    ),
  },
];
