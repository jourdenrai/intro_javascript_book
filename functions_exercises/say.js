function say(words = "hello"){
  console.log(`${words}!`);
}

say();
say("hello");
say("hi");
say("how are you");
say("I'm fine");

// function add(a, b){
//   return a + b;
// }

let add = (a,b) => a + b;

let twoAndThree = add(2,3);
console.log(twoAndThree);