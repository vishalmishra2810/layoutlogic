export const EASY_MACHINE_QUESTIONS = [
  {
    question:
      "Write a program that implements a simple to-do list using HTML, CSS, and JavaScript. The program should allow the user to add ,remove and complete items from the list.",
    answer: (
      <>
        <p className="simple-answer">
          We are performing all operations in three steps :-
        </p>
        <br />
        <p className="simple-answer">
          1. We are taking input from user when user click on add button and
          then we are creating a todos class div with delete and complete button
          and then we are appending it to the list.
        </p>
        <br />
        <p className="simple-answer">
          2. When user click on delete button then we are removing the parent
          element of the delete button using remove() method.
        </p>
        <br />
        <p className="simple-answer">
          3. When user click on complete button then we are adding a
          line-through style to the parent element of the complete button.
        </p>
      </>
    ),
    description:
      "To-do list is a simple list of tasks that need to be completed. It is a common practice for software developers to keep a list of tasks that need to be completed. This helps them stay organized and focused on the current task at hand. The program should allow the user to add and remove items from the list.",
    language: ["HTML", "CSS", "JavaScript"],
    slug: "simple_todo_list",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215260698-3feba373-a71e-4d2b-89c3-c9c9a5f09685.png",
  },
  {
    question:
      "Write a program that fetches data from a public API (Application Programming Interface) and displays it on a webpage.",
    answer: (
      <>
        <p className="simple-answer">
          We are using fetch() and axios to fetch data from API.
        </p>
        <br />
        <p className="simple-answer">
          1.{" "}
          <b>
            `<code>fetch()</code>`
          </b>{" "}
          is a built-in function in JavaScript that allows you to make HTTP
          requests. It returns a promise that resolves to the Response to that
          request, whether it is successful or not. <br />
          If it is successful, it returns a promise that resolves to a Response
          object that contains the data you requested. If it is not successful,
          it returns a promise that resolves to a Response object that contains
          the error message.
        </p>
        <br />
        <p className="simple-answer">
          2.{" "}
          <b>
            `<code>axios</code>`
          </b>{" "}
          is a promise-based HTTP client that works both in the browser and in a
          node.js environment. It basically provides a single API for dealing
          with XMLHttpRequests and node's http interface.
          <br /> It can be used in plain JavaScript or with a library such as
          Vue or React. It supports the Promise API that is native to JavaScript
          ES6.
        </p>
        <br />
        <p className="simple-answer">
          For{" "}
          <b>
            `<code>axios</code>`
          </b>
          , we have use cdn link in our html file.
        </p>
      </>
    ),
    description:
      "An API is a set of programming instructions and standards for accessing a web-based software application or web tool. APIs are used when programming graphical user interface (GUI) components. For example, an API might be used to create a button on a webpage that, when clicked, displays a message. The program should fetch data from a public API and display it on a webpage. There are so many approaches to fetch data from API. Some of them are using fetch(), axios, etc. here is an example of fetching data from API using fetch() method.",
    language: ["HTML", "CSS", "JavaScript"],
    slug: "fetch_data_from_api",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215260788-4782c288-9494-4f3d-b8f6-ba14c4d8eade.png",
  },
  {
    question:
      "Write a program that implements a responsive navigation bar that collapses into a hamburger menu on smaller screens.",
    answer: (
      <>
        <p className="simple-answer">
          For this we can use{" "}
          <b>
            `<code>Media Query</code>`
          </b>{" "}
          If design are not so much different and change the style of the
          navigation bar based on the size of the screen or we can use{" "}
          <b>
            `<code>JavaScript</code>`
          </b>{" "}
          if mobile and desktop navigation bar are different.
        </p>
        <br />
        <p className="simple-answer">
          We are using JavaScript to implement responsive navigation bar.
        </p>
        <br />
        <p className="simple-answer">
          We have created separate navigation bar for mobile and desktop and
          then based on the screen size we are showing the navigation bar.
        </p>
        <br />
        <p className="simple-answer">
          Using <b>Window resize event</b> we are changing the screen size and
          then based on the screen size we are showing the navigation bar.
        </p>
        <br />
        <p className="simple-answer">
          We are using{" "}
          <b>
            `<code>addEventListener</code>`
          </b>{" "}
          to listen to the click event on the hamburger menu button. When the
          button is clicked, we are toggling the class{" "}
          <b>
            `<code>active</code>`
          </b>{" "}
          on the navigation bar. The{" "}
          <b>
            `<code>active</code>`
          </b>{" "}
          class is used to show the navigation bar on smaller screens.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive navigation bar is a navigation bar that changes its appearance based on the size of the screen. The navigation bar should collapse into a hamburger menu on smaller screens. The hamburger menu is a button that displays a drop-down menu when clicked. The hamburger menu is a common design pattern used in responsive websites.",
    slug: "responsive_navigation_bar",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215260863-c948c390-314e-4fd0-8ca2-0b5cf9a1d5b1.png",
  },
  {
    question:
      "Write a program that implements a simple calculator, using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          We have created a class called <b>calculator__buttons</b> and then we
          have and we have added all the buttons in it with class name{" "}
          <b>calculator__button</b>.
        </p>
        <br />
        <p className="simple-answer">
          When user clicks on any button, we are getting the value of that
          button using
          <b>inner text</b> and then we are checking if the value is a number or
          operator or clear button or equal button.
        </p>
        <br />
        <p className="simple-answer">
          For make simple calculator we can use <b>eval()</b> function. But
          eval() function is not safe to use. another way to make simple
          calculator is to use switch case for each operator. But it will be
          difficult to make complex calculator.
        </p>
        <br />
        <p className="simple-answer">
          So we are using <b>math.js</b> library to make complex calculator.
          math.js library is a powerful and easy to use library for mathematical
          operations. It is used to perform mathematical operations like
          addition, subtraction, multiplication, division, etc. It also provides
          functions for trigonometry, logarithms, complex numbers, etc.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          We can directly pass complex mathematical expression to the{" "}
          <b>math.evaluate()</b> function and it will return the result of the
          expression.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    description:
      "A calculator is a device that performs mathematical operations. The program should allow the user to add, subtract, multiply, and divide numbers. The program should display the result of the calculation on the screen.",
    slug: "simple_calculator",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214911526-aab229f8-ae41-4dc1-a996-9ade37f11250.png",
  },
  {
    question:
      "How to add Drag and Drop functionality to a webpage using HTML, CSS, and JavaScript?",
    answer: (
      <>
        <p className="simple-answer">
          We can add drag and drop functionality to a webpage using HTML 5 Drag
          and Drop API.
        </p>
        <br />
        <p className="simple-answer">
          The HTML 5 Drag and Drop API allows us to drag and drop elements on a
          webpage. The API consists of the following methods:
        </p>
        <br />
        <p className="simple-answer">
          <b>dragstart</b> - This event is fired when the user starts dragging
          an element.
        </p>
        <br />
        <p className="simple-answer">
          <b>drag</b> - This event is fired when an element is being dragged.
        </p>
        <br />
        <p className="simple-answer">
          <b>dragend</b> - This event is fired when a drag operation is being
          ended.
        </p>
        <br />
        <p className="simple-answer">
          <b>dragenter</b> - This event is fired when a dragged element or text
          selection enters a valid drop target.
        </p>
        <br />
        <p className="simple-answer">
          <b>dragover</b> - This event is fired when an element or text
          selection is being dragged over a valid drop target.
        </p>
        <br />
        <p className="simple-answer">
          <b>dragleave</b> - This event is fired when a dragged element or text
          selection leaves a valid drop target.
        </p>
        <br />
        <p className="simple-answer">
          <b>drop</b> - This event is fired when an element or text selection is
          dropped on a valid drop target.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          To make an element draggable, we need to set the <b>draggable</b>{" "}
          attribute to <b>true</b>.
        </p>
        <br />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    description:
      "Drag and drop is a common design pattern used in web applications. The program should allow the user to drag and drop items from one location to another.",
    slug: "drag_and_drop",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/215260916-8798510a-b292-4f56-90a6-011c436f6954.png",
  },
];
