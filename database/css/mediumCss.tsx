import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ReplaceCode from "../../common/replaceCode/ReplaceCode";
import {
  animation_example,
  center_element,
  dropdown_menu,
  responsive_image_galary,
  responsive_layout,
} from "./constant";

export const MEDIUM_CSS = [
  {
    question:
      "How do you center an element horizontally and vertically within its parent element using CSS?",
    answer: (
      <>
        <p className="simple_answers">
          To center an element horizontally and vertically within its parent
          element using CSS, you will need to specify the selector and the
          property in the CSS file and you can use flex or grid to make it
          center.
        </p>
        <br />
        <CodeSnippet codeString={center_element} language="css" />
      </>
    ),
  },
  {
    question: "How do you create a responsive layout using CSS?",
    answer: (
      <>
        <ReplaceCode
          codeString="To create a responsive layout using CSS, you can use a combination of the width , max-width , and min-width properties, along with media queries ."
          list={["width", "max-width", "min-width", "media queries"]}
        />
        <br />
        <CodeSnippet codeString={responsive_layout} language="css" />
        <br />
        <ReplaceCode
          codeString="In this example, the .element class would have a width of 100% by default. On devices with a viewport width of 800px or more, the width of the element would be set to 50%. On devices with a viewport width of 400px or more, the width of the element would be set to 75%."
          list={["width", "max-width", "min-width", "media queries"]}
        />
      </>
    ),
  },
  {
    question: "How do you animate an element using CSS?",
    answer: (
      <>
        <ReplaceCode
          codeString="
        To animate an element using CSS, you will need to specify the selector and the property in the CSS file and you can use the @keyframes rule to create the animation.
        "
          list={["@keyframes"]}
        />
        <br />
        <CodeSnippet codeString={animation_example} language="css" />
      </>
    ),
  },
  {
    question: "How do you create a responsive image gallery using CSS?",
    answer: (
      <>
        <ReplaceCode
          codeString="To create a responsive image gallery using CSS, you can use the display : flex property and the flex-wrap property, along with media queries ."
          list={["display", "flex-wrap", "media queries"]}
        />
        <br />
        <p className="simple_answers">
          here is the code for the image gallery:
        </p>
        <br />
        <CodeSnippet codeString={responsive_image_galary} language="css" />
      </>
    ),
  },
  {
    question: "How do you create a dropdown menu using CSS?",
    answer: (
      <>
        <ReplaceCode
          codeString="To create a dropdown menu using CSS, you can use the display : none property and the :hover pseudo-class you can make the dropdown menu appear when the user hovers over the menu item."
          list={["display", ":hover"]}
        />
        <br />
        <p className="simple_answers">
          here is the code for the dropdown menu:
        </p>
        <br />
        <CodeSnippet codeString={dropdown_menu} language="css" />
      </>
    ),
  },
  {
    question:
      "Can you explain the difference between the box-sizing property and the width and height properties in CSS?",
    answer: <></>,
  },
  {
    question:
      "How do you use the position, top, right, bottom, and left properties to position elements in CSS?",
    answer: <></>,
  },
  {
    question:
      "How do you use the box-shadow property to add a shadow to an element in CSS?",
    answer: <></>,
  },
  {
    question:
      "Can you explain the difference between the ::before and ::after pseudo-elements in CSS?",
    answer: <></>,
  },
];
