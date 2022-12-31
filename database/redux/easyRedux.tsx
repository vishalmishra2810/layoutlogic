import MakeDifferentiate from "../../common/makeDifferentiate/MakeDifferentiate";

export const EASY_REDUX = [
  {
    question: "What is Redux?",
    answer: (
      <>
        <p className="simple_answers">
          Redux is a predictable state container for JavaScript apps. It helps
          you write applications that behave consistently, run in different
          environments (client, server, and native), and are easy to test. On
          top of that, it provides a great developer experience, such as live
          code editing combined with a time traveling debugger.
        </p>
      </>
    ),
  },
  {
    question: "What are the three principles of Redux?",
    answer: (
      <>
        <p className="simple_answers">
          The three principles of Redux are:
        </p>
        <MakeDifferentiate
          totalColumn={3}
          headerData={["Single source of truth", "State is read-only", "Changes are made with pure functions"]}
          columnDataLength={3}
          columnData={{
            0: [
              "The state of your whole application is stored in an object tree within a single store.",
              "The only way to change the state is to emit an action, an object describing what happened.",
              "To specify how the state tree is transformed by actions, you write pure reducers.",
            ],
            1: [
              "The state of your whole application is stored in an object tree within a single store.",
              "The only way to change the state is to emit an action, an object describing what happened.",
              "To specify how the state tree is transformed by actions, you write pure reducers.",
            ],
            2: [
              "The state of your whole application is stored in an object tree within a single store.",
              "The only way to change the state is to emit an action, an object describing what happened.",
              "To specify how the state tree is transformed by actions, you write pure reducers.",
            ],
          }}
        />


      </>
    ),
  },
  {
    question: "What is a reducer in Redux and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          A reducer is a pure function that takes the previous state and an
          action, and returns the next state. (previousState, action) => newState
        </p>
        <p className="simple_answers">
          A reducer is a pure function that takes the previous state and an
          action, and returns the next state. (previousState, action) => newState
        </p>
        <p className="simple_answers">
          A reducer is a pure function that takes the previous state and an
          action, and returns the next state. (previousState, action) => newState
        </p>
      </>
    ),
  },
  { 
    question: "What is an action in Redux and how do you create one?",
    answer: (
      <>
        <p className="simple_answers">
          Actions are payloads of information that send data from your
          application to your store. They are the only source of information for
          the store. You send them to the store using store.dispatch().
        </p>
        <p className="simple_answers">
          Actions are payloads of information that send data from your
          application to your store. They are the only source of information for
          the store. You send them to the store using store.dispatch().
        </p>
        <p className="simple_answers">
          Actions are payloads of information that send data from your
          application to your store. They are the only source of information for
          the store. You send them to the store using store.dispatch().
        </p>
      </>
    ),
  },
  {
    question :"How do you use the Redux store to manage state in a React application?",
    answer : (
      <>
        <p className="simple_answers">
          The store is the object that brings them together. The store has the
          following responsibilities:
        </p>
        <MakeDifferentiate
          totalColumn={3}
          headerData={["Holds application state", "Allows access to state via getState()", "Allows state to be updated via dispatch(action)"]}
          columnDataLength={3}
          columnData={{
            0: [
              "The state of your whole application is stored in an object tree within a single store.",
              "The only way to change the state is to emit an action, an object describing what happened.",
              "To specify how the state tree is transformed by actions, you write pure reducers.",
            ],
            1: [
              "The state of your whole application is stored in an object tree within a single store.",
              "The only way to change the state is to emit an action, an object describing what happened.",
              "To specify how the state tree is transformed by actions, you write pure reducers.",
            ],
            2: [
              "The state of your whole application is stored in an object tree within a single store.",
              "The only way to change the state is to emit an action, an object describing what happened.",
              "To specify how the state tree is transformed by actions, you write pure reducers.",
            ],
          }}
        />
      </>
    )
  },
];
