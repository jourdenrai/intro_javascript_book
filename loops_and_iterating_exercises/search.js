// let array = [3, 1, 5, 9, 2, 6, 4, 7];
// let indexOfFive = -1;

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === 5) {
//     indexOfFive = i;
//     break;
//   }
// }

// console.log(indexOfFive);

// // names.forEach(function (name) {
// //   console.log(name);
// // })
// names.forEach(name => console.log(name));

function doubler(num) {
  console.log(num);

  if(num <= 50) {
    doubler(num * 2);
  }
}

doubler(5);