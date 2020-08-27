
let getNumber = (prompt) => {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let multiply = (num1, num2) => num1 * num2;

let num1 = getNumber("Enter number 1: ");
let num2 = getNumber("Enter number 2: ");
console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`);