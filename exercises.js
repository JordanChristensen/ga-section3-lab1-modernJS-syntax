// Exercise 1 --> use `.map()` to iterate over the following array and create a new array where each value is multiplied by 2 and log the new array.
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const numsMultiplied = nums.map((num) => {
  return num * 2;
});
console.log(
  `\n ------------------ Exercise 1 ------------------ \n The original array --> ${nums} \n The modified array --> ${numsMultiplied}`
);

// Exercise 2 --> given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const [firstPizzaTopping, secondPizzaTopping] = pizzaToppings;
console.log(
  `\n ------------------ Exercise 2 ------------------ \n The first pizza topping is ${firstPizzaTopping}, the second pizza topping is ${secondPizzaTopping}.`
);

// Exercise 3 --> given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
const car = {
  make: "Audi",
  model: "q5",
};
const { make, model } = car;
console.log(
  `\n ------------------ Exercise 3 ------------------ \n This is a ${model} by ${make}.`
);

// Exercise 4 --> Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
const controversialPizzaToppings = [...pizzaToppings];
console.log(
  `\n ------------------ Exercise 4 ------------------ \n Controversial pizza toppings include: ${controversialPizzaToppings}`
);

// Exercise 5 --> Duplicate the following object and spread its values into a new variable `myCar`. Change the `model` property of `myCar` to 'q7'. Log both objects.
const myCar = { ...car };
myCar.model = "q7";
console.log(
  `\n ------------------ Exercise 5 ------------------ \n My current ride is the ${myCar.model}.\n`,
  "Object after spread -->",
  myCar
);

// Exercise 6 --> // Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
const propName = "username";
const userProfile = {
  [propName]: "employee",
};
console.log(
  `\n ------------------ Exercise 6 ------------------ \n`,
  userProfile
);

// Exercise 7 --> importingFile.js and exportingFile.js
console.log(
  `\n ------------------ Exercise 7 ------------------ \n Complete - please review importingFile.js and exportingFile.js`
);

// Exercise 8 -->// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values: (1) `cat` (2) `white`
// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.
function partsOfSpeech(noun = "cat", adjective = "white") {
  return `The ${noun} is ${adjective}.`;
}
console.log(
  `\n ------------------ Exercise 8 ------------------ \n`,
  partsOfSpeech()
);

// Exercise 9 -->// Convert the following `if...else` statement in to a ternary:
let pizza = "tasty";
let reaction = "";
pizza === "tasty" ? (reaction = "yum") : (reaction = "yuck");
console.log(
  `\n ------------------ Exercise 9 ------------------ \n ${reaction}`
);

// Exercise 10 --> SET LANGUAGE. Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: "LANG is equal to localLangConfig or the default value of English."
const localLangConfig = "de";
const LANG = localLangConfig || "en";
console.log(
  `\n ------------------ Exercise 10 ------------------ \n Language setting: ${LANG}`
);

// Exercise 11 --> Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
const adventurer = {
  name: "Alice",
//   cat: {
//     age: 2,
//   },
};
let catAge = adventurer.cat?.age;
console.log(
  `\n ------------------ Exercise 11 ------------------ \n ${catAge}`
);
