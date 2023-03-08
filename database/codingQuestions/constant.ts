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

export const string_example = `
// create a string 
let str = 'hello world';
console.log(str);
// output - hello world

// another method to create a string
let str2 = new String('hello world');
// output - [String: 'hello world']


// get the length of the string
console.log(str.length);
// output - 11


// get the character at a particular index
console.log(str[0]);
// output - h

// get the character at a particular index
console.log(str.charAt(0));
// output - h

// split the string into an array
console.log(str.split(' '));
// output - [ 'hello', 'world' ]

`;

export const reverse_word_string_example = `
// input : The quick brown fox
// output : fox brown quick The

//if we use split method then we can reverse the string and join it again to get the desired output
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// use reduce method
function reverseWords(str) {
    return str.split(' ').reduce((reversed, word) => {
        return word + ' ' + reversed;
    }, '');
}

// use for loop
function reverseWords(str) {
    let reversed = '';
    for (let word of str.split(' ')) {
        reversed = word + ' ' + reversed;
    }
    return reversed.trim();
}

// use for loop and reverse method
function reverseWords(str) {
    let reversed = '';
    for (let word of str.split(' ').reverse()) {
        reversed += word + ' ';
    }
    return reversed.trim();
}
`;

export const linked_list_example = `
// create a linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


// add elements to the linked list and print it
let head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3);
head.next.next.next = new Node(4);


let current = head;
while (current) {
    console.log(current.val);
    current = current.next;
}

// output - 1 2 3 4
`;

export const linked_list_reverse_example = `
// reverse a linked list
function reverse(head) {
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
`;

export const stack_queue_example = `
// create a stack
class Stack {
    constructor() {
        this.data = [];
    }

    push(val) {
        this.data.push(val);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

// create a stack and add elements to it

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// print the stack
console.log(stack.data);
// output - [ 1, 2, 3, 4 ]

// create a queue
class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(val) {
        this.data.push(val);
    }

    dequeue() {
        return this.data.shift();
    }

    peek() {
        return this.data[0];
    }
}


// create a queue and add elements to it

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

// print the queue
console.log(queue.data);

// output - [ 1, 2, 3, 4 ]
`;

export const hash_table_example = `
// create a hash table
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

// create a hash table and add elements to it

let myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);

// print the hash table
console.log(myHashTable.data);
// output - [ <1 empty item>, [ [ 'grapes', 10000 ] ], [ [ 'apples', 54 ] ], [ [ 'oranges', 2 ] ], <46 empty items> ]

`;

export const anagram_example = `

// check if two strings are anagrams of each other
function anagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

// check if two strings are anagrams of each other using sort method
function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

`;

export const tree_example = `

// create a tree
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// create a tree and add elements to it

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);


// print the tree

function printTree(root) {
    if (!root) {
        return;
    }
    console.log(root.val);
    printTree(root.left);
    printTree(root.right);
}

printTree(root);

// output - 1 2 4 5 3 6 7

`;

export const graph_example = `
// create a graph using adjacency list
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

// create a graph and add elements to it

let myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

// print the graph
myGraph.showConnections();

// output - 0-->1 2  1-->3 2 0  2-->4 1 0  3-->1 4  4-->3 2 5  5-->4 6  6-->5 
`;

export const fib_top_down = `
// top down approach
function fib(value , memo = {}) {
    if(memo[value]) return memo[value];
    if (value <= 2) return 1;
    memo[value] = fib(value - 1, memo) + fib(value - 2, memo);
    return memo[value];
}
`;

export const fib_bottom_up = `
// bottom up approach
function fib(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}
`;

export const coin_change_greedy_algo = `
// greedy algorithm
function coinChangeGreedy(coins, amount) {
    let result = [];
    let total = 0;
    for (let i = coins.length - 1; i >= 0; i--) {
        while (total + coins[i] <= amount) {
            result.push(coins[i]);
            total += coins[i];
        }
    }
    return result;
}
`;

export const coin_change_backtracking = `
// backtracking
function coinChangeBacktracking(coins, amount) {
    let result = [];
    let total = 0;
    let index = 0;
    while (index < coins.length) {
        if (total + coins[index] <= amount) {
            result.push(coins[index]);
            total += coins[index];
        } else {
            index++;
        }
    }
    return result;
}
`;

export const factorial_recursive = `
// recursive
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
`;

export const bubble_sort = `
// bubble sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
`;

export const binary_search = `
// binary search
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}
`;

export const lcm = `
// lcm of two numbers
function lcm(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let lcm = max;
    while (lcm % min !== 0) {
        lcm += max;
    }
    return lcm;
}
`;
