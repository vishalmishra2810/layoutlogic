import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ReplaceCode from "../../common/replaceCode/ReplaceCode";
import {
  background_example,
  example_display,
  padding_margin_example,
  selector_example,
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
        <br />
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
        <br />
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

        <br />
        <CodeSnippet codeString={example_display} language="css" />
        <br />
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
    question:"How do you select elements using CSS selectors?",
    answer: (
      <>
      </>
    ),
  },
  {
    question:"How do you use the display, float, and clear properties to control the layout of elements in CSS?",
    answer: (
      <>
      </>
    ),
  },
  {
    question:"Can you explain the difference between the relative, absolute, and fixed position values in CSS?",
    answer: (
      <>
      </>
    ),
  },
  {
    question:"How do you use the z-index property to control the stacking order of elements in CSS?",
    answer: (
      <>
      </>
    ),
  },
  {
    question:"Can you explain how to use the border property to style the border of an element in CSS?",
    answer: (
      <>
      </>
    ),
  },
  
];
