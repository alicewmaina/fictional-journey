
// 1. What is an Array?
// An array is a special variable that can hold more than one value at a time.
let fruits = ["apple", "banana", "cherry"];

// 2. Creating Arrays
let numbers = [1, 2, 3, 4, 5];
let emptyArray = [];
let mixed = [1, "hello", true];

// 3. Accessing Elements
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"

// 4. Modifying Elements
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]

// 5. Array Length
console.log(fruits.length); // 3

// 6. Adding Elements
fruits.push("date"); // Adds to end
fruits.unshift("apricot"); // Adds to start
console.log(fruits); // ["apricot", "apple", "blueberry", "cherry", "date"]

// 7. Removing Elements
fruits.pop(); // Removes last
fruits.shift(); // Removes first
console.log(fruits); // ["apple", "blueberry", "cherry"]

// 8. Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

fruits.forEach(function(fruit) {
	console.log(fruit);
});

// 9. Common Array Methods
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(n => n * 2); // [2, 4, 6, 8, 10]
let even = nums.filter(n => n % 2 === 0); // [2, 4]
let sum = nums.reduce((acc, n) => acc + n, 0); // 15
let found = nums.find(n => n > 3); // 4

// 10. Other Useful Methods
let colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // true
console.log(colors.indexOf("blue")); // 2
console.log(colors.reverse()); // ["blue", "green", "red"]
console.log(colors.sort()); // ["blue", "green", "red"]

// 11. Multidimensional Arrays
let matrix = [
	[1, 2],
	[3, 4]
];
console.log(matrix[1][0]); // 3

// 12. Spread Operator
let moreFruits = [...fruits, "kiwi"];
console.log(moreFruits);

// 13. Destructuring Arrays
let [first, second] = fruits;
console.log(first); // "apple"
console.log(second); // "blueberry"