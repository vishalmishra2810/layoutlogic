import reactIcon from "../../../assets/react.svg";
import javascriptIcon from "../../../assets/javascript.svg";
import cssIcon from "../../../assets/css.svg";
import htmlIcon from "../../../assets/html.svg";
import scssIcon from "../../../assets/scss.svg";
import reduxIcon from "../../../assets/redux.svg";
import { URLPaths } from "../../../utils/constant";
import CodeSnippet from "../../../common/codeSnippet/CodeSnippet";
import ReplaceCode from "../../../common/replaceCode/ReplaceCode";
import { sass_example, scss_example } from "../../../database/scss/constant";
import { variable_example } from "../../../database/javascript/constant";
import {
  selector_example,
  selector_example_all,
} from "../../../database/css/constant";

export const FEATURED_DATA = [
  {
    title: "Reactjs",
    description: "Reactjs is a javascript library for building user interfaces",
    icon: reactIcon,
    url: URLPaths.REACTJS,
    questions: [
      {
        question: "What is a component in ReactJS?",
        answer: (
          <p>
            A component is a small, reusable piece of code that is responsible
            for one job.
            <br /> It is used to split the UI into independent, reusable pieces,
            and think about each piece in isolation.
          </p>
        ),
      },
      {
        question: "What is the virtual DOM and how does it work in ReactJS?",
        answer: (
          <p>
            The virtual DOM (VDOM) is a programming concept where an ideal, or
            “virtual”, representation of a UI is kept in memory and synced with
            the “real” DOM by a library such as ReactDOM.
            <br /> This process is called reconciliation.
          </p>
        ),
      },
      {
        question: "How is data passed between components in ReactJS?",
        answer: (
          <>
            <p>
              Data is passed between components in ReactJS using props. Props
              are arguments passed into React components.
              <br /> Props are passed to components via HTML attributes.
            </p>
            <CodeSnippet codeString={`<ChildComponent name="John Doe" />`} />
            <ReplaceCode
              codeString={`In the above example, the name prop is passed to the 
           ChildComponent component. The ChildComponent component
            can access the name prop using props.name or you can directly 
            destructure the name prop from the props object.
            `}
              list={["name", "ChildComponent", "props.name"]}
            />
          </>
        ),
      },
    ],
  },
  {
    title: "Redux",
    description: "Redux is a predictable state container for JavaScript apps.",
    icon: reduxIcon,
    url: URLPaths.REDUX,
    questions: [
      {
        question: "What is Redux?",
        answer: (
          <>
            <p>
              Redux is a predictable state container for JavaScript apps. <br />{" "}
              It helps you write applications that behave consistently, run in
              different environments (client, server, and native), and are easy
              to test. <br />
              <br /> On top of that, it provides a great developer experience,
              such as live code editing combined with a time traveling debugger.
            </p>
          </>
        ),
      },
      {
        question: "What are advantages of using Redux?",
        answer: (
          <>
            <p>
              <b>1. Predictable state management</b>
              <br />
              <b>2. Centralized state management</b>
              <br />
              <b>3. Easy to debug</b>
              <br />
              <b>4. Easy to test</b>
              <br />
              <b>5. Easy to maintain</b>
              <br />
              <b>6. Easy to scale</b>
              <br />
              <b>7. Easy to integrate with other libraries</b>
              <br />
              <b>8. Easy to integrate with server side</b>
              <br />
              <b>9. Easy to integrate with native apps</b>
            </p>
          </>
        ),
      },
      {
        question: "What are the three principles of Redux?",
        answer: (
          <>
            <p>The three principles of Redux are:</p>
            <br />
            <p>
              <b>1. Single source of truth</b>
              <br />
              The state of your whole application is stored in an object tree
              within a single store.
            </p>
            <br />
            <p>
              <b>2. State is read-only</b>
              <br />
              The only way to change the state is to emit an action, an object
              describing what happened.
            </p>
            <br />
            <p>
              <b>3. Changes are made with pure functions</b>
              <br />
              To specify how the state tree is transformed by actions, you write
              pure reducers.
            </p>
            <br />
          </>
        ),
      },
    ],
  },
  {
    title: "SCSS",
    description:
      "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
    icon: scssIcon,
    url: URLPaths.SCSS,
    questions: [
      {
        question: "What is the difference between Sass and SCSS?",
        answer: (
          <>
            <p>
              The main difference between Sass and SCSS is the syntax.
              <br /> Sass uses indentation to separate code blocks and newline
              characters to separate rules, while SCSS uses curly braces and
              semicolons. So, Sass has a more concise syntax, while SCSS is more
              similar to CSS.
            </p>
            <br />
            <p>here is an example of a Sass file:</p>
            <CodeSnippet codeString={sass_example} language="sass" />
            <br />
            <br />
            <p>And here is an example of a SCSS file:</p>
            <CodeSnippet codeString={scss_example} language="scss" />
          </>
        ),
      },
    ],
  },
  {
    title: "HTML",
    description: "HTML is the standard markup language for creating Web pages.",
    icon: htmlIcon,
    url: URLPaths.HTML,
    questions: [
      {
        question: "What is HTML?",
        answer: (
          <p>
            HTML stands for Hyper Text Markup Language. It is the standard
            markup language for creating web pages and web applications.
            <br /> <br />
            It is used to give meaning to text, images, and other content, and
            to specify how they should be displayed in a web browser.
          </p>
        ),
      },
      {
        question: "What are Tags?",
        answer: (
          <>
            <p>
              Tags are used to define the structure of a web page. Tags are
              enclosed in angle brackets, and they come in pairs. The first tag
              in a pair is called the opening tag, and the second tag is called
              the closing tag.
            </p>
            <br />
            <p>
              The opening tag contains the name of the element, and the closing
              tag contains a forward slash before the element name.
            </p>
            <CodeSnippet codeString="<p> hello world </p>" language="html" />
          </>
        ),
      },
    ],
  },
  {
    title: "Javascript",
    description: "JavaScript is the world's most popular programming language.",
    icon: javascriptIcon,
    url: URLPaths.JAVASCRIPT,
    questions: [
      {
        question: "What is JavaScript?",
        answer: (
          <>
            <p>
              JavaScript is a lightweight, interpreted, or just-in-time compiled
              programming language with first-class functions.
            </p>
          </>
        ),
      },
      {
        question:
          "What is a variable in JavaScript, and how do you declare one?",
        answer: (
          <>
            <p>
              A variable is a container for a value, which can be a number, a
              string, a boolean, an array, an object, or even another function.
              <br /> <br /> Variables are declared using the <code>
                {" "}
                var{" "}
              </code>{" "}
              keyword. <br /> <br /> You can also declare a variable using the{" "}
              <code> let </code> and <code> const </code>
              keyword, which is the preferred way to declare variables in modern
              JavaScript.
            </p>
            <CodeSnippet codeString={variable_example} language="javascript" />
          </>
        ),
      },
    ],
  },
  {
    title: "CSS",
    description: "CSS is the language we use to style an HTML document.",
    icon: cssIcon,
    url: URLPaths.CSS,
    questions: [
      {
        question: "How do you select elements using CSS selectors?",
        answer: (
          <>
            <p>
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
    ],
  },
];
