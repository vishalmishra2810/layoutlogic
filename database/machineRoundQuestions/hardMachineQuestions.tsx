export const HARD_MACHINE_QUESTIONS = [
  {
    question: "Build a pixel art maker using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          With help of `<b>Grid Layout</b>` you can create a pixel art maker.
        </p>
        <p className="simple-answer">
          With help of `<b>JavaScript</b>` you can add functionality to the
          pixel art maker.
        </p>
        <br />
        <p className="simple-answer">
          In input field you can set the size of the grid and then set the
          property of --size to the input value and then you will repeat that
          many times the number of rows and columns.
        </p>
        <br />
        <p className="simple-answer">
          You can use `<b>addEventListener</b>` to add functionality to the
          pixel art maker. When you mouser over the grid you can change the
          color of the grid to the color you want.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    title: "Pixel Art Maker",
    slug: "pixel-art-maker",
    description:
      "A pixel art maker is a web application that allows users to create pixel art.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214906302-63062f94-6286-4825-bbba-30953b0b9c2b.png",
  },
  {
    question: "Build a Tic Tac Toe game using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          We have created a 3x3 grid using `<b>Grid Layout</b>`.
        </p>
        <p className="simple-answer">
          When user clicks on any grid, we have added a `<b>X</b>` or `<b>O</b>`
          to the grid using `<b>JavaScript</b>`.
        </p>
        <br />
        <p className="simple-answer">
          Before adding `<b>X</b>` or `<b>O</b>` to the grid, we have checked
          whether the grid is empty or not. If the grid is empty then we have
          added `<b>X</b>` or `<b>O</b>` to the grid.
        </p>
        <br />
        <p className="simple-answer">
          We have also checked whether the game is over or not. If the game is
          over then we have disabled the grid. If the game is not over then we
          have enabled the grid.
        </p>
        <br />
        <br />
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    title: "Tic Tac Toe Game",
    slug: "tic-tac-toe-game",
    description:
      "A Tic Tac Toe game is a web application that allows users to play Tic Tac Toe.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214907149-0dcbf8e0-d808-425f-90f6-29a60259974a.png",
  },
  {
    question: "Build a ReactJs countdown timer?.",
    answer: (
      <>
        <p className="simple-answer">
          We have simple using `<b>Set Interval</b>` to create a countdown timer
          and we have used `<b>useState</b>` to update the state of the timer.
        </p>
        <br />
        <p className="simple-answer">
          Simple change the value of `<b>time</b>` to seconds and then use `
          <b>Math.floor</b>` to get the remaining minutes and seconds.
        </p>
      </>
    ),
    language: ["ReactJs", "CSS"],
    title: "ReactJs Countdown Timer",
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
          For `<b>Debounce</b>` we have used global state to store the value of
          the timer and when user types in the search bar we have cleared the
          timer and then we have set the timer again for 500ms and then if the
          user types again then we have cleared the timer and then we have set
          the timer again for 500ms and then we have updated the state of the
          search bar.
        </p>
        <br />
        <br />
        <p className="simple-answer">
          For `<b>Infinite Scroll</b>` we have used `
          <b>Intersection Observer</b>` to check whether the user has scrolled
          to the bottom of the page or not. If the user has scrolled to the
          bottom of the page then we have updated the state of the page number
          and then we have fetched the data from the API.
        </p>
      </>
    ),
    language: ["ReactJs", "CSS"],
    title:
      "Optimize search filter in ReactJs using debounce and infinite scroll",
    slug: "optimize-search-filter-in-reactjs-using-debounce-and-infinite-scroll",
    description:
      "A search filter is a web application that allows users to search.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214908311-24eb115e-4742-43ca-9786-b2f75caf435c.png",
  },
  {
    question: "Build a Bishop on chessboard using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          We have created a 8x8 grid using `<b>Grid Layout</b>` with help of `
          <b>JavaScript</b>` and for each grid we have added a data-src
          attribute and then we have used `<b>addEventListener</b>` to add
          functionality to the grid.
        </p>
        <br />
        <p className="simple-answer">
          When user hover over any grid then we know the data-src of the grid
          and run function in four directions and then we have changed the
          background color of the grid.
        </p>
        <br />
        <p className="simple-answer">
          When user remove the mouse from the grid then we have changed the
          background color of the grid to previous color.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    title: "Bishop on chessboard",
    slug: "bishop-on-chessboard",
    description:
      "A Bishop on chessboard is a web application that allows users to move Bishop on chessboard.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214908664-d63029e1-febf-4476-b4f1-b4b54a693cb6.png",
  },
  {
    question:
      "Build a ReactJs counter application with start, reset, and pause functionality.",
    answer: (
      <>
        <p className="simple-answer">
          We have used `<b>useState</b>` to store the value of the counter and
          then we have used setInterval to update the value of the counter.
        </p>
        <br />
        <p className="simple-answer">
          For storing the value of the timer we have used `<b>useRef</b>` and
          then we have used `<b>clearInterval</b>` to clear the timer.
        </p>
        <br />
        <br />
      </>
    ),
    language: ["ReactJs", "CSS"],
    title: "ReactJs Counter Application",
    slug: "reactjs-counter-application",
    description:
      "A counter application is a web application that allows users to count.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/214909140-66ba76f2-489e-4384-8111-6b8162312300.png",
  },
  {
    question:
      "Build a web application for pagination using HTML, CSS, and JavaScript.",
    answer: (
      <>
        <p className="simple-answer">
          For pagination we have to fixed the number of items per page and then
          we have to calculate the number of pages and then we have to create
          the pagination buttons and then we have to show the items of the
          current page.
        </p>
        <br />
        <p className="simple-answer">
          When user click on the pagination button then we have to update the
          state of the current page and then we have to show the items of the
          current page.
        </p>
      </>
    ),
    language: ["HTML", "CSS", "JavaScript"],
    title: "Pagination",
    slug: "pagination",
    description:
      "A pagination is a web application that allows users to paginate.",
    imgUrl:
      "https://user-images.githubusercontent.com/76992713/211242906-f771408e-a9e7-44da-b531-9f8adb66d0ea.png",
  },
];
