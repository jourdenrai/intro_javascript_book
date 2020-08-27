// 3. What happens when you run the following program? Why do we get that result?

// {
//   let foo = 'bar';
// }

// console.log(foo);

// This will result in an error because since foo is declared inside of a block it is out of scope and inaccessable.

// 4. What happens when you run the following code? Why?

// The first set of console logs will run as expected. There will be an error stating that NAME is a constant variable therefore cannot be changed.

// 5. Take a look at this code snippet:

// let foo = 'bar';
// {
//   let foo = 'qux';
// }

// console.log(foo);

/* The programs logs bar to the console, since foo was initialized outside of the block there is no problem accessing it.
The program ignores the declaration inside the brackets. */

// 6. Will this program produce an error when run? Why or why not?

// const FOO = 'bar';
// {
//   const FOO = 'qux';
// }

// console.log(FOO);

/* The program logs bar to the console. Kinda the same from the last problem. The program ignores the inside declaration because
it becomes out of scope when the brackets end. */