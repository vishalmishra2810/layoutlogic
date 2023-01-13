import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import {
  details_summary_string,
  dropdown_string,
  geolocation_string,
  iframe_tag_string,
  inline_style_html_string,
  list_string_numered_or_bullet,
  meta_tag_string,
  web_worker_string,
} from "./constant";

export const MEDIUM_HTML = [
  {
    question:
      "What is the difference between a block-level element and an inline element?",
    answer: (
      <>
        <p className="simple_answers">
          these are the differences between block-level and inline elements:
        </p>
        <MakeDifferentiate
          totalColumn={2}
          headerData={["Block-level element", "Inline element"]}
          columnDataLength={3}
          columnData={{
            0: [
              "Block-level elements start on a new line and take up the full width available (stretches out to the left and right as far as it can).",
              "Block-level elements can contain inline elements and other block-level elements.",
              "Examples of block-level elements are <div>, <h1>, <p>, <form>, and <li>.",
            ],
            1: [
              "Inline elements do not start on a new line and only take up as much width as necessary.",
              "Inline elements can only contain text and other inline elements.",
              "Examples of inline elements are <span>, <a>, <b>, <img>, and <input>.",
            ],
          }}
        />
      </>
    ),
  },
  {
    question:
      "How do you create a form in HTML and what are the different types of form elements available?",
    answer: (
      <>
        <p className="simple_answers">
          To create a form in HTML, you will need to use the form tag{" "}
          <code>&lt;form&gt;</code> and specify the form fields in the{" "}
          <code>&lt;input&gt;</code> tag.
          <br />
          You will also need to specify the form action in the{" "}
          <code>action</code> attribute.
          <br />
          <br />
          The different types of form elements available are:
          <br />
          <ul className="answer_list">
            <li className="answer_list_item">
              <code>&lt;input type="text"&gt;</code> - creates a single-line
              text input field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="password"&gt;</code> - creates a password
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="radio"&gt;</code> - creates a radio button
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="checkbox"&gt;</code> - creates a checkbox
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="submit"&gt;</code> - creates a submit button
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="reset"&gt;</code> - creates a reset button
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="button"&gt;</code> - creates a button
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="file"&gt;</code> - creates a file upload
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="hidden"&gt;</code> - creates a hidden input
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="image"&gt;</code> - creates an image input
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="email"&gt;</code> - creates an email input
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="number"&gt;</code> - creates a number input
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="range"&gt;</code> - creates a range input
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="search"&gt;</code> - creates a search input
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="tel"&gt;</code> - creates a telephone input
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="url"&gt;</code> - creates a URL input field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="date"&gt;</code> - creates a date input
              field
            </li>
            <li className="answer_list_item">
              <code>&lt;input type="time"&gt;</code> - creates a time input
              field
            </li>
          </ul>
        </p>
        <br />
      </>
    ),
  },

  {
    question:
      "How do you insert an image in HTML and how do you specify the dimensions of the image?",
    answer: (
      <>
        <p className="simple_answers">
          To insert an image in HTML, you will need to use the image tag{" "}
          <code>&lt;img&gt;</code> and specify the image source in the{" "}
          <code>src</code> attribute.
          <br />
          You will also need to specify the image dimensions in the{" "}
          <code>width</code> and <code>height</code> attributes.
        </p>
        <CodeSnippet
          codeString="<img src='https://www.google.com' width='100' height='100' />"
          language="html"
        />
      </>
    ),
  },

  {
    question:
      "What is the difference between the div and span elements in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          The div element is a block-level element and the span element is an
          inline element.
        </p>
        <MakeDifferentiate
          totalColumn={2}
          headerData={["div", "span"]}
          columnDataLength={4}
          columnData={{
            0: [
              "Block-level element",
              "Used to group block-level or inline elements",
              "Can be styled with CSS",
              "Can contain block-level and inline elements",
            ],
            1: [
              "Inline element",
              "Used to group inline elements",
              "Can be styled with CSS",
              "Can contain inline elements",
            ],
          }}
        />
      </>
    ),
  },

  {
    question:
      "How do you create a dropdown menu in HTML using the select and option elements?",
    answer: (
      <>
        <p className="simple_answers">
          To create a dropdown menu in HTML, you will need to use the select tag{" "}
          <code>&lt;select&gt;</code> and specify the options in the{" "}
          <code>&lt;option&gt;</code> tag.
        </p>
        <CodeSnippet codeString={dropdown_string} language="html" />
      </>
    ),
  },

  {
    question:
      "How do you use the style attribute in HTML to apply inline styles to an element?",
    answer: (
      <>
        <p className="simple_answers">
          To use the style attribute in HTML to apply inline styles to an
          element, you will need to specify the style attribute in the element
          and specify the style properties in the attribute.
        </p>
        <CodeSnippet codeString={inline_style_html_string} language="html" />
      </>
    ),
  },

  {
    question:
      "How do you use the class and id attributes in HTML to apply styles using CSS?",
    answer: (
      <>
        <p className="simple_answers">
          To use the class and id attributes in HTML to apply styles using CSS,
          you will need to specify the class and id attributes in the element
          and specify the style properties in the CSS file.
        </p>
        <CodeSnippet
          codeString="
        <p class='red'>This is paragraph</p>
        <p id='red'>This is  paragraph</p>
        "
          language="html"
        />
        <CodeSnippet
          codeString="
        .red {
          color: red;
        }
        #red {
          color: red;
        }
        "
          language="css"
        />
      </>
    ),
  },

  {
    question:
      "How do you create a numbered or bulleted list in HTML using the ol and ul elements?",
    answer: (
      <>
        <p className="simple_answers">
          To create a numbered or bulleted list in HTML, you will need to use
          the ordered list tag <code>&lt;ol&gt;</code> and unordered list tag{" "}
          <code>&lt;ul&gt;</code> and specify the list items in the{" "}
          <code>&lt;li&gt;</code> tag.
        </p>
        <CodeSnippet
          codeString={list_string_numered_or_bullet}
          language="html"
        />
      </>
    ),
  },
  {
    question:
      "How do you use the details and summary elements to create an expandable section in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To use the details and summary elements to create an expandable
          section in HTML, you will need to use the details tag{" "}
          <code>&lt;details&gt;</code> and summary tag{" "}
          <code>&lt;summary&gt;</code>.
        </p>
        <CodeSnippet codeString={details_summary_string} language="html" />
      </>
    ),
  },
  {
    question: "What is use of meta tag in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          The meta tag is used to provide metadata about the HTML document.
          Metadata will not be displayed on the page but will be machine
          parsable.
        </p>
        <CodeSnippet codeString={meta_tag_string} language="html" />
      </>
    ),
  },
  {
    question: "What is use of iframe tag in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          The iframe tag is used to embed another document within the current
          HTML document.
        </p>
        <CodeSnippet codeString={iframe_tag_string} language="html" />
      </>
    ),
  },
  {
    question:
      "How do you use the Web Workers API to run background tasks in a web page?",
    answer: (
      <>
        <p className="simple_answers">
          To use the Web Workers API to run background tasks in a web page, you
          will need to create a new Worker object and specify the script to be
          run in the worker.
        </p>
        <CodeSnippet codeString={web_worker_string} language="html" />
      </>
    ),
  },
  {
    question:
      "How do you use the HTML5 Geolocation API to access the user's location?",
    answer: (
      <>
        <p className="simple_answers">
          To use the HTML5 Geolocation API to access the user's location, you
          will need to use the navigator.geolocation object and specify the
          function to be executed when the location is available.
        </p>
        <CodeSnippet codeString={geolocation_string} language="html" />
      </>
    ),
  },
];
