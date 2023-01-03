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
        plus();
        return counter;
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

    // intergrate third party api using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xhr.responseType = 'json';
    xhr.onload = function() {
        console.log(xhr.response);
    };
    xhr.send();

    // intergrate third party api using jQuery
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
