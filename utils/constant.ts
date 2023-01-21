export enum TOPICS_DIFFICULTY {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum TOPICS_DIFFICULTY_LABELS {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

export const READY_STATES_LABELS: any = {
  REACTJS: "reactjs",
  reactjs: "reactjs",
  HTML: "html",
  html: "html",
  CSS: "css",
  css: "css",
  JAVASCRIPT: "javascript",
  javascript: "javascript",
  SCSS: "scss",
  scss: "scss",
  REDUX: "redux",
  redux: "redux",
};

export enum URLPaths {
  HOME = "/",
  REACTJS = "/reactjs",
  HTML = "/html",
  CSS = "/css",
  JAVASCRIPT = "/javascript",
  SCSS = "/scss",
  REDUX = "/redux",
  TOP_FRONTEND_QUESTIONS = "/top-front-end-coding-questions",
  FRONTEND_MACHINE_CODING_ROUND = "/front-end-machine-coding-round-questions",
  BLOG = "/blog",
}

export const META_TAGS = {
  DESCRIPTION:
    "Best Website to learn Reactjs, HTML, CSS, Javascript, Scss, Redux, FrontEnd Machine Coding Round, and Top FrontEnd Coding Questions",
  KEYWORDS:
    "reactjs, html, css, javascript, scss, redux, nextjs, typescript, frontend, machine coding round,,examples, quiz, learn, tutorial, web development, web development tutorial, web development examples, web development quiz, best website to learn web development",
};

export const CONSTANT_VALUE = {
  TOP_FRONTEND_QUESTIONS: "top-front-end-coding-questions",
  FRONTEND_MACHINE_CODING_ROUND: "front-end-machine-coding-round-questions",
};

export enum DEVICE_TYPE {
  MOBILE = 800,
}

export enum GOOGLE_ADSENSE {
  CLIENT_ID = "ca-pub-1953898602810770",
  AD_SLOT = "7142742824",
}

export interface IPostProps {
  title: string;
  description: string;
  topic: Array<string>;
  slug: string;
  img_url: string;
  date: string;
  answer: any;
}

export enum TOPIC_LIST {
  ALL = "All",
  HTML = "HTML",
  CSS = "CSS",
  JAVASCRIPT = "JavaScript",
  REACT = "React",
  SCSS = "SCSS",
  REDUX = "Redux",
  TYPESCRIPT = "TypeScript",
  MIXED = "Mixed",
}

export const HEADER_LIST = [
  {
    title: "React",
    path: URLPaths.REACTJS,
  },
  {
    title: "HTML",
    path: URLPaths.HTML,
  },
  {
    title: "CSS",
    path: URLPaths.CSS,
  },
  {
    title: "JavaScript",
    path: URLPaths.JAVASCRIPT,
  },
  {
    title: "SCSS",
    path: URLPaths.SCSS,
  },
  {
    title: "Redux",
    path: URLPaths.REDUX,
  },
];

export const FRONT_END_CODING_TOPICS = [
  "All",
  "Array",
  "String",
  "Tree",
  "Stack",
  "Queue",
  "Hash Map",
  "Linked List",
  "Data Structure",
  "Algorithm",
];

export const FRONT_END_MACHINE_CODING_TOPICS = [
  "All",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "SCSS",
  "NextJS",
  "TypeScript",
];

export const BLOG_TOPICS = [
  "All",
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "SCSS",
  "Redux",
  "NextJS",
  "TypeScript",
  "Mixed",
];

export const FOOTER_HIDE_LIST = [
  "reactjs",
  "html",
  "css",
  "javascript",
  "scss",
  "redux",
];
