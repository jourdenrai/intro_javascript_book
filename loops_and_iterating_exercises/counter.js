// let counter = 1;

// while (counter <= 10){
//   console.log(counter);
//   counter ++;
// }

 let names = ["Jourden","Shaina","Oscar","Rico","Nala"];
 let upperNames = [];
 
// let index = 0;

// while (index < names.length){
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }

// console.log(upperNames);

// let answer;
// do {
//   answer = prompt("Do you to do that again?");
// } while (answer == 'y');

for(let i = 0; i < names.length; i++){
  let upperCaseName = names[i].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);