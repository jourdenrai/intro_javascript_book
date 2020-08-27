// let greetingMessage = 'Good Morning!';

// function greetPeople() {
//   console.log(greetingMessage);
// }
// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage;
// }
// changeGreetingMessage('Good Evening');

// greetPeople();

// function greetPeople() {
//   let greetingMessage = 'Good Morning';
//   console.log(greetingMessage);
// }

// greetPeople();
// console.log(greetingMessage); // raises ReferenceError

// greetPeople();

// function greetPeople() {
//   console.log('Good Morning');
// }

// let greetPeople = function() {
//   console.log('Good Morning');
// }
// greetPeople();

// (function greetPeople() {
//   console.log('Good Morning');
// })

// function makeGreeter(name){
//   return function greeter(){
//     console.log(`Hello ${name}`);
//   }
// }

let greetPeople = () => console.log('Good Morning!');
greetPeople();