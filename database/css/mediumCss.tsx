import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ReplaceCode from "../../common/replaceCode/ReplaceCode";
import {
  after_pseudo_element_example,
  animation_example,
  before_after_example,
  before_pseudo_element_example,
  box_shadow_exmaple,
  box_sizing_exmaple,
  center_element,
  css_grid_example,
  dropdown_menu,
  flexbox_example,
  font_face_example,
  hover_active_focus_example,
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
        <CodeSnippet codeString={responsive_layout} language="css" />
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
        <CodeSnippet codeString={dropdown_menu} language="css" />
      </>
    ),
  },
  {
    question: "Can you explain the box-sizing property in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          The box-sizing property is used to alter the default CSS box model
          used to calculate widths and heights of elements. <br />
          <br /> It is possible to use this property to include the padding and
          border in an element's total width and height.
        </p>
        <br />
        <p className="simple_answers">
          The box-sizing property can have one of two values:
        </p>
        <br />
        <ul className="answer_list">
          <li className="answer_list_item">content-box</li>
          <li className="answer_list_item">border-box</li>
        </ul>
        <br />
        <p className="simple_answers">
          The content-box value is used by default. It causes padding and border
          to be included in the width and height of an element.
        </p>
        <br />
        <p className="simple_answers">
          The border-box value causes padding and border to be included in the
          width and height of an element.
        </p>
        <CodeSnippet codeString={box_sizing_exmaple} language="css" />
      </>
    ),
  },
  {
    question:
      "How do you use the position, top, right, bottom, and left properties to position elements in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          The position property is used to position an element in CSS. It can
          have one of five values:
        </p>
        <br />
        <ul className="answer_list">
          <li className="answer_list_item">
            static <br />
            <p className="simple_answers">
              The static value is used by default. It causes an element to be
              positioned according to the normal flow of the page.
            </p>
          </li>
          <li className="answer_list_item">
            relative <br />{" "}
            <p className="simple_answers">
              The relative value causes an element to be positioned according to
              the normal flow of the page, and then offset relative to itself
              based on the values of top, right, bottom, and left.
            </p>
          </li>
          <li className="answer_list_item">
            absolute <br />{" "}
            <p className="simple_answers">
              The absolute value causes an element to be removed from the normal
              flow of the page, and then offset relative to its nearest
              positioned ancestor based on the values of top, right, bottom, and
              left. <br /> If an absolute positioned element has no positioned
              ancestors, it uses the document body, and moves along with page
              scrolling.
            </p>
          </li>
          <li className="answer_list_item">
            fixed <br />{" "}
            <p className="simple_answers">
              The fixed value causes an element to be removed from the normal
              flow of the page, and then offset relative to the viewport based
              on the values of top, right, bottom, and left. <br /> It is
              positioned relative to the initial containing block established by
              the viewport, except when one of its ancestors has a transform,
              perspective, or filter property set to something other than none
              (see the CSS Transforms Spec), in which case that ancestor behaves
              as the containing block.
            </p>
          </li>
          <li className="answer_list_item">
            sticky <br />{" "}
            <p className="simple_answers">
              The sticky value causes an element to be treated as relative until
              it crosses a specified threshold, at which point it is treated as
              fixed.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How do you use the box-shadow property to add a shadow to an element in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          The box-shadow property is used to add a shadow to an element in CSS.
          It can have one of two values:
        </p>
        <br />
        <ul className="answer_list">
          <li className="answer_list_item">none</li>
          <li className="answer_list_item">shadow</li>
        </ul>
        <br />
        <p className="simple_answers">
          The none value is used by default. It causes an element to have no
          shadow.
        </p>
        <br />
        <p className="simple_answers">
          The shadow value causes an element to have a shadow.
        </p>
        <CodeSnippet codeString={box_shadow_exmaple} language="css" />
      </>
    ),
  },
  {
    question:
      "Can you explain the difference between the ::before and ::after pseudo-elements in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          The ::before and ::after pseudo-elements are used to insert generated
          content in an element. <br />
          The ::before pseudo-element is used to insert generated content before
          the content of an element. <br /> The ::after pseudo-element is used
          to insert generated content after the content of an element.
        </p>
        <br />
        <p className="simple_answers">
          here is the code for the ::before pseudo-element:
        </p>
        <CodeSnippet
          codeString={before_pseudo_element_example}
          language="css"
        />
        <br />
        <p className="simple_answers">
          here is the code for the ::after pseudo-element:
        </p>
        <CodeSnippet codeString={after_pseudo_element_example} language="css" />
      </>
    ),
  },
  {
    question: "How do you use CSS Grid and Flexbox to create advanced layouts?",
    answer: (
      <>
        <p className="simple_answers">
          CSS Grid and Flexbox are used to create advanced layouts. <br /> CSS
          Grid is used to create two-dimensional layouts. <br /> Flexbox is used
          to create one-dimensional layouts.
        </p>
        <br />
        <p className="simple_answers">here is the code for the CSS Grid:</p>
        <CodeSnippet codeString={css_grid_example} language="css" />
        <br />
        <p className="simple_answers">here is the code for the Flexbox:</p>
        <CodeSnippet codeString={flexbox_example} language="css" />
      </>
    ),
  },
  {
    question: "What is pseudo-classes and pseudo-elements in CSS?",
    answer: (
      <>
        <p className="simple_answers">
          Pseudo-classes and pseudo-elements are used to style specific states
          of an element. <br /> The pseudo-classes are used to style an element
          when a user mouses over it, clicks on it, etc. <br /> The
          pseudo-elements are used to style the first letter, or line, etc. of
          an element.
        </p>
        <br />
      </>
    ),
  },
  {
    question:
      "How do you use the CSS :hover, :active, and :focus pseudo-classes to create interactive effects?",
    answer: (
      <>
        <p className="simple_answers">
          The CSS :hover, :active, and :focus pseudo-classes are used to create
          interactive effects. <br />
          <br /> The <strong> :hover pseudo-class </strong> is used to create an
          effect when the user hovers over an element. <br /> The{" "}
          <strong>:active pseudo-class </strong> is used to create an effect
          when the user clicks on an element. <br /> The{" "}
          <strong> :focus pseudo-class </strong>
          is used to create an effect when the user focuses on an element.
        </p>
        <br />
        <p className="simple_answers">here is the code :</p>
        <CodeSnippet codeString={hover_active_focus_example} language="css" />
      </>
    ),
  },
  {
    question:
      "How do you use the CSS pseudo-elements ::before and ::after to add content to an element?",
    answer: (
      <>
        <p className="simple_answers">
          The CSS pseudo-elements ::before and ::after are used to add content
          to an element. <br /> The <strong>::before</strong> pseudo-element is
          used to add content before the content of an element. <br /> The{" "}
          <strong>::after</strong> pseudo-element is used to add content after
          the content of an element.
        </p>
        <br />

        <p className="simple_answers">here is the code :</p>
        <CodeSnippet codeString={before_after_example} language="css" />
      </>
    ),
  },
  {
    question: "How do you use the CSS @font-face rule to import custom fonts?",
    answer: (
      <>
        <p className="simple_answers">
          The CSS @font-face rule is used to import custom fonts. <br /> The
          @font-face rule is used to import a font from a URL or a local file.
        </p>
        <br />
        <p className="simple_answers">here is the code :</p>
        <CodeSnippet codeString={font_face_example} language="css" />
      </>
    ),
  },
];
