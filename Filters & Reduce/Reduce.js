// Example-1

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total); 


// Example-2
const words = ["cat", "elephant", "dog", "hippopotamus"];

const longest = words.reduce((longestWord, currentWord) =>
  currentWord.length > longestWord.length ? currentWord : longestWord
);

console.log(longest); 



// Example-3

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); 

