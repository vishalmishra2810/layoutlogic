import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";

export const EASY_SCSS = [
  {
    question: "What is the difference between Sass and SCSS?",
    answer: (
      <>
        <p className="simple_answers">
          Sass is a CSS preprocessor that allows you to use variables, nested
          rules, mixins, inline imports, and more. SassScript is the scripting
          language itself. SCSS is a superset of CSS that adds nesting,
          variables, mixins, and other features that make writing CSS easier.
          SCSS files use the extension .scss.
        </p>
      </>
    ),
  },
  {
    question: "What is SCSS and how does it differ from plain CSS?",
    answer: (
      <>
        <p className="simple_answers">
          these are the differences between SCSS and CSS:
        </p>
        <MakeDifferentiate
          totalColumn={2}
          headerData={["CSS", "SCSS"]}
          columnDataLength={2}
          columnData={{
            0: [
              "CSS is a language for describing the presentation of Web pages, including colors, layout, and fonts.",
              "CSS is a language for describing the presentation of Web pages, including colors, layout, and fonts.",
              "CSS is a language for describing the presentation of Web pages, including colors, layout, and fonts.",
            ],
            1: [
              "SCSS is a superset of CSS that adds nesting, variables, mixins, and other features that make writing CSS easier.",
              "SCSS is a superset of CSS that adds nesting, variables, mixins, and other features that make writing CSS easier.",
              "SCSS is a superset of CSS that adds nesting, variables, mixins, and other features that make writing CSS easier.",
            ],
          }}
        />
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
          your stylesheet. You can use variables to store colors, fonts, or any
          CSS value that you want to reuse. Variables are declared with a $ and
          can be used anywhere in your stylesheet.
        </p>
      </>
    ),
  },
  {
    question: "How do you use SCSS to nest CSS selectors?",
    answer: (
      <>
        <p className="simple_answers">
          Nesting is a way to write CSS that is easier to read and maintain. It
          allows you to nest one selector inside another. The child selector (&)
          is used to refer to the parent selector.
        </p>
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
          your stylesheet. You can pass values into mixins to make them more
          flexible. Mixins are declared with @mixin and are used with @include.
        </p>
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
          throughout your stylesheet. You can pass values into functions to make
          them more flexible. Functions are declared with @function and are used
          with call().
        </p>
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
          your stylesheet. You can pass values into loops to make them more
          flexible. Loops are declared with @for, @each, and @while and are used
          with @include.
        </p>
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
          throughout your stylesheet. You can pass values into functions to make
          them more flexible. Functions are declared with @function and are used
          with call().
        </p>
      </>
    ),
  },
];
