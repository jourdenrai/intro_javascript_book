let person = { name: "Jourden", age : 23, height : "5 ft 9 in"}

// console.log(`Hello, ${person.name}, you are ${person.age} years old`);



// delete person['height'];
// console.log(person);



// let bob = { name: 'bob', age: 22};
// let studentBob = Object.create(bob);

// studentBob.year = "Senior";
// console.log(studentBob.name);

// console.log(bob);



// let obj1 = { a: 1, b: 2}
// let obj2 = Object.create(obj1);

// obj2.c = 3;
// obj2.d = 4;



// for (let prop in obj2){
//   if (obj2.hasOwnProperty(prop)) {
//     console.log(obj2[prop]);
//   }
// }


// let keys = Object.keys(obj2);
// console.log(keys)

// key.forEach(key => console.log(obj2[key]));

// console.log(Object.entries(person));

// let objA = { a: 'foo'};
// let objB = { b: 'bar'};
// // let objs = Object.assign(objA, objB);
// let objs = Object.assign({},objA,objB);
//  console.log(objs);
// // console.log(objA);

// let myArray = {
//   0: 'jourden',
//   1: true,
//   2: true,
//   length: 3,
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let objKeys = Object.keys(obj).map(key => key.toUpperCase());
// console.log(objKeys);

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);

// myObj.qux = 3;

let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(obj, keys){

  let myObj = {};

  if (keys) {
    keys.forEach((key) => {
      myObj[key] = obj[key];
    });
    return myObj;
  } else {
    return Object.assign(myObj, obj)
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined