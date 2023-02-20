import reactIcon from "../../../assets/react.svg";
import javascriptIcon from "../../../assets/javascript.svg";
import cssIcon from "../../../assets/css.svg";
import htmlIcon from "../../../assets/html.svg";
import scssIcon from "../../../assets/scss.svg";
import reduxIcon from "../../../assets/redux.svg";
import { URLPaths } from "../../../utils/constant";

export const FEATURED_DATA = [
  {
    title: "Reactjs",
    description: "Reactjs is a javascript library for building user interfaces",
    icon: reactIcon,
    url: URLPaths.REACTJS,
  },
  {
    title: "Redux",
    icon: reduxIcon,
    url: URLPaths.REDUX,
  },
  {
    title: "SCSS",
    icon: scssIcon,
    url: URLPaths.SCSS,
  },
  {
    title: "HTML",
    icon: htmlIcon,
    url: URLPaths.HTML,
  },
  {
    title: "Javascript",
    description: "JavaScript is the world's most popular programming language.",
    icon: javascriptIcon,
    url: URLPaths.JAVASCRIPT,
  },
  {
    title: "CSS",
    icon: cssIcon,
    url: URLPaths.CSS,
  },
];
