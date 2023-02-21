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
  TOP_FRONTEND_QUESTIONS = "/coding-question",
  FRONTEND_MACHINE_CODING_ROUND = "/machine-round-question",
  BLOG = "/blog",
  ADVANCE_FRONTEND_FEATURE = "/advance-frontend-feature",
  QUESTION_PRACTICE = "/question-practice",
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
  {
    title: "Array",
    value: "array",
  },
  {
    title: "String",
    value: "string",
  },
  {
    title: "Tree",
    value: "tree",
  },
  {
    title: "Stack",
    value: "stack",
  },
  {
    title: "Queue",
    value: "queue",
  },
  {
    title: "Hash Map",
    value: "hash-map",
  },
  {
    title: "Linked List",
    value: "linked-list",
  },
  {
    title: "Graph",
    value: "graph",
  },
  {
    title: "Dynamic Programming",
    value: "dynamic-programming",
  },
  {
    title: "Greedy",
    value: "greedy",
  },
  {
    title: "Backtracking",
    value: "backtracking",
  },
  {
    title: "Bit Manipulation",
    value: "bit-manipulation",
  },
  {
    title: "Recursion",
    value: "recursion",
  },
  {
    title: "Sorting",
    value: "sorting",
  },
  {
    title: "Searching",
    value: "searching",
  },
  {
    title: "Math",
    value: "math",
  },
  {
    title: "Mixed",
    value: "mixed",
  },
];

export const FRONT_END_MACHINE_CODING_TOPICS = [
  "All",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SCSS",
  "NextJS",
  "Mixed",
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

export const BLOG_SLUG_LIST = ["top-10-javascript-concepts-you-must-know"];

export const TUTORIAL_LIST = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJs",
  "SCSS",
  "Redux",
  "NextJS",
  "TypeScript",
];

export enum stack_blitz_url {
  "simple_todo_list" = "web-platform-1qdfqt",
  "fetch_data_from_api" = "web-platform-hzxtpe",
  "responsive_navigation_bar" = "web-platform-jwqcrz",
  "simple_calculator" = "web-platform-zjxkyt",
  "drag_and_drop" = "web-platform-uewoba",
  "image_carousel" = "web-platform-nlrd1d",
  "lazy_load_images" = "web-platform-1y4gdj",
  "nested_comments" = "web-platform-zcip94",
  "rating_system" = "web-platform-c6p1mk",
  "web_worker_offload_cpu_using_worker_js" = "web-platform-wetqtp",
  "geolocation_api_display_user_location_with_current_location_details" = "web-platform-jpr3jp",
  "pixel-art-maker" = "web-platform-9djjcj",
  "tic-tac-toe-game" = "web-platform-1ccpet",
  "reactjs-countdown-timer" = "react-ts-2nkzws",
  "optimize-search-filter-in-reactjs-using-debounce-and-infinite-scroll" = "react-ts-qhzwoc",
  "bishop-on-chessboard" = "web-platform-k2z696",
  "reactjs-counter-application" = "react-8de17j",
  "pagination" = "web-platform-x8zexy",
}

export const ALL_PATH_MACHINE_CODING = [
  "simple_todo_list",
  "fetch_data_from_api",
  "responsive_navigation_bar",
  "simple_calculator",
  "drag_and_drop",
  "image_carousel",
  "lazy_load_images",
  "nested_comments",
  "rating_system",
  "web_worker_offload_cpu_using_worker_js",
  "geolocation_api_display_user_location_with_current_location_details",
  "pixel-art-maker",
  "tic-tac-toe-game",
  "reactjs-countdown-timer",
  "optimize-search-filter-in-reactjs-using-debounce-and-infinite-scroll",
  "bishop-on-chessboard",
  "reactjs-counter-application",
  "pagination",
];

export enum LAYOUT_TYPE {
  LIST = "list",
  GRID = "grid",
}

export enum ADVANCE_FRONTEND_URL {
  "random-color-palette-generator" = "web-platform-qkw6r9",
  "check-internet-connection" = "web-platform-bylfby",
  "random-password-generator" = "web-platform-robs3z",
  "detect-browser-or-tab-close" = "web-platform-yschbp",
  "convert-text-to-speech" = "web-platform-u1adig",
}
