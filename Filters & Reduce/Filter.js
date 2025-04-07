// Example-1

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 

// Example-2

const names = ["Alice", "Bob", "Amanda", "Charlie"];

const aNames = names.filter(name => name.startsWith("A"));

console.log(aNames);

// Example-3

const ages = [12, 17, 18, 21, 14];

const adults = ages.filter(age => age >= 18);

console.log(adults); 
