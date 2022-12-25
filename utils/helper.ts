import { ALL_TECH } from "../database/allTech";
import { REACTJS_QUESTIONS_WITH_ANSWERS } from "../database/reactjs";

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
