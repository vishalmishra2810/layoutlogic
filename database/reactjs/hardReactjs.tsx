import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";

export const HARD_REACTJS = [
  {
    question:
      "Can you explain the difference between the virtual DOM and the actual DOM, and why React uses a virtual DOM?",
    answer: (
      <>
        <p className="simple_answers">
          The virtual DOM is a copy of the actual DOM. It is a lightweight
          representation of the actual DOM. It is a JavaScript object that is
          kept in memory. It is synced with the actual DOM by a library such as
          ReactDOM. This process is called reconciliation.
          <br /> The virtual DOM is faster than the actual DOM because it is a
          lightweight representation of the actual DOM. It is faster because it
          does not need to be updated as often as the actual DOM. It is updated
          only when there is a change in the state of the application.
        </p>
        <br />
        <br />
        <MakeDifferentiate
          totalColumn={2}
          columnDataLength={7}
          headerData={["Virtual DOM", "Actual DOM"]}
          columnData={{
            0: [
              "It is a lightweight representation of the actual DOM.",
              "It is a JavaScript object that is kept in memory.",
              "It is synced with the actual DOM by a library such as ReactDOM.",
              "This process is called reconciliation.",
              "It is faster than the actual DOM because it is a lightweight representation of the actual DOM.",
              "It is faster because it does not need to be updated as often as the actual DOM.",
              "It is updated only when there is a change in the state of the application.",
            ],
            1: [
              "It is a representation of the actual DOM.",
              "It is a tree of nodes that is kept in memory.",
              "It is synced with the virtual DOM by a library such as ReactDOM.",
              "This process is called reconciliation.",
              "It is slower than the virtual DOM because it is a representation of the actual DOM.",
              "It is slower because it needs to be updated as often as the virtual DOM.",
              "It is updated every time there is a change in the state of the application.",
            ],
          }}
        />
      </>
    ),
  },
  {
    question:
      "How do you handle asynchronous actions in a React application, such as API calls?",
    answer: (
      <>
        <p className="simple_answers">
          You can handle asynchronous actions in a React application, such as
          API calls, using the useEffect hook.
        </p>
        <br />
        <br />
      </>
    ),
  },
  {
    question:
      "Can you explain the difference between a controlled and an uncontrolled form element in React, and give an example of each?",
    answer: <></>,
  },
  {
    question:
      "Can you explain how to optimize the performance of a React application, and give some examples of techniques that can be used?",
    answer: <></>,
  },
];
