import CodeSnippet from "../../common/codeSnippet/CodeSnippet";
import TabView from "../../common/tabView/TabView";
import {
  chess_css,
  chess_html,
  chess_js,
  countdown_css,
  countdown_js,
  counter_css,
  counter_js,
  pagination_css,
  pagination_html,
  pagination_js,
  pixel_art_css,
  pixel_art_html,
  pixel_art_js,
  search_filter_css,
  search_filter_js,
  tic_toe_css,
  tic_toe_html,
  tic_toe_js,
} from "./constant";

export const HARD_MACHINE_QUESTIONS = [
  {
    question: "Build a pixel art maker using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          A pixel art maker is a web application that allows users to create
          pixel art.
        </p>
        <p className="simple-answer">
          The application should have a grid of squares.
        </p>
        <p className="simple-answer">
          The application should have a color palette.
        </p>
        <p className="simple-answer">
          The application should have a button to clear the grid.
        </p>
        <p className="simple-answer">
          The application should have a button to fill the grid with the
          selected color.
        </p>
        <p className="simple-answer">
          The application should have a button to fill the grid with random
          colors.
        </p>
        <p className="simple-answer">
          The application should have a button to resize the grid.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[pixel_art_html, pixel_art_css, pixel_art_js]}
          result_url="https://user-images.githubusercontent.com/76992713/214906302-63062f94-6286-4825-bbba-30953b0b9c2b.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "pixel-art-maker",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214906302-63062f94-6286-4825-bbba-30953b0b9c2b.png",
  },
  {
    question: "Build a Tic Tac Toe game using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          A Tic Tac Toe game is a web application that allows users to play Tic
          Tac Toe.
        </p>
        <p className="simple-answer">
          The application should have a grid of squares.
        </p>
        <p className="simple-answer">
          The application should have a button to reset the game.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[tic_toe_html, tic_toe_css, tic_toe_js]}
          result_url="https://user-images.githubusercontent.com/76992713/214907149-0dcbf8e0-d808-425f-90f6-29a60259974a.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "tic-tac-toe-game",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214907149-0dcbf8e0-d808-425f-90f6-29a60259974a.png",
  },
  {
    question: "Build a ReactJs countdown timer?.",
    answer: (
      <>
        <p className="simple-answer">
          A countdown timer is a web application that allows users to count
          down.
        </p>
        <br />
        <TabView
          tabList={["ReactJs", "CSS"]}
          tabComponentList={[countdown_js, countdown_css]}
          result_url="https://user-images.githubusercontent.com/76992713/214907646-939a0647-e68b-4529-b295-59431b215a83.png"
        />
      </>
    ),
    language: ["ReactJs", "CSS"],
    slug: "reactjs-countdown-timer",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214907646-939a0647-e68b-4529-b295-59431b215a83.png",
  },
  {
    question:
      "Optimize search filter in ReactJs using debounce and infinite scroll(Pagination).",
    answer: (
      <>
        <p className="simple-answer">
          A search filter is a web application that allows users to search.
        </p>
        <p className="simple-answer">
          The application should have a search input.
        </p>
        <br />
        <TabView
          tabList={["ReactJs", "CSS"]}
          tabComponentList={[search_filter_js, search_filter_css]}
          result_url="https://user-images.githubusercontent.com/76992713/214908311-24eb115e-4742-43ca-9786-b2f75caf435c.png"
        />
      </>
    ),
    language: ["ReactJs", "CSS"],
    slug: "optimize-search-filter-in-reactjs-using-debounce-and-infinite-scroll",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214908311-24eb115e-4742-43ca-9786-b2f75caf435c.png",
  },
  {
    question: "Build a Bishop on chessboard using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          A Bishop on chessboard is a web application that allows users to move
          Bishop on chessboard.
        </p>
        <p className="simple-answer">
          The application should have a grid of squares.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[chess_html, chess_css, chess_js]}
          result_url="https://user-images.githubusercontent.com/76992713/214908664-d63029e1-febf-4476-b4f1-b4b54a693cb6.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "bishop-on-chessboard",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214908664-d63029e1-febf-4476-b4f1-b4b54a693cb6.png",
  },
  {
    question:
      "Build a ReactJs counter application with start, reset, and pause functionality.",
    answer: (
      <>
        <p className="simple-answer">
          A counter application is a web application that allows users to count.
        </p>
        <p className="simple-answer">
          The application should have a start button.
        </p>
        <p className="simple-answer">
          The application should have a reset button.
        </p>
        <p className="simple-answer">
          The application should have a pause button.
        </p>
        <br />
        <TabView
          tabList={["ReactJs", "CSS"]}
          tabComponentList={[counter_js, counter_css]}
          result_url="https://user-images.githubusercontent.com/76992713/214909140-66ba76f2-489e-4384-8111-6b8162312300.png"
        />
      </>
    ),
    language: ["ReactJs", "CSS"],
    slug: "reactjs-counter-application",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214909140-66ba76f2-489e-4384-8111-6b8162312300.png",
  },
  {
    question:
      "Build a web application for pagination using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          A pagination is a web application that allows users to paginate.
        </p>
        <p className="simple-answer">
          The application should have a pagination component so that users can
          navigate between pages.
        </p>
        <br />
        <TabView
          tabList={["HTML", "CSS", "JavaScript"]}
          tabComponentList={[pagination_html, pagination_css, pagination_js]}
          result_url="https://user-images.githubusercontent.com/76992713/211242906-f771408e-a9e7-44da-b531-9f8adb66d0ea.png"
        />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    slug: "pagination",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/211242906-f771408e-a9e7-44da-b531-9f8adb66d0ea.png",
  },
];
