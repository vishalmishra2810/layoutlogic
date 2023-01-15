import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ReplaceCode from "../../common/replaceCode/ReplaceCode";
import {
  background_example,
  border_example,
  example_display,
  padding_margin_example,
  selector_example,
  selector_example_all,
  zindex_example,
} from "./constant";

export const EASY_CSS = [
  {
    question:
      "What is the difference between the inline, internal, and external ways of applying CSS to an HTML document?",
    answer: (
      <>
        <p className="simple_answers">
          The inline way of applying CSS to an HTML document is by using the
          style attribute in the HTML element.
          <br /> The internal way of applying CSS to an HTML document is by
          using the style element in the head section of the HTML document.
          <br /> The external way of applying CSS to an HTML document is by
          using the link element in the head section of the HTML document.
        </p>
      </>
    ),
  },
  {
    question:
      "How do you use the color, font-size, and font-family properties to style text in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          To use the color, font-size, and font-family properties to style text
          in CSS, you will need to specify the selector and the property in the
          CSS file.
        </p>
        <CodeSnippet codeString={selector_example} language="css" />
      </>
    ),
  },
  {
    question:
      "How do you use the margin and padding properties to add space around elements in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          To use the margin and padding properties to add space around elements
          in CSS, you will need to specify the selector and the property in the
          CSS file.
        </p>
        <CodeSnippet codeString={padding_margin_example} language="css" />
      </>
    ),
  },
  {
    question:
      "How do you use the display, position, and float properties to control the layout of elements on a webpage in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          To use the display, position, and float properties to control the
          layout of elements on a webpage in CSS.
        </p>
        <br />
        <ReplaceCode
          codeString="
      The display property in CSS is used to specify the type of layout an element should use. It can take on many different values, including block , inline , and none . 
      "
          list={["display", "block", "inline", "none"]}
        />

        <br />
        <ReplaceCode
          codeString="
      The position property in CSS is used to specify the type of positioning method used for an element. It can take on many different values, including static , relative , absolute , fixed , and sticky .
      "
          list={[
            "position",
            "static",
            "relative",
            "absolute",
            "fixed",
            "sticky",
          ]}
        />
        <br />

        <ReplaceCode
          codeString="
      The float property in CSS is used to specify whether or not an element should float . It can take on many different values, including left , right , and none .
      "
          list={["float", "left", "right", "none"]}
        />
        <CodeSnippet codeString={example_display} language="css" />
      </>
    ),
  },
  {
    question:
      "How do you use the background-color and background-image properties to add a background color or image to an element in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          To use the background-color and background-image properties to add a
          background color or image to an element in CSS.
        </p>
        <br />
        <CodeSnippet codeString={background_example} language="css" />
      </>
    ),
  },
  {
    question: "How do you select elements using CSS selectors?",
    answer: (
      <>
        <p className="simple_answers">
          There are many different ways to select elements some of them are:
        </p>
        <br />
        <ul className="answer_list">
          <li className="answer_list_item">By element name</li>
          <li className="answer_list_item">By class name</li>
          <li className="answer_list_item">By id</li>
          <li className="answer_list_item">By attribute</li>
          <li className="answer_list_item">By pseudo-class</li>
          <li className="answer_list_item">By pseudo-element</li>
        </ul>
        <CodeSnippet codeString={selector_example_all} language="css" />
      </>
    ),
  },
  {
    question:
      "Can you explain the difference between the relative, absolute, and fixed position values in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          The relative position value in CSS is used to position an element
          relative to its normal position.
          <br />
          <br /> The absolute position value in CSS is used to position an
          element relative to its parent element.
          <br />
          <br /> The fixed position value in CSS is used to position an element
          relative to the browser window.
        </p>
      </>
    ),
  },
  {
    question:
      "How do you use the z-index property to control the stacking order of elements in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          The z-index property in CSS is used to control the stacking order of
          elements. <br /> It can take on many different values, including auto
          , number , and inherit .
        </p>
        <CodeSnippet codeString={zindex_example} language="css" />
      </>
    ),
  },
  {
    question:
      "Can you explain how to use the border property to style the border of an element in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          The border property in CSS is used to style the border of an element.{" "}
          <br /> It can take on many different values, including border-width ,
          border-style , border-color , and border-radius .
        </p>
        <CodeSnippet codeString={border_example} language="css" />
      </>
    ),
  },
  {
    question: "What are the advantages of using CSS?",
    answer: (
      <>
        <p className="simple_answers">The advantages of using CSS are:</p>
        <br />
        <ul className="answer_list">
          <li className="answer_list_item">
            CSS saves a lot of work. It can control the layout of multiple web
            pages all at once
          </li>
          <li className="answer_list_item">
            External stylesheets are stored in CSS files
          </li>
          <li className="answer_list_item">
            CSS is independent of HTML and can be used with any XML-based markup
            language
          </li>
          <li className="answer_list_item">
            CSS is easy to learn and understand
          </li>
          <li className="answer_list_item">
            CSS is compatible with all browsers
          </li>
          <li className="answer_list_item">
            CSS is a W3C standard and is an open standard
          </li>
          <li className="answer_list_item">
            CSS has been adopted by all major browsers
          </li>
        </ul>
      </>
    ),
  },
];
