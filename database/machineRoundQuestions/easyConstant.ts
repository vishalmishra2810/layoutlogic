export const palindrome_string_example = `
// type 1 - using reverse method
function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// type 2 - using every method 
function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

// type 3 - using split, reverse and join method
function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
`;

export const array_flat_example = `
// polyfills for Array.flat() and Array.flatMap()

if (!Array.prototype.flat) {
  Object.defineProperty(Array.prototype, "flat", {
    value: function (depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat(
          Array.isArray(toFlatten) && depth > 1
            ? toFlatten.flat(depth - 1)
            : toFlatten
        );
      }, []);
    },
  });
}

if (!Array.prototype.flatMap) {
  Object.defineProperty(Array.prototype, "flatMap", {
    value: function (callback, thisArg) {
      return this.map(callback, thisArg).flat();
    },
  });
}

// example usage
const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr.flat(Infinity));
console.log(arr.flatMap((x) => [x, x * 2]));

// output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

`;

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
