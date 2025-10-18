//! Map Function

// const arr = [5, 1, 3, 2, 6];

//! map function basically used to transform an array

//! Q. What do mean by transformation ?

// so transformation means

// suppose if you want to transform each and every value of this array and get new array out of it

//! This is a transformation array into new aaray some example
//!Double -[10, 2, 6, 4, 12]
//!Triple -[15, 3, 9, 6, 18]
//!Binary -["101", "1", "11", "10", "110"]

/**
 If you want to transform this whole array you can
 do it with map function
 */

//! Here map function  some example used

//! Double Example
// function double(x) {
//   return x * 2;
// }
// in map function we double but we have pass function let create double function

// const output = arr.map(double);
// console.log(output);

//! Triple Example
// function triple(x) {
//   return x * 3;
// }

// const output = arr.map(triple);
// console.log(output);

//! Binary Example

// function binary(x) {
//   return x.toString(2);
// }
//const output = arr.map(binary);

//! valid another way to write

// const output = arr.map(function binary(x) {
//   return x.toString(2);
// });

// const output = arr.map((x) => {    //!But when you pass a number inside the parentheses, like toString(2),
//                                     //!it means convert the number to base 2 (binary).
//   return x.toString(2);
// });

// console.log(output);

//! Filter Function

/*
 ******************************************
 *             NOTE:
 *  Ex:
 *     //!  const arr = [5, 1, 3, 2, 6];
 *
 * - filter function basically used to filter
 *   filter value inside an array
 *
 * - we want filter odd and even value inside it
 *
 * - value which is greater than four(4) inside
 *   this particular  array
 *
 * - divisible by three(3) inside this array
 *
 * - taking this array as an input and finding
 *   out a  array has only the values which
 *   are filtered based on some logic
 *
 ******************************************
 */

// const arr = [5, 1, 3, 2, 6];

//! filter odd values

// function isOdd(x) {
//   return x % 2;
// }

// const output = arr.filter(isOdd);

// console.log(output);

//! filter even values

// function isEven(x) {
//   return x % 2 === 0;
// }

// const output = arr.filter(isEven);

// console.log(output);

//! which values greter

// function greterThan4(x) {
//   return x > 4;
// }

// const output = arr.filter(greterThan4);

// console.log(output);

//! Reduce function

/*

 *            IMPORTANT NOTE:
 * - Reduce function it actually does not reduce anything
 *
 * - “reduce() = take each item → do something → keep a running result → final single value.”
 *
 *  -- sum of all these element in this array
 *  -- largest or maximum number inside the array


 */
// const arr = [5, 1, 3, 2, 6];

//! sum/max we reduce function

//! Normal way write without reduce function

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));
//! With Reduce Function
//! this function take two parameters accumulator(acc),and current(curr)

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0); //! <--------- how do we pass an initial value to an  accumulator

//! - first argument is afunction

//! - second argument is any initial value which you need to pass inside this accumulator

// console.log(output);

//! Example of Reduce

// const arr = [5, 1, 3, 2, 6];

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(output);

//! Tricky Map Example

// const users = [
//   { firstName: "aniket", lastName: "deshpande", age: 24 },
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donald", lastName: "trump", age: 75 },
//   { firstName: "deepika", lastName: "padukone", age: 26 },
// ];

//! list of full names

//["aniket deshpande", "donald trump",............]

// const output = users.map((x) => x.firstName + " " + x.lastName);

// console.log(output);

//! Tricky Reduce Example

// const users = [
//   { firstName: "aniket", lastName: "deshpande", age: 24 },
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donald", lastName: "trump", age: 75 },
//   { firstName: "deepika", lastName: "padukone", age: 26 },
// ];

//! { 26 : 2 person , 75 : 1 person , 24 : 1 person } we have make this

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {}); //! {}----> we have object not initial value so we pass initial empty object

// console.log(output);

//! Tricky filter Example

const users = [
  { firstName: "aniket", lastName: "deshpande", age: 24 },
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);
