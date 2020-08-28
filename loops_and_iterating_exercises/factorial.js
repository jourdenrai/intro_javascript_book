//function times(number1, number2) {
//   let result = number1 * number2;
//   console.log(result);
//   return result;
// }

// let oneFactorial = times(1,1);
// let twoFactorial = times(oneFactorial, 2);
// let threeFactorial = times(twoFactorial, 3);
// let fourFactorial = times(threeFactorial, 4);
// let fiveFactorial = times(fourFactorial, 5);


// function factorial(num){
//   let result = 1;
//   for(i = num; i > 0; i--){
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(3));

function factorial(num){
  if(num <= 1){
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(2));