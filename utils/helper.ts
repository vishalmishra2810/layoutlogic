import { ALL_TECH } from "../database/allTech";
import { EASY_CSS } from "../database/css/easyCss";
import { HARD_CSS } from "../database/css/hardCss";
import { MEDIUM_CSS } from "../database/css/mediumCss";
import { EASY_HTML } from "../database/html/easyhtml";
import { HARD_HTML } from "../database/html/hardHtml";
import { MEDIUM_HTML } from "../database/html/mediumhtml";
import { EASY_JAVASCRIPT } from "../database/javascript/easyJavascript";
import { HARD_JAVASCRIPT } from "../database/javascript/hardJavascript";
import { MEDIUM_JAVASCRIPT } from "../database/javascript/mediumJavascript";
import { EASY_REACTJS } from "../database/reactjs/easyReactjs";
import { HARD_REACTJS } from "../database/reactjs/hardReactjs";
import { MEDIUM_REACTJS } from "../database/reactjs/mediumReactjs";
import { EASY_REDUX } from "../database/redux/easyRedux";
import { HARD_REDUX } from "../database/redux/hardRedux";
import { MEDIUM_REDUX } from "../database/redux/mediumRedux";
import { EASY_SCSS } from "../database/scss/easyScss";
import { HARD_SCSS } from "../database/scss/hardScss";
import { MEDIUM_SCSS } from "../database/scss/mediumScss";
import { TOPICS_DIFFICULTY } from "./constant";

export const getQuestionWithSearchText = (searchText: string, list: any) => {
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
        return difficultyLevel === TOPICS_DIFFICULTY.EASY
          ? getQuestionWithSearchText(searchText, EASY_HTML)
          : difficultyLevel === TOPICS_DIFFICULTY.MEDIUM
          ? getQuestionWithSearchText(searchText, MEDIUM_HTML)
          : getQuestionWithSearchText(searchText, HARD_HTML);
      case ALL_TECH.CSS:
        return difficultyLevel === TOPICS_DIFFICULTY.EASY
          ? getQuestionWithSearchText(searchText, EASY_CSS)
          : difficultyLevel === TOPICS_DIFFICULTY.MEDIUM
          ? getQuestionWithSearchText(searchText, MEDIUM_CSS)
          : getQuestionWithSearchText(searchText, HARD_CSS);
      case ALL_TECH.JAVASCRIPT:
        return difficultyLevel === TOPICS_DIFFICULTY.EASY
          ? getQuestionWithSearchText(searchText, EASY_JAVASCRIPT)
          : difficultyLevel === TOPICS_DIFFICULTY.MEDIUM
          ? getQuestionWithSearchText(searchText, MEDIUM_JAVASCRIPT)
          : getQuestionWithSearchText(searchText, HARD_JAVASCRIPT);
      case ALL_TECH.SCSS:
        return difficultyLevel === TOPICS_DIFFICULTY.EASY
          ? getQuestionWithSearchText(searchText, EASY_SCSS)
          : difficultyLevel === TOPICS_DIFFICULTY.MEDIUM
          ? getQuestionWithSearchText(searchText, MEDIUM_SCSS)
          : getQuestionWithSearchText(searchText, HARD_SCSS);
      case ALL_TECH.REDUX:
        return difficultyLevel === TOPICS_DIFFICULTY.EASY
          ? getQuestionWithSearchText(searchText, EASY_REDUX)
          : difficultyLevel === TOPICS_DIFFICULTY.MEDIUM
          ? getQuestionWithSearchText(searchText, MEDIUM_REDUX)
          : getQuestionWithSearchText(searchText, HARD_REDUX);

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
      case ALL_TECH.CSS:
        return [...EASY_CSS, ...MEDIUM_CSS, ...HARD_CSS];
      case ALL_TECH.JAVASCRIPT:
        return [...EASY_JAVASCRIPT, ...MEDIUM_JAVASCRIPT, ...HARD_JAVASCRIPT];
      case ALL_TECH.SCSS:
        return [...EASY_SCSS, ...MEDIUM_SCSS, ...HARD_SCSS];
      case ALL_TECH.REDUX:
        return [...EASY_REDUX, ...MEDIUM_REDUX, ...HARD_REDUX];
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
