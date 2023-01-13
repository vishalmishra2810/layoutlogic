import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ReplaceCode from "../../common/replaceCode/ReplaceCode";
import {
  full_screen_background_image,
  parallax_scrolling,
  sticky_header,
} from "./constant";

export const HARD_CSS = [
  {
    question: "How do you create a sticky header using CSS?",
    answer: (
      <>
        <ReplaceCode
          codeString="To create a sticky header using CSS, you will need to specify the selector and the property in the CSS file and you can use the position property to make it sticky."
          list={["position"]}
        />
        <CodeSnippet codeString={sticky_header} language="css" />
      </>
    ),
  },
  {
    question: "How do you create a parallax scrolling effect using CSS?",
    answer: (
      <>
        <ReplaceCode
          codeString="To create a parallax scrolling effect using CSS, you will need to specify the selector and the property in the CSS file and you can use the background-attachment property to make it parallax."
          list={["background-attachment"]}
        />
        <CodeSnippet codeString={parallax_scrolling} language="css" />
      </>
    ),
  },
  {
    question: "How do you create a fullscreen background image using CSS?",
    answer: (
      <>
        <ReplaceCode
          codeString="To create a fullscreen background image using CSS, you will need to specify the selector and the property in the CSS file and you can use the background-size property to make it fullscreen."
          list={["background-size"]}
        />
        <CodeSnippet codeString={full_screen_background_image} language="css" />
      </>
    ),
  },
  // {
  //   question:
  //     "How do you use the CSS @supports rule to apply styles based on browser support for specific CSS features?",
  // },
  // {
  //   question:
  //     "How do you use the CSS filter property to apply visual effects such as blur, brightness, and contrast to elements.",
  // },
];
