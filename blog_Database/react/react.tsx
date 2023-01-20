import CodeSnippet from "common/codeSnippet/CodeSnippet";
import Content from "common/contents/Contents";
import Image from "next/image";
import { IPostProps, TOPIC_LIST } from "utils/constant";
import { code1, code2, code3 } from "./constant";

export const REACT_POST: IPostProps[] = [
  {
    topic: [TOPIC_LIST.REACT],
    title: "How to use React Hooks",
    description:
      "In this post, we will learn how to use React Hooks in our React application.",
    img_url:
      "https://user-images.githubusercontent.com/76992713/213081639-ff6dd531-7996-41c0-9d12-786f504a7171.png",
    slug: "how-to-use-react-hooks",
    date: "2023-01-16",
    answer: (
      <>
        <p className="simple_answers">
          In this post, we will learn how to use <strong>React Hooks</strong> in
          our React application.
        </p>
        <br />
        <p className="simple_answers">
          React Hooks are a new addition in React 16.8. They let you use state
          and other React features without writing a class. Hooks are functions
          that let you “hook into” React state and lifecycle features from
          function components. Hooks don’t work inside classes — they let you
          use React without classes. (We don’t recommend rewriting your existing
          components overnight but you can start using Hooks in the new ones if
          you’d like.)
        </p>
        <Content
          contentList={[
            {
              title: "PreRequisites",
              id: "prerequisites",
              description: (
                <>
                  <p className="simple_answers">
                    Before you start this tutorial, you should have a basic
                    understanding of React and JavaScript. It will also help if
                    you have some knowledge of ES6 features.
                  </p>
                  <br />
                  <p className="simple_answers">
                    If you are new to React, you can check out our other
                    tutorials:
                  </p>
                </>
              ),
            },
            {
              title: "What are React Hooks?",
              id: "what-are-react-hooks",
              description: (
                <>
                  <p className="simple_answers">
                    Hooks are functions that let you “hook into” React state and
                    lifecycle features from function components. Hooks don’t
                    work inside classes — they let you use React without
                    classes. (We don’t recommend rewriting your existing
                    components overnight but you can start using Hooks in the
                    new ones if you’d like.)
                  </p>
                  <br />
                  <p className="simple_answers">
                    Hooks are a new addition in React 16.8. They let you use
                    state and other React features without writing a class.
                  </p>
                  <br />
                  <p className="simple_answers">
                    Without Hooks, React functional components were limited to
                    performing a single render and returning a single React
                    element. With Hooks, you can perform side effects, return
                    multiple React elements, and keep the state of your
                    functional component.
                  </p>
                  <br />
                </>
              ),
            },
            {
              title: "Getting Started with React Hooks",
              id: "getting-started-with-react-hooks",
              description: (
                <>
                  <p className="simple_answers">
                    In this tutorial, we will learn how to use React Hooks in
                    our React application. We will create a simple React
                    application and then we will add Hooks to it.
                  </p>
                  <br />
                  <p className="simple_answers">
                    In this tutorial, we will learn about the following Hooks:
                  </p>
                  <ul className="answer_list">
                    <li className="answer_list_item">
                      <b>useState</b> - This hook lets you add React state to
                      function components.
                    </li>
                    <li className="answer_list_item">
                      <b>useEffect</b> - This hook lets you perform side effects
                      in function components.
                    </li>
                  </ul>
                  <br />
                  <p className="simple_answers">
                    Rest of the Hooks will be covered in our future tutorials.
                  </p>
                </>
              ),
            },
            {
              title: "Example of React Hooks",
              id: "example-of-react-hooks",
              description: (
                <>
                  <p className="simple_answers">
                    In this section, we will create a simple React application
                    and then we will add Hooks to it.
                  </p>
                  <br />
                  <p className="simple_answers">
                    First, create a new React application using the following
                    command:
                  </p>
                  <CodeSnippet language="bash" codeString={code1} />
                  <br />
                  <p className="simple_answers">
                    This will create a new React application in a folder named
                    <b> react-hooks-example</b>. Now, open the project in your
                    favorite code editor and open the
                    <b> App.js</b> file. Replace the code in the file with the
                    following code:
                  </p>
                  <CodeSnippet language="javascript" codeString={code2} />
                  <br />
                  <p className="simple_answers">
                    Now, run the following command to start the React
                    application:
                  </p>
                  <CodeSnippet language="bash" codeString={code3} />
                  <br />
                  <p className="simple_answers">
                    This will start the React application on port 3000. Open
                    http://localhost:3000 in your browser to see the output.
                  </p>
                  <br />
                  <p className="simple_answers">
                    You should see the following output:
                  </p>
                  <Image
                    src={
                      "https://user-images.githubusercontent.com/76992713/213081499-f6315aca-cedf-44b5-bb31-bc79e5669bd4.png"
                    }
                    alt="React Hooks Example"
                    width={700}
                    height={350}
                    className="image_nextjs"
                  />
                  <br />
                  <br />
                  <p className="simple_answers">
                    In the above code, we have imported the following Hooks:
                  </p>
                  <ul className="answer_list">
                    <li className="answer_list_item">
                      <b>useState</b> - This hook lets you add React state to
                      function components.
                    </li>
                    <li className="answer_list_item">
                      <b>useEffect</b> - This hook lets you perform side effects
                      in function components.
                    </li>
                  </ul>
                  <br />
                  <p className="simple_answers">
                    In the above code, we have created a state variable named
                    <b> count</b> and initialized it to 0. We have also created
                    a function named <b>setCount</b> to update the value of the
                    state variable.
                  </p>
                  <br />
                  <p className="simple_answers">
                    We have also created another state variable named
                    <b> isEven </b> and initialized it to
                    <b> false </b>. We have also created a function named{" "}
                    <b>setIsEven</b> to update the value of the state variable.
                  </p>
                  <br />
                  <p className="simple_answers">
                    When we click on the <b>Increment</b> button, the
                    <b> count </b> state variable will be incremented by 1 and
                    the <b>isEven</b> state variable will be updated based on
                    the value of the
                    <b> count</b> state variable.
                  </p>
                  <br />
                  <p className="simple_answers">
                    When we click on <b>Increment</b> state of count will be
                    change , and we have use useEffect to change the state of
                    isEven based on the value of count. So when we click on
                    Increment button , the state of count will be change and
                    useEffect will be called and it will change the state of
                    isEven based on the value of count.
                  </p>
                  <br />
                </>
              ),
            },
            {
              title: "Conclusion",
              id: "conclusion",
              description: (
                <>
                  <p className="simple_answers">
                    In this article, we have learned about React Hooks, how to
                    use them, and how to create a React application with Hooks.
                  </p>
                  <br />
                  <p className="simple_answers">
                    We can use <b>useState</b> where we need to create a state
                    variable and <b>useEffect</b> where we need to perform side
                    effects.
                  </p>
                  <br />
                  <p className="simple_answers">
                    <b>Happy Learning!</b>
                  </p>
                </>
              ),
            },
          ]}
        />
      </>
    ),
  },
];
