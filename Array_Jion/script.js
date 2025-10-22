const arr = ["dog", "cat", "mouse", "lion", "tiger"];

const arrJoin = arr.join("--");

console.log(arrJoin);

/**
 * 
 * 
 Definition:

join() is a JavaScript array method that combines all elements of an array into a single string, with a separator you choose (default is a comma ,).

Syntax:

array.join(separator)


Example:

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.join(" - ")); // Output: "Apple - Banana - Cherry"
console.log(fruits.join());      // Output: "Apple,Banana,Cherry"


Memory Tip:
Think: “join = glue array elements into a string” 🟢
 */
