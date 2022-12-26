import ListShow from "../../common/listShow/ListShow";
import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";

export const MEDIUM_REACTJS = [
  {
    question: "What is difference between Virtual DOM and Real DOM?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between Virtual DOM and Real DOM are as follows:
        </p>
        <br />
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={5}
          headerData={["Virtual DOM", "Real DOM"]}
          columnData={{
            0: [
              "Virtual DOM is a lightweight copy of the real DOM.",
              "Virtual DOM is a JavaScript object.",
              "Virtual DOM is faster than the real DOM.",
              "Virtual DOM is used in ReactJS.",
              "Virtual DOM is a virtual representation of the real DOM.",
            ],
            1: [
              "Real DOM is a browser API.",
              "Real DOM is a tree of nodes/elements created by the browser.",
              "Real DOM is slower than the virtual DOM.",
              "Real DOM is not used in ReactJS.",
              "Real DOM is a representation of the page loaded in the browser.",
            ],
          }}
        />
      </>
    ),
  },
  {
    question: "What is the difference between ReactJS and AngularJS?",
    answer: (
      <>
        <p className="simple_answers">
          The main difference between ReactJS and AngularJS are as follows:
        </p>
        <br />
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={5}
          headerData={["ReactJS", "AngularJS"]}
          columnData={{
            0: [
              "ReactJS is a JavaScript library for building user interfaces.",
              "ReactJS is a front-end library developed by Facebook.",
              "ReactJS allows us to create reusable UI components.",
              "ReactJS is used to handle the view layer for web and mobile apps.",
              "ReactJS is a component-based library.",
            ],
            1: [
              "AngularJS is a JavaScript framework for building web applications.",
              "AngularJS is a front-end framework developed by Google.",
              "AngularJS allows us to create reusable UI components.",
              "AngularJS is used to handle the view layer for web apps.",
              "AngularJS is a component-based framework.",
            ],
          }}
        />
      </>
    ),
  },
  {
    question: "What is ReactJS?",
    answer: (
      <ListShow
        typeOfList={"ul"}
        list={[
          "ReactJS is a JavaScript library for building user interfaces.",
          "ReactJS is a front-end library developed by Facebook.",
          "ReactJS allows us to create reusable UI components.",
          "ReactJS is used to handle the view layer for web and mobile apps.",
          "ReactJS is a component-based library.",
          "ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
        ]}
      />
    ),
  },
  {
    question: "What are the features of ReactJS?",
    answer: (
      <ol className="answer_list">
        <li className="answer_list_item">
          ReactJS uses <b> Virtual DOM </b> instead of Real DOM.
        </li>
        <li className="answer_list_item">
          React can be rendered on the server as well as the client, which can
          improve the performance and <b>SEO of the app</b>.
        </li>
        <li className="answer_list_item">
          ReactJS follows <b>uni-directional</b> data flow or data binding.This
          makes it easier to understand and debug the app, as the flow of data
          is predictable and explicit.
        </li>
        <li className="answer_list_item">
          ReactJS uses <b> reusable/composable UI</b> components to develop the
          view.
        </li>
        <li className="answer_list_item">
          ReactJS uses JSX as its primary scripting language.This allows
          developers to write HTML-like code in their JavaScript files, making
          it easier to build and style UI components.
        </li>
        <li className="answer_list_item">
          ReactJS uses one-way data binding between the components.
        </li>
        <li className="answer_list_item">
          ReactJS uses <b> Flux</b> architecture.
        </li>
      </ol>
    ),
  },
  {
    question: "What are the limitations of ReactJS?",
    answer: (
      <ListShow
        typeOfList={"ul"}
        list={[
          "ReactJS is just a library and not a framework.",
          "ReactJS is a UI library and is not suitable for building complex apps.",
          "ReactJS is not suitable for building mobile apps.",
          "ReactJ has no standard way to structure application, and different developers and teams may have different approaches. This can make it harder for new developers to understand and work with existing React codebases.",
        ]}
      />
    ),
  },
  {
    question:
      "How do you optimize the performance of a ReactJS app using the shouldComponentUpdate lifecycle method?",
    answer: (
      <>
        <p className="simple_answers">
          The shouldComponentUpdate lifecycle method is used to optimize the
          performance of a ReactJS app.
          <br /> It is used to let React know if a component’s output is not
          affected by the current change in state or props. <br />
          The default behavior is to re-render on every state change. The
          shouldComponentUpdate method receives the next props and state as
          arguments, and you can compare them with the current props and state.
          If the values are the same, you can return false to tell React that
          the component’s output is not affected by the current change. If the
          values are different, you can return true to tell React that the
          component’s output does change. This method is used to prevent
          unnecessary re-renders.
        </p>
      </>
    ),
  },
];
