import { ALL_COMPONENTS } from "./allTech";

export const REACTJS_QUESTIONS_WITH_ANSWERS = [
  {
    id: 1,
    question: <b>What is ReactJS?</b>,
    answer: [
      "React is a JavaScript library for building user interfaces. It was developed by Facebook and is often used for building single-page applications and mobile applications.",
      "React allows you to build reusable UI components. It provides a declarative API that makes it easy to reason about your code and keep it predictable. With React, you can create complex UIs from small, isolated pieces of code called 'components'.",
      "React uses a virtual DOM (a lightweight in-memory representation of the real DOM) to optimize updates to the actual DOM. When something in the component changes, React will update the virtual DOM, and then it will determine the most efficient way to update the real DOM. This makes it faster and easier to build and maintain complex applications.",
      "React is often used in combination with other libraries or frameworks, such as Redux for state management or React Router for routing.",
    ],
    components: ALL_COMPONENTS.LIST,
  },
];
