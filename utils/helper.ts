import { ALL_TECH } from "../database/allTech";
import { EASY_HTML } from "../database/html/easyhtml";
import { HARD_HTML } from "../database/html/hardHtml";
import { MEDIUM_HTML } from "../database/html/mediumhtml";
import { EASY_REACTJS } from "../database/reactjs/easyReactjs";
import { HARD_REACTJS } from "../database/reactjs/hardReactjs";
import { MEDIUM_REACTJS } from "../database/reactjs/mediumReactjs";
import { TOPICS_DIFFICULTY } from "./constant";

export const getQuestionWithSearchText = (searchText: string, list: any) => {
  console.log("searchText", searchText,list);
  if (searchText?.trim()?.length === 0) return list;
  return list?.filter((question: any) =>
    question?.question?.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const getQuestionWithAnswerList = (
  technologyUsed: string,
  difficultyLevel: string,
  searchText: string
) => {
  if (technologyUsed) {
    technologyUsed = technologyUsed.toLowerCase();
    switch (technologyUsed) {
      case ALL_TECH.REACTJS:
        return difficultyLevel === TOPICS_DIFFICULTY.EASY
          ? getQuestionWithSearchText(searchText, EASY_REACTJS)
          : difficultyLevel === TOPICS_DIFFICULTY.MEDIUM
          ? getQuestionWithSearchText(searchText, MEDIUM_REACTJS)
          : getQuestionWithSearchText(searchText, HARD_REACTJS);
      case ALL_TECH.HTML:
        console.log("HTML", EASY_HTML);
        return difficultyLevel === TOPICS_DIFFICULTY.EASY
          ? getQuestionWithSearchText(searchText, EASY_HTML)
          : difficultyLevel === TOPICS_DIFFICULTY.MEDIUM
          ? getQuestionWithSearchText(searchText, MEDIUM_HTML)
          : getQuestionWithSearchText(searchText, HARD_HTML);
      default:
        return [];
    }
  }
  return [];
};

export const getAllList = (technologyUsed: string) => {
  if (technologyUsed) {
    technologyUsed = technologyUsed.toLowerCase();
    switch (technologyUsed) {
      case ALL_TECH.REACTJS:
        return [...EASY_REACTJS, ...MEDIUM_REACTJS, ...HARD_REACTJS];
      case ALL_TECH.HTML:
        return [...EASY_HTML, ...MEDIUM_HTML, ...HARD_HTML];
      default:
        return [];
    }
  }
  return [];
};

export const getAllTopQuestions = (technologyUsed: string) => {
  if (technologyUsed) {
    technologyUsed = technologyUsed.toLowerCase();
    switch (technologyUsed) {
      case ALL_TECH.REACTJS:
        let allQuestions = [
          ...EASY_REACTJS,
          ...MEDIUM_REACTJS,
          ...HARD_REACTJS,
        ];
        return allQuestions?.filter((question: any) => question?.top === true);
      default:
        return [];
    }
  }
  return [];
};
