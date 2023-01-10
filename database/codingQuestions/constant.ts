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
