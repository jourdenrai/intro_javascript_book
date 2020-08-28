// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(arraysEqual([1,2,3],[1,2,3]));
// console.log(arraysEqual([23,4,5],[3,4,5]));

// let a = [2,3,4,5,1]
// console.log(a.sort())
// console.log(a);
// a.reverse();
// console.log(a)


// let myArray = [1,3,6,11,4,2,
//                4,9, 17, 16, 0];
// for(let i = 0; i < myArray.length; i++){
//   if(myArray[i] % 2 === 0){
//     console.log(myArray[i]);
//   }
// }
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];
// for(let i = 0; i < myArray.length; i++){
//   for(let j = 0; j < myArray[i].length; j++){
//     if(myArray[i][j] % 2 === 0){
//       console.log(myArray[i][j])
//     }
//   }
// }
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let newArray = myArray.map(num => num % 2 == 0 ? 'even' : 'odd');
// console.log(newArray);

// function removeNonInteger(array){
//   return array.filter(num => Number.isInteger(num));
// }

// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let newArray = removeNonInteger(array);
// console.log(newArray); // => [1, 3, -4]

// function oddLengths(arr) {
//   return arr.map(letters => letters.length)
//             .filter(letters => letters % 2 !== 0);

// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]


// function sumOfSquares(numbers){
  
//   return numbers.reduce((accumulator, num) => {
//     return accumulator + num * num;
//   }, 0);
// }

// let numbers = [3, 5, 7];
// console.log(sumOfSquares(numbers)); // => 83


// function oddLengths(arr) {
  
//   return arr.reduce((accumulator, num) => {
//     if(num.length % 2 !== 0){
//       num = num.length;
//       accumulator.push(num)
//     }
//       return accumulator;
//   }, []);
// }
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

function findNumber3(arr){
  if (arr.filter(num => num === 3).length !== 0) return true
  else return false;
}

let numbers1 = [1,3,5,7,9,11];
let numbers2 = [];
let numbers3 = [2,4,6,8];

console.log(findNumber3(numbers1));
console.log(findNumber3(numbers2));
console.log(findNumber3(numbers3));


let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

console.log(arr[1][2]);