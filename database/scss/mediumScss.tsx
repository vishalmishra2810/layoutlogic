import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import {
  control_directives_example,
  each_example,
  extend_example,
  for_loop_based_on_list_example,
  import_example,
} from "./constant";

export const MEDIUM_SCSS = [
  {
    question:
      "How do you use control directives such as @if and @for in SCSS to create more dynamic and flexible stylesheets?",
    answer: (
      <>
        <p className="simple_answers">
          Control directives are a way to store blocks of CSS that can be reused
          throughout your stylesheet.
          <br /> You can pass values into control directives to make them more
          flexible. <br />
          Control directives are declared with `@if`, `@for`, `@each`, and
          `@while` and are used with `@include`.
        </p>
        <CodeSnippet codeString={control_directives_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use extend in SCSS to create reusable style definitions that can be inherited by other selectors?",
    answer: (
      <>
        <p className="simple_answers">
          Extend is a way to store blocks of CSS that can be reused throughout
          your stylesheet. <br />
          You can pass values into extend to make them more flexible. Extend is
          declared with `@extend`.
        </p>
        <CodeSnippet codeString={extend_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use the @each directive in SCSS to loop through a list or map and generate styles based on the values in the list or map?",
    answer: (
      <>
        <p className="simple_answers">
          The @each directive is a way to store blocks of CSS that can be reused
          throughout your stylesheet.
          <br /> You can pass values into the @each directive to make them more
          flexible. The @each directive is declared with @each and is used with
          @include.
        </p>
        <CodeSnippet codeString={each_example} language="scss" />
      </>
    ),
  },
  {
    question:
      "How do you use the @for directive in SCSS to loop through a list or map and generate styles based on the values in the list or map?",
    answer: (
      <>
        <p className="simple_answers">
          The @for directive is a way to store blocks of CSS that can be reused
          throughout your stylesheet.
          <br /> You can pass values into the @for directive to make them more
          flexible. <br /> The @for directive is declared with @for and is used
          with @include.
        </p>
        <CodeSnippet
          codeString={for_loop_based_on_list_example}
          language="scss"
        />
      </>
    ),
  },
  {
    question:
      "How do you use the @import directive in SCSS to include external stylesheets and libraries, and how do you use @import to manage the load order of your stylesheets?",
    answer: (
      <>
        <p className="simple_answers">
          The @import directive is a way to store blocks of CSS that can be
          reused throughout your stylesheet.
          <br /> You can pass values into the @import directive to make them
          more flexible.
          <br /> The @import directive is declared with @import and is used with
          @include.
        </p>
        <CodeSnippet codeString={import_example} language="scss" />
      </>
    ),
  },
];
