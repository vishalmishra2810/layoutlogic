import ListShow from "../../common/listShow/ListShow";

export const EASY_REACTJS = [
  {
    id: 1,
    question: "What is ReactJS?",
    answer: (
      <ListShow
        typeOfList={"ul"}
        list={[
          "ReactJS is a JavaScript library for building user interfaces.",
          "ReactJS is developed by Facebook and Instagram.",
          "ReactJS is used for handling the view layer for web and mobile apps.",
          "ReactJS allows us to create reusable UI components.",
          "ReactJS is a component-based library.",
        ]}
      />
    ),
  },
];
