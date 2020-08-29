console.log(Math.sqrt(37));

// function findMaxNumber(list){
//   let max = 0
//   for(let i = 0; i < list.length; i++){
//     if(max < list[i]){
//       max = list[i];
//     }
//   }
//   return max;
// }
// findMaxNumber([1,6,3,2]);

// console.log(Math.max(1,6,3,2));

// function doSomething(string) {
//   return string.split(' ').reverse().map((value) => value.length);
// }

// console.log(doSomething('Jourden Riley'));

function allMatches(array, regex) {
  let newArr = [];
   array.forEach(element => {
     if(element.match(regex)){
        newArr.push(element);
     }
    });
    console.log(newArr)
}

let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];
allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']
