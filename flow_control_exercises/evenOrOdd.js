function oddOrEven(num) {
  if(!Number.isInteger(num)){
    console.log("Error. Please enter am integer.")
    return;
  }
  else{
    if(num % 2 === 0) console.log("even");
    else console.log("odd");
  }
  
}
oddOrEven('n');
oddOrEven(30);
oddOrEven(32);
oddOrEven(11);

// if(foo()) {
//     return 'bar';
//   }
//   else {
//     return qux();
//   }
// }

function uppercase(word) {
  if(word.length > 10){
    return word.toUpperCase();
  }
  else {
    return word;
  }
}

console.log(uppercase('hello world'))
console.log(uppercase('goodbye'));

function numberRange(num) {
  
  if(num > 0 && num < 50) {
    console.log(`${num} is between 0 and 50`);
  }
  else if(num > 51 && num < 100) {
    console.log(`${num} is between 51 and 100`);
  }
  else if(num > 100) {
    console.log(`${num} is greater than 100`);
  }
  else {
    console.log(`${num} is less than 0`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);