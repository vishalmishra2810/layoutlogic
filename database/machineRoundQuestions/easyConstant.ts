export const todo_html = `
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
    <div class="container">
      <h1>Todo List</h1>
      <div class="input_box">
        <input
          type="text"
          placeholder="Add a todo"
          class="input_field"
          id="input_field"
        />
        <button class="add_button" id="add_button">Add</button>
      </div>
      <div class="todo_list" id="todo_list"></div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const todo_css = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 16px;
    padding: 32px;
  }
  
  .input_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 8px;
  }
  
  .input_field {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }
  
  .add_button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  .todo_list {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .todos {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    margin-bottom: 16px;
    background-color: #fff;
  }
  
  .todo-buttons {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .todo-text {
    font-size: 24px;
    font-weight: 500;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 300px;
  }
  
  .complete__button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .delete__button {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .completed {
    text-decoration: line-through;
    color: rgb(204, 204, 204);
  }
`;

export const todo_js = `
let add_btn = document.getElementById("add_button");
let add_input = document.getElementById("input_field");
let list = document.getElementById("todo_list");

// add todo using event delegation because when we click on child element it will bubble up to parent element
add_btn.addEventListener("click", function (event) {
  event.preventDefault();
  let value = add_input.value;
  if (value) {
    let todo_list = document.getElementById("todo_list");
    let child = \`
    <div class="todos">
        <div class="todo">
        <div class="todo-text">\${value}</div>
        <div class="todo-buttons">
          <button class="complete__button">Complete</button>
          <button class="delete__button">Delete</button>
        </div>
        </div>
    </div>
    \`;
    todo_list.innerHTML = child + todo_list.innerHTML;
    add_input.value = "";
  }
});

// delete todo
todo_list.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("delete__button")) {
    let todo = target?.parentElement?.parentElement?.parentElement;
    todo.remove();
  }
});

// complete todo
todo_list.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("complete__button")) {
    let todo = target?.parentElement?.parentElement;
    // get first child of todo
    let todo_text = todo?.firstElementChild;
    todo_text.classList.toggle("completed");
  }
});
`;

export const fetch_js = `
let user_list = document.getElementById("user_list");

//fetch method is used to get data from the server
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data?.length; i++) {
      let create_user = \`
       <div class="user">
       <div class="item">\${data[i]?.name}</div>
       <div class="item">\${data[i]?.email}</div>
       <div class="item">\${data[i]?.phone}</div>
       <div class="item">\${data[i]?.website}</div>
     </div>
       \`;
      user_list.innerHTML += create_user;
    }
  })
  .catch((error) => console.log(error));


  // axios method is used to get data from the server
  // add axios cdn in the index.html file
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(({data}) => {
    for (let i = 0; i < data?.length; i++) {
      let create_user = \`
       <div class="user">
       <div class="item">\${data[i]?.name}</div>
       <div class="item"> \${data[i]?.email}</div>
       <div class="item">\${data[i]?.phone}</div>
       <div class="item">\${data[i]?.website}</div>
     </div>
       \`;
      user_list.innerHTML += create_user;
    }
  })
  .catch((error) => console.log(error));
`;

export const drag_html = `
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
    <div class="container">
      <div class="left box">
        <p class="title" draggable="true">Title 1</p>
        <p class="title" draggable="true">Description 1</p>
      </div>
      <div class="right box"></div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
`;

export const drag_css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 1024px;
  height: 100vh;
  margin: 42px auto;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 42px;
}

.left,
.right {
  width: 340px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 32px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  gap: 12px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: rgb(232, 226, 226);
  width: 100%;
  height: 60px;
  background: rgb(215, 55, 55);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dragging {
  background: rgb(127, 127, 235);
}

.hide {
  display: none;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 1024px;
  margin: 42px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.container {
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.text-area {
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 16px;
  padding: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border: none;
}

button {
  width: 200px;
  height: 52px;
  border: none;
  border-radius: 4px;
  background-color: #2417d6;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-list {
  display: flex;
  gap: 32px;
  align-items: center;
}

#stop_btn {
  background-color: #ff0000;
}

.in_progress{
  color: #2dd782;
}

`;

export const drag_js = `
let draggable_item = document.querySelectorAll(".title");
let draggable_zones = document.querySelectorAll(".box");

// loop through draggable items
draggable_item.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    setTimeout(() => {
      e.target.classList.add("hide");
    }, 0);
  });

  item.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
    e.target.classList.remove("hide");
  });
});

// loop through draggable zones
draggable_zones.forEach((zone) => {
  zone.addEventListener("dragenter", (e) => {});

  zone.addEventListener("dragover", (e) => {
    // prevent default to allow drop
    e.preventDefault();
  });

  zone.addEventListener("dragleave", (e) => {
    console.log("dragleave");
  });

  zone.addEventListener("drop", (e) => {
    const draggable = document.querySelector(".dragging");
    zone.appendChild(draggable);
  });
});

`;

export const web_worker_html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="index.js"></script>
</body>
</html>
`;

export const web_worker_js = `
const worker = new Worker("worker.js");
worker.addEventListener("message", (e) => {
  console.log(e.data);
});

worker.postMessage("start");

// another task that will be executed
console.log("I will be executed first");

let result = 0;
for (let i = 0; i < 1000; i++) {
  result += i;
}

console.log(result);
`;

export const web_worker_worker_js = `
self.addEventListener("message", (e) => {
  if (e.data === "start") {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    self.postMessage("done");
  }
});
`;

export const geolocation_html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="longitude_latitude"></div>
    <div id="user_city_country"></div>
    <script src="index.js"></script>
  </body>
</html>
`;
export const geolocation_js = `
let user_longitude_latitude = document.getElementById("longitude_latitude");
let user_city_country = document.getElementById("user_city_country");
// gat user current location using geolocation api

// get user current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// show user current location
function showPosition(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  user_longitude_latitude.innerHTML = \`Latitude: \${position.coords.latitude} <br> Longitude: \${position.coords.longitude}\`;
  getCityAndCountry(position.coords.latitude, position.coords.longitude);
}

// call getLocation function
getLocation();

//find user current city and country and all user location details
function getCityAndCountry(latitude, longitude) {
  fetch(
    \`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=\${latitude}&longitude=\${longitude}&localityLanguage=en\`
  )
    .then((response) => response.json())
    .then((data) => {
    user_city_country.innerHTML = \`Country: \${data.countryName}\`;
      console.log(data);
    });
}

`;
