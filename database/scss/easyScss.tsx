import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";
import {
  functions_dynamic_style_example,
  functions_example,
  loop_example,
  mixins_example,
  sass_example,
  scss_example,
  scss_nested_css_example,
  scss_variables_example,
  scss_vs_css_example,
} from "./constant";

export const EASY_SCSS = [
  {
    question: "What is the difference between Sass and SCSS?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between Sass and SCSS is the syntax.
          <br /> Sass uses indentation to separate code blocks and newline
          characters to separate rules, while SCSS uses curly braces and
          semicolons. So, Sass has a more concise syntax, while SCSS is more
          similar to CSS.
        </p>
        <p className="simple_answers">here is an example of a Sass file:</p>
        <CodeSnippet codeString={sass_example} language="sass" />
        <p className="simple_answers">And here is an example of a SCSS file:</p>
        <CodeSnippet codeString={scss_example} language="scss" />
      </>
    ),
  },
  {
    question: "What is SCSS and how does it differ from plain CSS?",
    answer: (
      <>
        <p className="simple_answers">
          SCSS is a superset of CSS that adds power and elegance to the basic
          language. <br /> It allows you to use variables, nested rules, mixins,
          inline imports, and more, all with a fully CSS-compatible syntax. SCSS
          files use the extension .scss.
        </p>
        <CodeSnippet codeString={scss_vs_css_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use variables in SCSS to store values that can be reused throughout your stylesheet?",
    answer: (
      <>
        <p className="simple_answers">
          Variables are a way to store information that can be reused throughout
          your stylesheet. <br />
          You can use variables to store colors, fonts, or any CSS value that
          you want to reuse.
          <br />
          Variables are declared with a $ and can be used anywhere in your
          stylesheet.
        </p>
        <CodeSnippet codeString={scss_variables_example} language="scss" />
      </>
    ),
  },
  {
    question: "How do you use SCSS to nest CSS selectors?",
    answer: (
      <>
        <p className="simple_answers">
          Nesting is a way to write CSS that is easier to read and maintain.
          <br /> It allows you to nest one selector inside another. The child
          selector (&) is used to refer to the parent selector.
        </p>
        <CodeSnippet codeString={scss_nested_css_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use SCSS to create mixins that can be reused throughout your stylesheet?",
    answer: (
      <>
        <p className="simple_answers">
          Mixins are a way to store blocks of CSS that can be reused throughout
          your stylesheet.
          <br /> You can pass values into mixins to make them more flexible.
          Mixins are declared with `@mixin` and are used with `@include`.
        </p>
        <CodeSnippet codeString={mixins_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use SCSS to create functions that can be reused throughout your stylesheet?",
    answer: (
      <>
        <p className="simple_answers">
          Functions are a way to store blocks of CSS that can be reused
          throughout your stylesheet.
          <br /> You can pass values into functions to make them more flexible.
          Functions are declared with `@function` and are used with call().
        </p>
        <CodeSnippet codeString={functions_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use SCSS to create loops that can be reused throughout your stylesheet?",
    answer: (
      <>
        <p className="simple_answers">
          Loops are a way to store blocks of CSS that can be reused throughout
          your stylesheet.
          <br /> You can pass values into loops to make them more flexible.
          Loops are declared with `@for`, `@each`, and `@while` and are used
          with `@include`.
        </p>
        <CodeSnippet codeString={loop_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use functions in SCSS to perform calculations and generate dynamic styles?",
    answer: (
      <>
        <p className="simple_answers">
          Functions are a way to store blocks of CSS that can be reused
          throughout your stylesheet.
          <br />
          You can pass values into functions to make them more flexible.
          <br /> Functions are declared with @function and are used with call().
        </p>
        <CodeSnippet
          codeString={functions_dynamic_style_example}
          language="scss"
        />
      </>
    ),
  },
];
