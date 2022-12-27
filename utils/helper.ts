import { ALL_TECH } from "../database/allTech";
import { REACTJS_QUESTIONS_WITH_ANSWERS } from "../database/reactjs";
import { EASY_REACTJS } from "../database/reactjs/easyReactjs";
import { HARD_REACTJS } from "../database/reactjs/hardReactjs";
import { MEDIUM_REACTJS } from "../database/reactjs/mediumReactjs";
import { TOPICS_DIFFICULTY } from "./constant";

export const getFileContent = (fileName: string) => {
  if (fileName) {
    fileName = fileName.toLowerCase();
    switch (fileName) {
      case ALL_TECH.REACTJS:
        return REACTJS_QUESTIONS_WITH_ANSWERS;
      default:
        return [];
    }
  }
};

export const getQuestionWithAnswerList = (
  technologyUsed: string,
  difficultyLevel: string
) => {
  if (technologyUsed) {
    technologyUsed = technologyUsed.toLowerCase();
    switch (technologyUsed) {
      case ALL_TECH.REACTJS:
        return difficultyLevel === TOPICS_DIFFICULTY.EASY
          ? EASY_REACTJS
          : difficultyLevel === TOPICS_DIFFICULTY.MEDIUM
          ? MEDIUM_REACTJS
          : HARD_REACTJS;
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
      default:
        return [];
    }
  }
  return [];
};