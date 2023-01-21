import { ALL_TECH } from "../database/allTech";
import { EASY_CSS } from "../database/css/easyCss";
import { HARD_CSS } from "../database/css/hardCss";
import { MEDIUM_CSS } from "../database/css/mediumCss";
import { EASY_HTML } from "../database/html/easyHtml";
import { HARD_HTML } from "../database/html/hardHtml";
import { MEDIUM_HTML } from "../database/html/mediumHtml";
import { EASY_JAVASCRIPT } from "../database/javascript/easyJavascript";
import { HARD_JAVASCRIPT } from "../database/javascript/hardJavascript";
import { MEDIUM_JAVASCRIPT } from "../database/javascript/mediumJavascript";
import { EASY_MACHINE_QUESTIONS } from "../database/machineRoundQuestions/easyMachineQuestions";
import { HARD_MACHINE_QUESTIONS } from "../database/machineRoundQuestions/hardMachineQuestions";
import { MEDIUM_MACHINE_QUESTIONS } from "../database/machineRoundQuestions/mediumMachineQuestions";
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
import reactIcon from "../assets/react.svg";
import javascriptIcon from "../assets/javascript.svg";
import cssIcon from "../assets/css.svg";
import htmlIcon from "../assets/html.svg";
import scssIcon from "../assets/scss.svg";
import reduxIcon from "../assets/redux.svg";
import { EASY_CODING_QUESTIONS } from "../database/codingQuestions/easyCodingQuestions";
import { MEDIUM_CODING_QUESTIONS } from "../database/codingQuestions/mediumCodingQuestions";
import { HARD_CODING_QUESTIONS } from "../database/codingQuestions/hardCodingQuestions";
import { TOPIC_LIST } from "./constant";
import { REACT_POST } from "../blog_Database/react/react";
import { JS_POST } from "../blog_Database/js/js";
import { CSS_POST } from "../blog_Database/css/css";
import { TS_POST } from "../blog_Database/ts/ts";
import { HTML_POST } from "../blog_Database/html/html";
import { Mixed_POST } from "../blog_Database/mixed/mixed";

export const getPostsByTopic = (posts: any, topic: string) => {
  if (topic === "All") {
    return posts;
  }
  return posts.filter((post: any) => post?.topic?.includes(topic));
};

export const getAllPosts = () => {
  return [
    ...REACT_POST,
    ...JS_POST,
    ...CSS_POST,
    ...TS_POST,
    ...HTML_POST,
    ...Mixed_POST,
  ];
};

export const getRecentPosts = (post: any) => {
  return post
    ?.sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    ?.slice(0, 2);
};

export const getPostsBySlug = (slug: string) => {
  let all_posts = getAllPosts();
  return all_posts?.find((post: any) => post?.slug === slug);
};

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

export const getDescription = (technologyUsed: string) => {
  if (technologyUsed) {
    technologyUsed = technologyUsed.toLowerCase();
    switch (technologyUsed) {
      case ALL_TECH.REACTJS:
        return `ReactJS is a JavaScript library for building user interfaces.
         ReactJS is a component-based library which helps us to build reusable UI components.
          ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces.
           It lets you compose complex UIs from small and isolated pieces of code called “components”`;
      case ALL_TECH.HTML:
        return `HTML is the standard markup language for Web pages. With HTML you can create your own Website.
         HTML is easy to learn - You will enjoy it!`;
      case ALL_TECH.CSS:
        return `CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.
          This tutorial will teach you CSS from basic to advanced.`;
      case ALL_TECH.JAVASCRIPT:
        return `JavaScript is the world's most popular programming language.
          JavaScript is the programming language of the Web.
            JavaScript is easy to learn.`;

      case ALL_TECH.SCSS:
        return `Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
          Sass is a stylesheet language that’s compiled to CSS.
            It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax.
              Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.`;

      case ALL_TECH.REDUX:
        return `Redux is a predictable state container for JavaScript apps.
          It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
            On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.`;
      default:
        return "";
    }
  }
};

export const getAllMachineRoundQuestions = () => {
  return [
    ...HARD_MACHINE_QUESTIONS,
    ...MEDIUM_MACHINE_QUESTIONS,
    ...EASY_MACHINE_QUESTIONS,
  ];
};

export const getTechIcon = (technologyUsed: string) => {
  if (technologyUsed) {
    technologyUsed = technologyUsed.toLowerCase();
    switch (technologyUsed) {
      case ALL_TECH.REACTJS:
        return reactIcon;
      case ALL_TECH.HTML:
        return htmlIcon;
      case ALL_TECH.CSS:
        return cssIcon;
      case ALL_TECH.JAVASCRIPT:
        return javascriptIcon;
      case ALL_TECH.SCSS:
        return scssIcon;
      case ALL_TECH.REDUX:
        return reduxIcon;
      default:
        return "";
    }
  }
};

export const getQuestionsInformation = (slug: string) => {
  let all_questions = [
    ...EASY_MACHINE_QUESTIONS,
    ...MEDIUM_MACHINE_QUESTIONS,
    ...HARD_MACHINE_QUESTIONS,
  ];
  let question = all_questions?.filter(
    (question: any) => question?.slug === slug
  );
  return question[0];
};

export const getAllFrontEndCodingQuestions = () => {
  return [
    ...EASY_CODING_QUESTIONS,
    ...MEDIUM_CODING_QUESTIONS,
    ...HARD_CODING_QUESTIONS,
  ];
};
