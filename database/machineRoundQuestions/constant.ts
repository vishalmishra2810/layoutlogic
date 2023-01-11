export const fetch_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
    <!--CDN for axios-->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <h1>Users List</h1>
    <div class="user_list" id="user_list"></div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const fetch_css = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #f1f1f1;
    width: 100%;
    height: 100vh;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .user_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  
  .user {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .item {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const navigation_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <!-- make a custom navigation bar with hamburger icon -->
    <nav class="navbar" id="nav_bar">
      <!-- Desktop Design -->
      <div class="nav-center">
        <ul class="nav-links">
          <li>
            <a href="index.html" class="nav-link">home</a>
          </li>
          <li>
            <a href="about.html" class="nav-link">about</a>
          </li>
          <li>
            <a href="contact.html" class="nav-link">contact</a>
          </li>
        </ul>
      </div>

      <!-- Mobile Design -->
      <div class="nav-toggle" id="humbugger_btn">
        <span class="toggle"></span>
        <span class="toggle"></span>
        <span class="toggle"></span>
      </div>
      <div class="nav-center_mobile">
        <ul class="nav-links_mobile">
          <li>
            <a href="index.html" class="nav-link">home</a>
          </li>
          <li>
            <a href="about.html" class="nav-link">about</a>
          </li>
          <li>
            <a href="contact.html" class="nav-link">contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <script src="index.js"></script>
  </body>
</html>
`;

export const navigation_css = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .navbar {
    background-color: #000;
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    height: 100%;
  }
  .nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    font-size: 20px;
    text-transform: uppercase;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .nav-center_mobile {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: rgb(95, 93, 93);
    z-index: 999;
    padding: 32px;
  }
  .nav-links_mobile {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  
  li {
    list-style: none;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #fff;
    width: max-content;
    padding: 16px;
  }
  span {
    width: 40px;
    height: 5px;
    background: #fff;
    display: block;
    margin: 5px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .hide {
    display: none;
  }
`;

export const navigation_js = `
let nav_bar = document.getElementById("nav_bar");
let windowWidth = window.innerWidth;
changeNavBar(windowWidth);

//when the window is resized the nav bar changes
window.addEventListener("resize", function () {
  windowWidth = window.innerWidth;
  changeNavBar(windowWidth);
});

// first_child is Desktop Design
// second_child is Hamburger Icon
// third_child is Mobile Design

function changeNavBar(width) {
  if (width > 800) {
    let first_child = nav_bar.firstElementChild;
    first_child.classList.remove("hide");

    let second_child = first_child.nextElementSibling;
    second_child.classList.add("hide");

    let third_child = second_child.nextElementSibling;
    third_child.classList.add("hide");
  } else {
    let first_child = nav_bar.firstElementChild;
    first_child.classList.add("hide");

    let second_child = first_child.nextElementSibling;
    second_child.classList.remove("hide");

    let third_child = second_child.nextElementSibling;
    third_child.classList.add("hide");
  }
}

nav_bar.addEventListener("click", function (event) {
  console.log(event.target.classList);
  if (
    event.target.classList.contains("nav-toggle") ||
    event.target.classList.contains("toggle")
  ) {
    let first_child = nav_bar.firstElementChild;
    let second_child = first_child.nextElementSibling;
    let third_child = second_child.nextElementSibling;
    if (third_child.classList.contains("hide")) {
      third_child.classList.remove("hide");
    } else {
      third_child.classList.add("hide");
    }
  }
});
`;

export const carousel_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <!-- simple Carousel -->
    <div class="container">
      <div class="carousel" id="carousel">
        <div class="carousel_btn carousel_btn--left" >
          <i class="fa fa-angle-left"> </i>
        </div>
        <div class="carousel_btn carousel_btn--right">
          <i class="fa fa-angle-right"> </i>
        </div>
      </div>
    </div>

    <script src="index.js"></script>
  </body>
</html>
`;

export const carousel_css = `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(237, 234, 234);
}
.carousel {
  height: 500px;
  width: 500px;
  border-radius: 8px;
  position: relative;
}

.carousel-item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 1s;
  position: absolute;
}

.carousel_btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 4rem;
  color: rgb(236, 232, 232);
  cursor: pointer;
  outline: none;
  z-index: 5;
}

.carousel_btn--left {
  left: 10px;
}

.carousel_btn--right {
  right: 10px;
}

.carousel__indicator {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.carousel__indicator-btn {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(236, 232, 232);
  margin: 0 5px;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 5;
}
.active_img {
  z-index: 2;
}
.active_indicator {
  background: rgb(231, 14, 14);
}
`;

export const carousel_js = `
let carousel = document.getElementById("carousel");

let images = [
  "https://i.picsum.photos/id/1016/500/500.jpg?hmac=I-n2_Gjz03emi67OrHVvJU994O3AVwAQz9iCCEtPttw",
  "https://i.picsum.photos/id/558/500/500.jpg?hmac=K6sxSbWmoFNpi5_XrJZSaqNy0bktrWquGRzBxFCCaUk",
  "https://i.picsum.photos/id/257/500/500.jpg?hmac=E3aibLoocUMIz-mk6W9pP-kEVnEHryz0tZdv3ZDwE28",
  "https://i.picsum.photos/id/635/500/500.jpg?hmac=VgZOPHsu5IBL-UOGVJlbH_zi7zdxFhhILuhPwO2n5hc",
  "https://i.picsum.photos/id/966/500/500.jpg?hmac=oGdKcKaNxPeQYOBIciLtIWBI-OqK_N_eoPODQp4iRR0",
];

let img_indicator = document.createElement("div");
img_indicator.classList.add("carousel__indicator");
for (let i = 0; i < images.length; i++) {
  if (i == 0) {
    carousel.innerHTML += \`
    <div class="carousel-item">
      <img src=\${images[i]}>
    </div>
    \`;
    img_indicator.innerHTML += \`
    <button class="carousel__indicator-btn"></button>\`;
  } else {
    carousel.innerHTML += \`
    <div class="carousel-item">
      <img src=\${images[i]}>
    </div>
    \`;
    img_indicator.innerHTML += \`
    <button class="carousel__indicator-btn"></button>\`;
  }
}
carousel.appendChild(img_indicator);
(() => {
  let all_img = document.querySelectorAll(".carousel-item");
  let all_img_indicator = document.querySelectorAll(".carousel__indicator-btn");
  all_img_indicator[0].classList.add("active_indicator");
  all_img[0].classList.add("active_img");
})();

carousel.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-angle-left")) {
    leftClick();
  } else if (e.target.classList.contains("fa-angle-right")) {
    rightClick();
  } else if (e.target.classList.contains("carousel__indicator-btn")) {
    // check which button is clicked
    let all_img = document.querySelectorAll(".carousel-item");
    let all_img_indicator = document.querySelectorAll(".carousel__indicator-btn");
    for (let i = 0; i < all_img_indicator?.length; i++) {
      if (all_img_indicator[i] == e.target) {
        all_img[i].classList.add("active_img");
        all_img_indicator[i].classList.add("active_indicator");
      } else {
        all_img[i].classList.remove("active_img");
        all_img_indicator[i].classList.remove("active_indicator");
      }
    }
  }
});

// when click on right arrow
function rightClick() {
  let all_img = document.querySelectorAll(".carousel-item");
  let all_img_indicator = document.querySelectorAll(".carousel__indicator-btn");
  for (let i = 0; i < all_img?.length; i++) {
    if (all_img[i].classList.contains("active_img")) {
      all_img[i].classList.remove("active_img");
      all_img_indicator[i].classList.remove("active_indicator");
      if (i == all_img.length - 1) {
        all_img[0].classList.add("active_img");
        all_img_indicator[0].classList.add("active_indicator");
      } else {
        all_img[i + 1].classList.add("active_img");
        all_img_indicator[i + 1].classList.add("active_indicator");
      }
      break;
    }
  }
}

// when click on left arrow
function leftClick() {
  let all_img = document.querySelectorAll(".carousel-item");
  let all_img_indicator = document.querySelectorAll(".carousel__indicator-btn");
  for (let i = 0; i < all_img?.length; i++) {
    if (all_img[i].classList.contains("active_img")) {
      all_img[i].classList.remove("active_img");
      all_img_indicator[i].classList.remove("active_indicator");
      if (i == 0) {
        all_img[all_img.length - 1].classList.add("active_img");
        all_img_indicator[all_img.length - 1].classList.add("active_indicator");
      } else {
        all_img[i - 1].classList.add("active_img");
        all_img_indicator[i - 1].classList.add("active_indicator");
      }
      break;
    }
  }
}

// change image on every 5 seconds
setInterval(() => {
  rightClick();
}, 5000);
`;

export const lazy_load_html = `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="app">
      <h1>Lazy Loaded Images using Intersection Observer</h1>
      <div class="container">
        <img
          src="https://i.picsum.photos/id/1016/500/500.jpg?hmac=I-n2_Gjz03emi67OrHVvJU994O3AVwAQz9iCCEtPttw"
          alt="image"
        />
        <img
          src="https://i.picsum.photos/id/558/500/500.jpg?hmac=K6sxSbWmoFNpi5_XrJZSaqNy0bktrWquGRzBxFCCaUk"
          alt="image"
        />

        <img
          data-src="https://i.picsum.photos/id/257/500/500.jpg?hmac=E3aibLoocUMIz-mk6W9pP-kEVnEHryz0tZdv3ZDwE28"
          alt="image"
          class="lazy"
        />

        <img
          data-src="https://i.picsum.photos/id/635/500/500.jpg?hmac=VgZOPHsu5IBL-UOGVJlbH_zi7zdxFhhILuhPwO2n5hc"
          alt="image"
          class="lazy"
        />
        <img
          data-src="https://i.picsum.photos/id/966/500/500.jpg?hmac=oGdKcKaNxPeQYOBIciLtIWBI-OqK_N_eoPODQp4iRR0"
          alt="image"
          class="lazy"
        />

        <img
          data-src="https://i.picsum.photos/id/257/500/500.jpg?hmac=E3aibLoocUMIz-mk6W9pP-kEVnEHryz0tZdv3ZDwE28"
          alt="image"
          class="lazy"
        />

        <img
          data-src="https://i.picsum.photos/id/635/500/500.jpg?hmac=VgZOPHsu5IBL-UOGVJlbH_zi7zdxFhhILuhPwO2n5hc"
          alt="image"
          class="lazy"
        />
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const lazy_load_css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.app {
  width: min(800px, 80%);
  margin: 2rem auto;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 300px;
}

.lazy {
  width: 800px;
  height: 600px;
  border-radius: 4px;
  z-index: 2;
}

`;

export const lazy_load_js = `
const images = document.getElementsByClassName("lazy");

// window.addEventListener("load", () => {
//   const lazyLoad = function () {
//     // Check the viewport to see if the image is in the viewport
//     const viewportTop = window.scrollY;
//     const viewportBottom = viewportTop + window.innerHeight;
//     console.log(images);
//     // Loop through the images and check if they are in the viewport
//     for (let i = 0; i < images.length; i++) {
//       // Get the image position
//       const imageTop = images[i].offsetTop;
//       const imageBottom = imageTop + images[i].offsetHeight;
//       // Check if the image is in the viewport
//       if (imageBottom >= viewportTop && imageTop <= viewportBottom) {
//         // If the image is in the viewport, set the src attribute to the data-src attribute
//         images[i].src = images[i].dataset.src;
//         // Remove the class "lazy" from
//         images[i].classList.remove("lazy");
//       }
//     }
//   };
//   console.log(images);
//   // Set up an event listener for the scroll event
//   window.addEventListener("scroll", lazyLoad);
// });


// add lazy loading using Intersection Observer API

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.intersectionRatio > 0) {
      let image = entry.target;
      image.src = image.dataset.src;
      observer.unobserve(image);
    }
  });
});

for (let i = 0; i < images.length; i++) {
  observer.observe(images[i]);
}

`;

export const pixel_art_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="main-container">
      <div class="header">
        <h1>Sketch</h1>
        <button id="reset">Reset</button>
        <input type="color" id="color" value="#ffff00" />
        <input type="number" id="number" value="16" />
      </div>
      <div class="container" id="container"></div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const pixel_art_css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  padding: 32px;
}

.header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header input {
  height: 30px;
  border-radius: 4px;
  padding: 0px 20px;
}
.header button {
  height: 30px;
  border-radius: 4px;
  padding: 0px 20px;
  background-color: #c22f2f;
  color: #fff;
  border: none;
  cursor: pointer;
}
#color {
  width: 100px;
  margin: 0px 40px;
}

.container {
  --size: 3;
  width: 1024px;
  height: 1024px;
  background-color: #000;
  display: grid;
  grid-template-columns: repeat(var(--size), 1fr);
  grid-template-rows: repeat(var(--size), 1fr);
  gap: 3px;
  padding: 3px;
}

.box {
  background-color: #393939;
}
`;

export const pixel_art_js = `
let clr = document.getElementById("color");
let number = document.getElementById("number");
let reset_btn = document.getElementById("reset");

let container = document.getElementById("container");

let size = number.value;

let draw = false;

function createGrid(size) {
  container.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.addEventListener("mouseover", () => mouseover(div));
    div.addEventListener("mousedown", () => mousedown(div));
    container.appendChild(div);
  }
}

createGrid(size);

function mouseover(div) {
  if (!draw) return;
  div.style.backgroundColor = clr.value;
}

function mousedown(div) {
  div.style.backgroundColor = clr.value;
}

window.addEventListener("mousedown", () => (draw = true));
window.addEventListener("mouseup", () => (draw = false));

reset_btn.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(number.value);
});

number.addEventListener("keyup", () => {
  size = number.value;
  container.innerHTML = "";
  createGrid(number.value);
});
`;

export const tic_toe_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="main-container">
      <div class="header">Tic Tac Toe</div>
      <div id="winner"></div>
      <div class="container" id="container">
        <div class="box" id="box1"></div>
        <div class="box" id="box2"></div>
        <div class="box" id="box3"></div>
        <div class="box" id="box4"></div>
        <div class="box" id="box5"></div>
        <div class="box" id="box6"></div>
        <div class="box" id="box7"></div>
        <div class="box" id="box8"></div>
        <div class="box" id="box9"></div>
      </div>
      <button id="reset">Reset</button>
    </div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const tic_toe_css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding: 32px;
}
.header {
  font-size: 32px;
  font-weight: 700;
  color: #000;
}

.container {
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  padding: 5px;
}
button {
  background-color: rgb(214, 47, 47);
  border: none;
  padding: 8px 16px;
  width: 100px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
.box {
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
}

#winner {
  font-size: 32px;
  font-weight: 700;
  color: rgb(59, 212, 85);
}
`;

export const tic_toe_js = `
let container = document.getElementById("container");
const winner = document.getElementById("winner");
let reset_btn = document.getElementById("reset");
let first = "X";

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("box")) {
    let box = e.target;
    if (box.innerText !== "" || winner.innerText !== "") {
      box.style.cursor = "not-allowed";
      return;
    }
    box.innerText = first;
    if (checkWinner()) {
      winner.innerText = \`Winner is: \${first}\`;
    }
    if (first === "X") {
      first = "O";
    } else {
      first = "X";
    }
  }
});

// for simplicity, I have checked all the possible winning combinations you can check it in a better way
function checkWinner() {
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  let box3 = document.getElementById("box3");
  let box4 = document.getElementById("box4");
  let box5 = document.getElementById("box5");
  let box6 = document.getElementById("box6");
  let box7 = document.getElementById("box7");
  let box8 = document.getElementById("box8");
  let box9 = document.getElementById("box9");

  if (
    box1.innerText === box2.innerText &&
    box2.innerText === box3.innerText &&
    box1.innerText !== ""
  ) {
    return true;
  } else if (
    box4.innerText === box5.innerText &&
    box5.innerText === box6.innerText &&
    box4.innerText !== ""
  ) {
    return true;
  } else if (
    box7.innerText === box8.innerText &&
    box8.innerText === box9.innerText &&
    box7.innerText !== ""
  ) {
    return true;
  } else if (
    box1.innerText === box4.innerText &&
    box4.innerText === box7.innerText &&
    box1.innerText !== ""
  ) {
    return true;
  } else if (
    box2.innerText === box5.innerText &&
    box5.innerText === box8.innerText &&
    box2.innerText !== ""
  ) {
    return true;
  } else if (
    box3.innerText === box6.innerText &&
    box6.innerText === box9.innerText &&
    box3.innerText !== ""
  ) {
    return true;
  } else if (
    box1.innerText === box5.innerText &&
    box5.innerText === box9.innerText &&
    box1.innerText !== ""
  ) {
    return true;
  } else if (
    box3.innerText === box5.innerText &&
    box5.innerText === box7.innerText &&
    box3.innerText !== ""
  ) {
    return true;
  }

  if (
    box1.innerText !== "" &&
    box2.innerText !== "" &&
    box3.innerText !== "" &&
    box4.innerText !== "" &&
    box5.innerText !== "" &&
    box6.innerText !== "" &&
    box7.innerText !== "" &&
    box8.innerText !== "" &&
    box9.innerText !== ""
  ) {
    winner.innerText = "Match Draw";
    return false;
  }

  return false;
}

reset_btn.addEventListener("click", function () {
  resetBox();
  winner.innerText = "";
});

function resetBox() {
  let box = document.getElementsByClassName("box");
  for (let i = 0; i < box.length; i++) {
    box[i].innerText = "";
  }
}
`;

export const counter_js = `
import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();

  const startStopWatch = () => {
    timerRef.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
  };

  const pauseStopWatch = () => {
    clearInterval(timerRef.current);
  };
  const resetStopWatch = () => {
    setTimer(0);
    clearInterval(timerRef.current);
  };

  const showTime = (currentTime) => {
    let minutes = Math.floor(currentTime / 60);
    let hours = Math.floor(currentTime / 3600);

    let seconds = currentTime - (minutes * 60 + hours * 3600);
    let time = "";
    time += hours < 10 ? "0" + hours : hours;
    time += " : " + (minutes < 10 ? "0" + minutes : minutes);
    time += " : " + (seconds < 10 ? "0" + seconds : seconds);
    return time;
  };
  return (
    <div className="App">
      <h1>StopWatch </h1>
      <div className="show_timer">
        <h1>{showTime(timer)}</h1>
      </div>
      <div className="btn_list">
        <button className="btn_start" onClick={startStopWatch}>
          Start
        </button>
        <button className="btn_stop" onClick={pauseStopWatch}>
          Pause
        </button>
        <button className="btn_start" onClick={resetStopWatch}>
          Reset
        </button>
      </div>
    </div>
  );
}
`;

export const counter_css = `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.App {
  font-family: sans-serif;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.btn_list {
  display: flex;
  align-items: center;
  gap: 16px;
}

button {
  width: 100px;
  height: 36px;
  border: none;
  border-radius: 4px;
}

.btn_start {
  background-color: green;
  color: white;
}

.btn_stop {
  background-color: red;
  color: white;
}
`;

export const rating_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <!-- rating system -->
    <div class="rating">
      <h1>Rate our service</h1>
      <div class="stars" id="stars">
        <i class="fa-solid fa-star star" data-index="1"></i>
        <i class="fa-solid fa-star star" data-index="2"></i>
        <i class="fa-solid fa-star star" data-index="3"></i>
        <i class="fa-solid fa-star star" data-index="4"></i>
        <i class="fa-solid fa-star star" data-index="5"></i>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>

`;

export const rating_css = `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  gap: 32px;
}

.stars {
  display: flex;
  gap: 16px;
  align-items: center;
}

.star {
  font-size: 32px;
  color: rgb(42, 41, 41);
  cursor: pointer;
}

.yellow_clr {
  color: rgb(236, 236, 71) !important;
}

`;

export const rating_js = `
let stars = document.getElementById("stars");
let ratedStar = "";

stars.addEventListener("click", function (e) {
  if (e.target.classList.contains("star")) {
    let index = e.target.dataset.index;
    removeStar();
    addStar(index);
    ratedStar = index;
  }
});

stars.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("star")) {
    let index = e.target.dataset.index;
    removeStar();
    addStar(index);
  }
});

stars.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("star")) {
    removeStar();
    addStar(ratedStar);
  }
});

function addStar(index) {
  for (let i = 0; i < index; i++) {
    stars.children[i].classList.add("yellow_clr");
  }
}

function removeStar() {
  for (let i = 0; i < 5; i++) {
    stars.children[i].classList.remove("yellow_clr");
  }
}
`;

export const chess_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="main">
      <h1>Chess Board</h1>
      <div class="chess-board" id="chess_board"></div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const chess_css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 32px;
}

.chess-board {
  --size: 8;
  width: 800px;
  height: 800px;
  display: grid;
  grid-template-columns: repeat(var(--size), 1fr);
  grid-template-rows: repeat(var(--size), 1fr);
  background: rgb(161, 77, 77);
}

.white_cell {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  background-color: rgb(190, 198, 198);
}
.black_cell {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  background-color: rgb(0, 0, 0);
}

.colored_cell {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  background-color: rgb(255, 0, 0);
}
`;

export const chess_js = `
let chess_board = document.getElementById("chess_board");

let size = 8;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    let square = document.createElement("div");
    square.setAttribute("data-src", \`\${i}-\${j}\`);
    if ((i + j) % 2 == 0) {
      square.classList.add("black_cell");
    } else {
      square.classList.add("white_cell");
    }
    square.addEventListener("mouseover", colorSquare);
    chess_board.appendChild(square);
  }
}

function colorSquare(event) {
  resetChessBoard();
  let square = event.target;
  let coordinates = square.getAttribute("data-src").split("-");
  let x = parseInt(coordinates[0]);
  let y = parseInt(coordinates[1]);
  colorLeftTop(x, y);
  colorRightTop(x, y);
  colorLeftBottom(x, y);
  colorRightBottom(x, y);
}

function colorLeftTop(x, y) {
  while (x >= 0 && y >= 0) {
    let square = document.querySelector(\`[data-src="\${x}-\${y}"]\`);
    if (square) {
      square.classList.add("colored_cell");
    }
    x--;
    y--;
  }
}

function colorRightTop(x, y) {
  while (x >= 0 && y < size) {
    let square = document.querySelector(\`[data-src="\${x}-\${y}"]\`);
    if (square) {
      square.classList.add("colored_cell");
    }
    x--;
    y++;
  }
}

function colorLeftBottom(x, y) {
  while (x < size && y >= 0) {
    let square = document.querySelector(\`[data-src="\${x}-\${y}"]\`);
    if (square) {
      square.classList.add("colored_cell");
    }
    x++;
    y--;
  }
}

function colorRightBottom(x, y) {
  while (x < size && y < size) {
    let square = document.querySelector(\`[data-src="\${x}-\${y}"]\`);
    if (square) {
      square.classList.add("colored_cell");
    }
    x++;
    y++;
  }
}

function resetChessBoard() {
  let squares = document.querySelectorAll(".colored_cell");
  squares.forEach((square) => {
    square.classList.remove("colored_cell");
  });
}

chess_board.addEventListener("mouseleave", resetChessBoard);
`;

export const countdown_js = `
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  // change one day to milliseconds
  const [timer, setTimer] = useState(() => {
    return 60 * 60 * 24;
  });

  useEffect(() => {
    let t = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);

  const showTimer = () => {
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer - 3600 * hours) / 60);
    let seconds = Math.floor(timer % 60);

    let time = "";
    time += hours < 10 ? "0" + hours : hours;
    time += " : " + (minutes < 10 ? "0" + minutes : minutes);
    time += " : " + (seconds < 10 ? "0" + seconds : seconds);
    return time;
  };
  return (
    <div className="App">
      <h1>CountDown</h1>
      <h1>{showTimer(timer)}</h1>
    </div>
  );
}
`;

export const countdown_css = `
.App {
  font-family: sans-serif;
  text-align: center;
}
`;

export const search_filter_js = `
import "./styles.css";
import { useEffect, useRef, useState } from "react";

let timer;
export default function App() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const observer = useRef();

  const lastElement = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasData) {
        setPage((page) => page + 1);
      }
    });

    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      \`https://openlibrary.org/search.json?title=\${title}&page=\${page}&limit=10\`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.docs?.length > 0) setHasData(true);
        else setHasData(false);
        setData((prev) => [...prev, ...data?.docs]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [page, title]);

  const titleChange = (e) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setTitle(e.target.value);
      setPage(1);
    }, 500);
  };

  return (
    <div className="App">
      <input type="text" onChange={titleChange} />
      {data &&
        data?.map((item, index) => (
          <div
            key={index}
            ref={index === data?.length - 1 ? lastElement : null}
          >
            {item.title}
          </div>
        ))}
      {loading && <p>{"Loading..."}</p>}
    </div>
  );
}
`;

export const search_filter_css = `
.App {
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px;
}

input {
  width: 300px;
  height: 36px;
}

`;

export const comment_box_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="main_container">
      <div class="all_comments">
        <div class="comments-card">
          <h2>The First comment</h2>
          <p class="comment">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quo
            culpa unde ipsam ipsa sit odio dolorem ipsum doloremque. Maxime!
          </p>
          <div class="comment_footer">
            <div>Likes 21</div>
            <div>Dislikes 2</div>
            <div class="reply">Reply</div>
          </div>
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const comment_box_css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background: #f2f2f2;
}

.main_container {
  width: min(90%, 1024px);
  margin: 3rem auto;
}

.all_comments {
  position: relative;
}

.all_comments::before {
  content: "";
  position: absolute;
  top: 0;
  left: -10px;
  width: 1px;
  height: 100%;
  background-color: rgb(192, 189, 189);
}

.all_comments:not(:first-child) {
  margin-left: 3rem;
  margin-top: 1rem;
}

.comments-card {
  min-width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.comments-card h2,
.comments-card p {
  margin-bottom: 1rem;
}

.comment_footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  opacity: 0.8;
  font-size: 14px;
}
.reply {
  cursor: pointer;
}
.add_comment {
  position: absolute;
  bottom: -3rem;
  right: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.add_comment input {
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.add_comment button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: rgb(27, 191, 103);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #fff;
}

`;

export const comment_box_js = `
let comment_list = document.querySelector(".all_comments");

comment_list.addEventListener("click", function (e) {
  // check if user click on reply button
  if (e.target.classList.contains("reply")) {
    let all_comments = e.target.parentElement.parentElement;
    // open reply form
    openCommentForm(all_comments);
  }

  // check if user click on submit button
  if (e.target.classList.contains("submit")) {
    // submit reply
    let comment = e.target.previousElementSibling.value;
    let all_comments = e.target.parentElement.parentElement.parentElement;
    if (comment == "") return;
    addCommentTOList(comment, all_comments);
    //remove all add_comment div
    let add_comment = document.querySelectorAll(".add_comment");
    add_comment.forEach((item) => {
      item.remove();
    });
  }
});

function openCommentForm(all_comments) {
  let comment_form = document.createElement("div");
  comment_form.classList.add("add_comment");
  comment_form.innerHTML = \`
  <input type="text" placeholder="Add a comment" />
  <button class="submit">Comment</button>
  \`;
  all_comments.appendChild(comment_form);
}

function addCommentTOList(comment, all_comments) {
  let comment_item = document.createElement("div");
  comment_item.classList.add("all_comments");
  comment_item.innerHTML = \`
  <div class="comments-card">
  <h2>\${comment}</h2>
  <p class="comment">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quo
    culpa unde ipsam ipsa sit odio dolorem ipsum doloremque. Maxime!
  </p>
  <div class="comment_footer">
    <div>Likes 21</div>
    <div>Dislikes 2</div>
    <div class="reply">Reply</div>
  </div>
</div>
  \`;
  all_comments.appendChild(comment_item);
}
`;

export const pagination_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="container" id="container"></div>
    <script src="index.js"></script>
  </body>
</html>

`;

export const pagination_css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background: #f5f5f5;
}

.container {
  width: min(90%, 1200px);
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.item_list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.item {
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.pagination {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
}

.pagination span {
  width: 50px;
  height: 100%;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}

.loader {
  text-align: center;
}
.active {
  background: rgb(52, 30, 214);
  color: #fff;
}
`;

export const pagination_js = `
let container = document.getElementById("container");
let activePage = 1;
let all_titles = [];

const getTitles = async () => {
  let p = document.createElement("p");
  p.classList.add("loader");
  p.innerHTML = "Loading...";
  container.appendChild(p);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const titles = data.map((item) => item.title);
  all_titles = titles;
  return titles;
};

getTitles().then((titles) => {
  addTitle(titles.slice(0, 10));
  let loader = document.querySelector(".loader");
  loader.remove();

  let pagination = document.createElement("div");
  pagination.classList.add("pagination");
  pagination.innerHTML = \`
  <span class="prev">Prev</span>
  \${[...Array(10)].map((_, i) => \`<span class="page">\${i + 1}</span>\`).join("")}
  <span class="next">Next</span>
  \`;
  container.appendChild(pagination);
  let pages = document.querySelectorAll(".page");
  pages[0].classList.add("active");
});

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("page")) {
    let item_list = document.querySelector(".item_list");
    item_list.innerHTML = "";
    all_titles
      .slice((e.target.innerText - 1) * 10, e.target.innerText * 10)
      .forEach((title) => {
        item_list.innerHTML += \`<div class="item"><p>\${title}</p></div>\`;
      });
    let pages = document.querySelectorAll(".page");
    pages.forEach((page) => page.classList.remove("active"));
    e.target.classList.add("active");
    activePage = e.target.innerText;
  }

  if (e.target.classList.contains("prev")) {
    if (activePage == 1) return;
    let pages = document.querySelectorAll(".page");
    pages.forEach((page) => page.classList.remove("active"));
    if (activePage > 1) {
      activePage--;
      let item_list = document.querySelector(".item_list");
      item_list.innerHTML = "";
      all_titles
        .slice((activePage - 1) * 10, activePage * 10)
        .forEach((title) => {
          item_list.innerHTML += \`<div class="item"><p>\${title}</p></div>\`;
        });
      pages[activePage - 1].classList.add("active");
    }
  }
  if (e.target.classList.contains("next")) {
    if (activePage == 10) return;
    let pages = document.querySelectorAll(".page");
    pages.forEach((page) => page.classList.remove("active"));
    if (activePage < 10) {
      activePage++;
      let item_list = document.querySelector(".item_list");
      item_list.innerHTML = "";
      all_titles
        .slice((activePage - 1) * 10, activePage * 10)
        .forEach((title) => {
          item_list.innerHTML += \`<div class="item"><p>\${title}</p></div>\`;
        });
      pages[activePage - 1].classList.add("active");
    }
  }
});

function addTitle(titles) {
  let all_item_list = document.querySelector(".item_list");
  if (all_item_list) all_item_list.remove();
  let item_list = document.createElement("div");
  item_list.classList.add("item_list");
  item_list.innerHTML = "";
  titles.forEach((title) => {
    item_list.innerHTML += \`<div class="item"><p>\${title}</p></div>\`;
  });
  container.appendChild(item_list);
}
`;

export const calculator_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.5.0/math.js"
      integrity="sha512-PRRHSwgn8QJinp43y5B698YK/FApqSvwmd7kVu8NWMksCl/3daKnNbPNWPuGKDrpIIb+0Dg5W55VSbZi0QG60Q=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="main">
      <div class="calculator" id="calculator">
        <div class="calculator__display">
          <div class="calculator__display__text" id="answer_display">0</div>
        </div>
        <div class="calculator__buttons">
          <span class="calculator__button">(</span>
          <span class="calculator__button">)</span>
          <span class="calculator__button">%</span>
          <span class="calculator__button">AC</span>

          <span class="calculator__button">7</span>
          <span class="calculator__button">8</span>
          <span class="calculator__button">9</span>
          <span class="calculator__button">/</span>

          <span class="calculator__button">4</span>
          <span class="calculator__button">5</span>
          <span class="calculator__button">6</span>
          <span class="calculator__button">*</span>

          <span class="calculator__button">1</span>
          <span class="calculator__button">2</span>
          <span class="calculator__button">3</span>
          <span class="calculator__button">-</span>

          <span class="calculator__button">0</span>
          <span class="calculator__button">.</span>
          <span class="calculator__button">=</span>
          <span class="calculator__button">+</span>
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const calculator_css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: min(100%, 1200px);
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.calculator {
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.calculator__display {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
}

.calculator__buttons {
  width: 100%;
  margin: 0px auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 16px;
  padding: 8px;
}

.calculator__button {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
}
`;

export const calculator_js = `
let calculator = document.getElementById("calculator");
let answer = document.getElementById("answer_display");

calculator.addEventListener("click", function (event) {
  if (event.target.classList.contains("calculator__button")) {
    addAllBtnFunctionality(event.target.innerText);
  }
});

function addAllBtnFunctionality(btnValue) {
  if (btnValue === "AC") {
    answer.innerText = "0";
  } else if (btnValue === "(" || btnValue === ")") {
    answer.innerText += btnValue;
  } else if (btnValue === "=") {
    answer.innerText = eval(answer.innerText);
  } else if (
    btnValue === "+" ||
    btnValue === "-" ||
    btnValue === "*" ||
    btnValue === "/" ||
    btnValue === "%" ||
    btnValue === "."
  ) {
    answer.innerText += btnValue;
  } else {
    if (answer.innerText === "0") answer.innerText = btnValue;
    else answer.innerText += btnValue;
  }
}

// you can add more functions here to handle complex expressions
function eval(expression) {
  let result = 0;
  //I am using here math.js library to handle complex expressions
  return math.evaluate(expression);
  // you can write your own logic here to handle complex expressions
  let numbers = expression.split(/[\+\-\*\%\/\(\)]/);
  let operators = expression.split(/[0-9\.]/).filter((item) => item !== "");
  console.log(numbers, operators);
  let num1 = Number(numbers[0]);
  let num2 = Number(numbers[1]);
  let operator = operators[0];
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "%") {
    result = num1 % num2;
  }
  return result;
}
`;
