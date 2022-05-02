console.log();
console.log("********************************************************");
console.log();
// ? -- Craig Burke - Assignment: JavaScript How Long Did That Take
//

/* 
Calculating prime numbers

Let's start with a prototype function to calculate if a number is prime...

*/

// function to find the square root of a number
// Number.prototype.squareRoot = function () {
//   let x = this;
//   let y = 1;
//   while (x - y > 0.00001) {
//     x = (x + y) / 2;
//     y = this / x;
//   }
//   return x;
// };

// Number.prototype.isPrime = function () {
//   for (let i = 2; i < this.squareRoot(); i++) {
//     // console.log(i);
//     // console.log(this);
//     if (this.squareRoot() % i === 0) {
//       //   console.log("not prime");
//       return false;
//     }
//   }
//   //   console.log("prime");
//   return true;
// };

// and then see how long it takes to find the 10,000th prime number.

// const { performance } = require("perf_hooks");
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e6) {
//   if (num.isPrime()) {
//     primeCount++;
//   }
//   num++;
// }

// console.log(`The 1,000,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// The 10,000th prime number is 10001
// This took 1499.3814589977264 milliseconds to run

// after squareRoot
// The 10,000th prime number is 10001
// This took 645.3489159345627 milliseconds to run

// 100,000th prime number
// The 100,000th prime number is 100001
// This took 23117.007791996002 milliseconds to run

// 1,000,000th prime number
// The 1,000,000th prime number is 1000038
// This took 790763.3300420046 milliseconds to run
/* 



This took a considerable amount of time considering the prime we calculated is only 
6 digits long and primes used in RSA encryption are hundreds of digits in length. 
Calculating primes is hard work; 
as the numbers get bigger it takes more and more work to see if they are 
evenly divisible by smaller numbers, 
and division is a already a slow operation on CPUs 
(as much as 6 times slower than multiplication). 

There are some tricks we can use to speed this up though, 
for instance we don't need to search past the square root of the number 
we are checking to see if it is evenly divisible by smaller numbers. 
Try rewriting the isPrime() function above and seeing how much quicker this runs. 
You should see results similar to the below image.

*/

console.log();
console.log("********************************************************");
console.log();

// Fibonacci

// Which implementation of Fibonacci should be faster?

// recursive
// const { performance } = require("perf_hooks");
// const start = performance.now();
// function rFib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return rFib(n - 1) + rFib(n - 2);
// }
// rFib(20);

// console.log(`This took ${performance.now() - start} milliseconds to run`);

// iterative
// const { performance } = require("perf_hooks");
// const start = performance.now();
// function iFib(n) {
//   const vals = [0, 1];
//   while (vals.length - 1 < n) {
//     let len = vals.length;
//     vals.push(vals[len - 1] + vals[len - 2]);
//   }
//   return vals[n];
// }
// iFib(20);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// Recursive fibonacci
// This took 0.8166660070419312 milliseconds to run
// Iterative fibonacci
// This took 0.20774996280670166 milliseconds to run

// It turns out that the iterative implementation is faster than the recursive implementation.
// I would have thought the recursive implementation would be faster,
// but it turns out the iterative implementation is faster.

console.log();
console.log("********************************************************");
console.log();

// Reversing a string

// Can we reverse a string more efficiently?

const story =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

// const { performance } = require("perf_hooks");
// start = performance.now();
// const reversed1 = story.split("").reverse().join("");
// console.log(reversed1);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// This is a very inefficient way to reverse a string.
// We are creating a new string for every character in the original string.
// This is inefficient because it is creating a new string for every character.
// We can do better.

const myNewStory = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // get the last item in the string
    newStr += str[i];
  }
  return newStr;
};

const { performance } = require("perf_hooks");
start = performance.now();
console.log(myNewStory(story));
console.log(`This took ${performance.now() - start} milliseconds to run`);

// console.log("**************** Story 1 *****************************");
// This took 0.06237506866455078 milliseconds to run
// console.log("**************** Story 2 *****************************");
// his took 0.12866699695587158 milliseconds to run

// Can we reverse a string more efficiently?
// I don't think so,
// it looks as though the split().reverse().join() method is the fastest way to reverse a string.

console.log();
console.log("********************************************************");
console.log();
