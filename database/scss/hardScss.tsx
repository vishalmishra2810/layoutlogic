import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import { at_root_example, media_example } from "./constant";

export const HARD_SCSS = [
  {
    question:
      "How do you use the @media directive in SCSS to create responsive styles that change based on the size of the viewport or other conditions?",
    answer: (
      <>
        <p className="simple_answers">
          The @media directive is a way to store blocks of CSS that can be
          reused throughout your stylesheet. <br />
          <br />
          You can pass values into the @media directive to make them more
          flexible. <br /> The @media directive is declared with @media and is
          used with @include.
        </p>
        <br />
        <CodeSnippet codeString={media_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use the @at-root directive in SCSS to create styles that are not nested within the current context, and how do you use it to avoid conflicts with other styles in your stylesheet?",
    answer: (
      <>
        <p className="simple_answers">
          The @at-root directive is a way to store blocks of CSS that can be
          reused throughout your stylesheet. <br />
          <br /> You can pass values into the @at-root directive to make them
          more flexible. <br />
          The @at-root directive is declared with @at-root and is used with
          @include.
        </p>
        <br />
        <CodeSnippet codeString={at_root_example} language="scss" />
      </>
    ),
  },
];
