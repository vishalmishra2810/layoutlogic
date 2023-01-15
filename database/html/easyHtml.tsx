import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import ListShow from "../../common/listShow/ListShow";
import {
  form_string,
  html_str,
  semantic_tags_html_example,
  table_str,
  xhtml_str,
} from "./constant";

export const EASY_HTML = [
  {
    question: "What is HTML?",
    answer: (
      <p className="simple_answers">
        HTML stands for Hyper Text Markup Language. It is the standard markup
        language for creating web pages and web applications.
        <br />
        It is used to give meaning to text, images, and other content, and to
        specify how they should be displayed in a web browser.
      </p>
    ),
  },
  {
    question: "How do you create an HTML file?",
    answer: (
      <p className="simple_answers">
        To create an HTML file, you will need to use a text editor (such as
        Notepad or TextEdit) to write your HTML code. Save the file with an
        .html or .htm file extension.
      </p>
    ),
  },
  {
    question: "What are Tags?",
    answer: (
      <>
        <p className="simple_answers">
          Tags are used to define the structure of a web page. Tags are enclosed
          in angle brackets, and they come in pairs. The first tag in a pair is
          called the opening tag, and the second tag is called the closing tag.
        </p>
        <br />
        <p className="simple_answers">
          The opening tag contains the name of the element, and the closing tag
          contains a forward slash before the element name.
        </p>
        <CodeSnippet codeString="<p> hello world </p>" language="html" />
      </>
    ),
  },
  {
    question: "Do all HTML tags have an end tag?",
    answer: (
      <p className="simple_answers">
        No, not all HTML tags have an end tag. Some HTML tags have no end tag.
        <br />
        Some of them are following:
        <br />
        <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>,{" "}
        <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>,{" "}
        <code>&lt;link&gt;</code>, <code>&lt;meta&gt;</code>,{" "}
        <code>&lt;param&gt;</code>
      </p>
    ),
  },
  {
    question: "How do you create a hyperlink in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a hyperlink in HTML, you will need to use the anchor tag{" "}
          <code>&lt;a&gt;</code> and specify the link in the <code>href</code>{" "}
          attribute.
        </p>
        <CodeSnippet
          codeString="<a href='https://www.google.com'>Google</a>"
          language="html"
        />
      </>
    ),
  },
  {
    question: "What is the difference between HTML and XHTML?",
    answer: (
      <>
        <p className="simple_answers">
          XHTML is an XML-based markup language that is used to create web
          pages. It is a stricter version of HTML.
          <br />
          XHTML is more strict than HTML, and requires that all tags are closed
          and that all elements are properly nested.
        </p>
        <br />
        <p className="simple_answers">Here is the example of XHTML:</p>{" "}
        <CodeSnippet codeString={xhtml_str} language="html" />
        <br />
        <p className="simple_answers">Here is the example of HTML:</p>
        <CodeSnippet codeString={html_str} language="html" />
      </>
    ),
  },
  {
    question: "How do you create a table in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a table in HTML, you can use the table element and its
          related elements, such as `thead`, `tbody`, and `td`.
        </p>
        <br />
        <p className="simple_answers">
          Here's an example of how you might create a table in HTML:
        </p>
        <CodeSnippet codeString={table_str} language="html" />
      </>
    ),
  },
  {
    question: "How do you add an image in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To add an image in HTML, you will need to use the image tag{" "}
          <code>&lt;img&gt;</code> and specify the image source in the{" "}
          <code>src</code> attribute.
        </p>
        <CodeSnippet
          codeString="<img src='https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' />"
          language="html"
        />
      </>
    ),
  },
  {
    question: "How do you create a form in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a form in HTML, you will need to use the form tag{" "}
          <code>&lt;form&gt;</code> and specify the form fields in the{" "}
          <code>&lt;input&gt;</code> tag.
          <br />
          You will also need to specify the form action in the{" "}
          <code>action</code> attribute.
        </p>
        <CodeSnippet codeString={form_string} language="html" />
      </>
    ),
  },
  {
    question: "How do you create a list in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a list in HTML, you will need to use the list tag{" "}
          <code>&lt;ul&gt;</code> and specify the list items in the{" "}
          <code>&lt;li&gt;</code> tag.
        </p>
        <CodeSnippet
          codeString="<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>"
          language="html"
        />
      </>
    ),
  },
  {
    question: "How do you create a heading in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          To create a heading in HTML, you will need to use the heading tag{" "}
          <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> and specify the
          heading text in the <code>&lt;h1&gt;</code> tag.
        </p>
        <CodeSnippet
          codeString="<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6>"
          language="html"
        />
      </>
    ),
  },
  {
    question:
      "Can you explain the difference between id and class attributes in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          The id attribute is used to specify a unique id for an HTML element.
          <br />
          The class attribute is used to specify one or more class names for an
          HTML element.
          <br />
          The id attribute is used to point to a style in a style sheet, and the
          class attribute can be used to point to a style in a style sheet, or
          to be used by a script.
        </p>
      </>
    ),
  },
  {
    question:
      "What is difference between `display:none` and `visibility:hidden`?",
    answer: (
      <>
        <p className="simple_answers">
          The `<code>display:none</code>` property hides the element, and the
          element will not take up any space.
        </p>
        <p className="simple_answers">
          The `<code>visibility:hidden</code>` property hides the element, but
          the element will still take up the original space.
        </p>
      </>
    ),
  },
  {
    question: "What is semantic tags in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          Semantic tags are HTML tags that have a specific meaning.
        </p>
        <p className="simple_answers">
          For example, the <code>&lt;header&gt;</code> tag defines a header for
          a document or a section.
        </p>
        <CodeSnippet codeString={semantic_tags_html_example} language="html" />
      </>
    ),
  },
  {
    question: "Why is a URL encoded in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          A URL is encoded in HTML to make it safe to use in a web page.
        </p>
        <p className="simple_answers">
          For example, if you have a URL that contains a space, you will need to
          encode the space as <code>%20</code> to make it safe to use in a web
          page.
        </p>
      </>
    ),
  },
  {
    question: "Why do use <!DOCTYPE html> in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          The <code>!DOCTYPE html</code> declaration is not an HTML tag. It is
          an instruction to the web browser about what version of HTML the page
          is written in.
        </p>
        <p className="simple_answers">
          The <code>!DOCTYPE html</code> declaration must only be at the top of
          the page (before any HTML tags).
        </p>
      </>
    ),
  },
  {
    question: "What is different between async and defer in script tag?",
    answer: (
      <>
        <p className="simple_answers">
          The `<code>async</code>` attribute is a boolean attribute.
        </p>
        <p className="simple_answers">
          When present, it specifies that the script is executed asynchronously
          as soon as it is available.
        </p>
        <br />
        <p className="simple_answers">
          The `<code>defer</code>` attribute is a boolean attribute.
        </p>
        <p className="simple_answers">
          When present, it specifies that the script is executed when the page
          has finished parsing.
        </p>
      </>
    ),
  },
  {
    question: "What is difference between HTML elements and HTML tags?",
    answer: (
      <>
        <p className="simple_answers">
          HTML elements are the content between the opening and closing tags.
        </p>
        <p className="simple_answers">
          HTML tags are the opening and closing tags.
        </p>
      </>
    ),
  },
  {
    question: "What is empty element in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          An empty element is an element with no content.
        </p>
        <p className="simple_answers">
          For example, the <code>&lt;br&gt;</code> tag defines a single line
          break.
        </p>
      </>
    ),
  },
  {
    question: "What are the entities in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          Entities are characters that are not allowed in HTML.
        </p>
        <p className="simple_answers">
          For example, the <code>&lt;</code> character is not allowed in HTML.
          You will need to use the <code>&amp;lt;</code> entity instead.
        </p>
      </>
    ),
  },
  {
    question: "What is multipart/form-data in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          The <code>multipart/form-data</code> value is used to specify that the
          form data should be encoded as MIME data.
        </p>
        <p className="simple_answers">
          The <code>multipart/form-data</code> value is only used when the
          <code>method</code> attribute is set to <code>post</code>.
        </p>
      </>
    ),
  },
  {
    question: "What is the role of the <head> section in an HTML document?",
    answer: (
      <>
        <p className="simple_answers">
          The <code>&lt;head&gt;</code> section contains meta information about
          the HTML document.
        </p>
        <p className="simple_answers">
          The <code>&lt;head&gt;</code> section is a container for all the head
          elements, including a title for the document, scripts, styles, meta
          information, and more.
        </p>
      </>
    ),
  },
  {
    question: "What is the difference between a GET and POST request?",
    answer: (
      <>
        <p className="simple_answers">
          The `<code>GET</code>` method requests data from a specified resource.
        </p>
        <p className="simple_answers">
          The `<code>POST</code>` method submits data to be processed to a
          specified resource.
        </p>
      </>
    ),
  },
  {
    question: "What is the use of accesskey attribute in HTML?",
    answer: (
      <>
        <p className="simple_answers">
          The `<code>accesskey</code>` attribute specifies a shortcut key to
          activate/focus an element.
        </p>
        <p className="simple_answers">
          The `<code>accesskey</code>` attribute is used to provide a keyboard
          shortcut to an element.
        </p>
      </>
    ),
  },
  {
    question: "What are some common layout frameworks for HTML and CSS?",
    answer: (
      <>
        <p className="simple_answers">
          Some common layout frameworks for HTML and CSS are:
        </p>
        <ListShow
          list={["Bootstrap", "Foundation", "Materialize", "UIkit", "W3.CSS"]}
          typeOfList="ul"
        />
      </>
    ),
  },
];
