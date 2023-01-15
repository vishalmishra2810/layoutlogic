export const variable_example = `
    var x = 5;
    let y = 6;
    const z = 7;

    let str = "Hello";

    let bool = true;

    `;

export const function_example = `
    // function declaration 
    function myFunction(a, b) {
        return a * b;
    }

    // function expression or arrow function 
    const myFunction = function(a, b) {
        return a * b;
    }
    `;

export const array_example = `
    let arr = [1, 2, 3, 4, 5];
    
    // array constructor
    let arr = new Array(1, 2, 3, 4, 5);
    `;

export const if_example = `
     // if statement
        if(condition) {
            // code block to be executed if the condition is true
        }

    // if else statement
    if (condition) {
        // code block to be executed if the condition is true
    } else {
        // code block to be executed if the condition is false
    }
    `;
export const loop_example = `

    // for loop
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // while loop

    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
    `;

export const switch_example = `
    // switch statement
    switch (expression) {
        case x:
            // code block
            break;
        case y:
            // code block
            break;
        default:
            // code block
    }
    `;
export const break_example = `
    // break statement
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            break;
        }
        console.log(i);
    }
    `;
export const continue_example = `
    // continue statement
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            continue;
        }
        console.log(i);
    }
    `;
export const object_example = `
    // object literal
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    // object constructor
    let person = new Object();
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue";
    `;

export const callback_example = `
    // callback function
    function myDisplayer(some) {
        document.getElementById("demo").innerHTML = some;
    }

    function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }

    myCalculator(5, 5, myDisplayer);
    `;
export const closure_example = `
    // closure function
    function add() {
        let counter = 0;
        function plus() {
            counter += 1;
        }
        return plus;
    }
    `;
export const promise_example = `
    // promise function
    let myPromise = new Promise(function(myResolve, myReject) {
        let x = 0;
        if (x == 0) {
            myResolve("OK");
        } else {
            myReject("Error");
        }
    });

    myPromise.then(
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );

    `;
export const event_example = `
    // event function
    document.getElementById("myBtn").addEventListener("click", displayDate);

    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }
    `;
export const fetch_example = `
    // fetch function
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))
    `;
export const doble_triple_example = `
    // double equal
    let x = 5;
    let y = "5";
    let z = x == y; // z will be true
    
    // triple equal

    let x = 5;
    let y = "5";
    let z = x === y; // z will be false
    `;
export const map_filter_reduce_example = `
    // map function
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(number => number * 2);
    console.log(doubled);
    //output: [2, 4, 6, 8, 10]

    // filter function
    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.filter(number => number % 2 === 0);
    console.log(even);
    //output: [2, 4]

    // reduce function
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((total, number) => total + number, 0);
    console.log(sum);
    //output: 15

    `;
export const call_apply_bind_example = `
    // call function
    const person = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }
    const person1 = {
        firstName:"John",
        lastName: "Doe",
    }
    const person2 = {
        firstName:"Mary",
        lastName: "Doe",
    }

    person.fullName.call(person1);  // Will return "John Doe"

    // apply function

    const person = {
        fullName: function(city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
    }
    const person1 = {
        firstName:"John",
        lastName: "Doe",

    }
    person.fullName.apply(person1, ["Oslo", "Norway"]); // Will return "John Doe,Oslo,Norway"

    // bind function

    const person = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }
    const person1 = {
        firstName:"John",
        lastName: "Doe",
    }
    const person2 = {
        firstName:"Mary",
        lastName: "Doe",
    }

    const x = person.fullName.bind(person1);
    console.log(x()); // Will return "John Doe"
    `;

export const for_forin_forof_example = `
    // for loop
    const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
    
    // for in loop
    const numbers = [1, 2, 3, 4, 5];
    for (let i in numbers) {
        console.log(numbers[i]);
    }


    // for of loop
    const numbers = [1, 2, 3, 4, 5];
    for (let i of numbers) {
        console.log(i);
    }
    `;
export const dom_example = `
    // dom function
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
   
    document.querySelector("p").innerHTML = "Hello JavaScript!";

    document.querySelectorAll("p").innerHTML = "Hello JavaScript!";

    document.getElementsByClassName("demo").innerHTML = "Hello JavaScript!";
    `;
export const higher_order_function_example = `
   //create a function that takes a function as an argument and calls it
    function callTwice(func) {
        func();
        func();
    }
    function laugh() {
        console.log("hahahahahahahahahaha!");
    }
    callTwice(laugh);
    //output: hahahahahahahahahaha! hahahahahahahahahaha!


    // higher order function
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(number => number * 2);
    console.log(doubled);
    //output: [2, 4, 6, 8, 10]

    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.filter(number => number % 2 === 0);
    console.log(even);
    //output: [2, 4]

    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((total, number) => total + number, 0);
    console.log(sum);
    //output: 15
`;

export const generator_example = `
    // generator function
    function* generator() {
        yield 1;
        yield 2;
        yield 3;
    }
    const gen = generator();
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);

    //output: 1 2 3
    `;
export const set_example = `
    // set function
    const set = new Set([1, 2, 3, 4, 5]);
    console.log(set.has(1)); // true
    console.log(set.has(5)); // true
    console.log(set.has(6)); // false
    `;
export const integrate_third_party_api_example = `
    // integrate third party api using 
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

    // integrate third party api using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xhr.responseType = 'json';
    xhr.onload = function() {
        console.log(xhr.response);
    };
    xhr.send();

    // integrate third party api using jQuery
    $.getJSON('https://jsonplaceholder.typicode.com/todos/1', function(json) {
        console.log(json);
    });
    
    `;
export const binary_search_example = `
    // binary search function
    function binarySearch(arr, x) {
        let start = 0, end = arr.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === x) return true;
            else if (arr[mid] < x) start = mid + 1;
            else end = mid - 1;
        }
        return false;
    }
    let arr = [1, 2, 3, 4, 5, 6];
    let x = 5;
    if (binarySearch(arr, x, 0, arr.length - 1)) console.log("Element found!");
    else console.log("Element not found!");

    //output: Element found!



    `;

export const prototype_inheritance_chaingin_example = `
   
// Create an object with a prototype
const animal = {
  eats: true,
  walk() {
    console.log('Animal walking');
  }
};

// Create a rabbit object with the animal prototype
const rabbit = Object.create(animal);

// Add a new property to the rabbit object
rabbit.jumps = true;

// Outputs: true
console.log(rabbit.eats);

// Outputs: true
console.log(rabbit.jumps);

// Call the walk method on the rabbit object
rabbit.walk();

// Outputs: Animal walking

`;

export const exception_example = `
    // exception function
    try {
        console.log('This line is executed...');
        throw new Error('Whoops!');
        console.log('This line is not...');
    } catch (err) {
        console.log('There was an error...');
    }

    //output: This line is executed...
    //output: There was an error...
    `;
export const function_declaration_expression_example = `

    // function declaration
    function sum(a, b) {
        return a + b;
    }

    // function expression

    const sum = function(a, b) {
        return a + b;
    }
`;

export const shallow_deep_copying_example = `
    // shallow copy
    const person = {
        name: 'John',
        age: 25,
        address: {
            city: 'New York',
            state: 'NY'
        }
    };

    const person2 = { ...person };
    person2.name = 'Peter';
    person2.address.city = 'Boston';

    console.log(person);
    console.log(person2);

    //output: { name: 'John', age: 25, address: { city: 'Boston', state: 'NY' } }
    //output: { name: 'Peter', age: 25, address: { city: 'Boston', state: 'NY' } }

    // deep copy

    const person = {
        name: 'John',
        age: 25,
        address: {
            city: 'New York',
            state: 'NY'
        }
    };

    const person2 = JSON.parse(JSON.stringify(person));
    person2.name = 'Peter';
    person2.address.city = 'Boston';

    console.log(person);
    console.log(person2);

    //output: { name: 'John', age: 25, address: { city: 'New York', state: 'NY' } }
    //output: { name: 'Peter', age: 25, address: { city: 'Boston', state: 'NY' } }

    `;

export const debouncing_example = `
    // debouncing function
    function debounce(func, delay) {
        let inDebounce;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => func.apply(context, args), delay);
        };
    }

    const run = debounce(() => console.log('debounce'), 1000);
    run();
    run();
    run();

    //output: debounce
    `;
export const throttling_example = `
    // throttling function
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    const run = throttle(() => console.log('throttle'), 1000);
    run();
    run();
    run();

    `;
export const async_await_example = `
    // async await function
    async function getTodos() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log(data);
    }
    getTodos();

    //output: [{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }, ...]
    `;

export const lodash_deep_copy_example = `
    // lodash deep copy
    const person = {
        name: 'John',
        age: 25,
        address: {
            city: 'New York',
            state: 'NY'
        }
    };

    const person2 = _.cloneDeep(person);
    person2.name = 'Peter';
    person2.address.city = 'Boston';

    console.log(person);
    console.log(person2);

    //output: { name: 'John', age: 25, address: { city: 'New York', state: 'NY' } }
    //output: { name: 'Peter', age: 25, address: { city: 'Boston', state: 'NY' } }

`;

export const private_variables_example = `
    // private variables
    const Person = (function() {
        const privateData = new WeakMap();
        class Person {
            constructor(name) {
                privateData.set(this, { name });
            }
            getName() {
                return privateData.get(this).name;
            }
        }
        return Person;
    }
    )();

    const person = new Person('John');
    console.log(person.getName());

    //output: John
`;

export const memoization_example = `
    // memoization function
    function memoize(fn) {
        const cache = {};
        return function(...args) {
            if (cache[args]) {
                return cache[args];
            }
            const result = fn.apply(this, args);
            cache[args] = result;
            return result;
        };
    }

    function add(a, b) {
        return a + b;
    }

    const memoizedAdd = memoize(add);

    console.log(memoizedAdd(1, 2));
    console.log(memoizedAdd(1, 2));

    //output: 3
    //output: 3
`;

export const event_delegation_example = `
<ul id="parent-element">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById('parent-element').addEventListener('click', function(event) {
    // Check if the clicked element is a list item
    if (event.target.tagName === 'LI') {
      // The clicked element is a list item, do something here
    }
  });
</script>
`;

export const strict_mode_example = `

// Strict mode can be enabled in two ways:

// 1. On the entire script: Add the string "use strict" as the first statement in a JavaScript file or at the top of a script block.

"use strict";
// code here



// 2. On a function: Add the string "use strict" as the first statement in a function.

function strict() {
    "use strict";
    // code here
    }
`;

export const implicit_example = `

// 1. Number + String
const num = 5;
const str = '5';
console.log(num + str); // 55

// 2. String + Boolean
const str = '5';
const bool = true;
console.log(str + bool); // 5true

// 3. Number + Boolean
const num = 5;
const bool = true;
console.log(num + bool); // 6

// 4. Number + Object
const num = 5;
const obj = { name: 'John' };
console.log(num + obj); // 5[object Object]

`;

export const arrow_template_literal_example = `
// arrow function
const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

// template literal
const name = 'John';
console.log(\`Hello \${name}\`); // Hello John

//destructuring 
const person = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

const { name, age, address: { city } } = person;
console.log(name, age, city); // John 25 New York
`;

export const currying_example = `
function add(a) {
    return function(b) {
        return a + b;
    };
}

const add5 = add(5);
console.log(add5(2)); // 7
console.log(add5(3)); // 8
`;
