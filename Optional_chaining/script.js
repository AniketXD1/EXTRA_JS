const user = {
  firstName: "aniket",
  lastName: "deshpande",
  age: 24,
};
// value will be print console.log(user.firstName);

// ! so long as it is giving undefined no problem
//! console.log(user.address);  value will be print undefined

//! Error problem
// console.log(user.address.city);
/** TypeError: Cannot read properties of undefined (reading 'city') */

//! Solution Optinal chaining
// !If this property exist then we have to see city otherwise reture undefined
// ! console.log(user.address?.city); value will be print undefined

/**
 * optional chaining means 
 * Optional chaining means safely accessing a property of an object without causing an error if that property doesn’t exist.

👉 It returns undefined instead of throwing an error.

Example:

user?.address?.city;


If user or address doesn’t exist, this just gives undefined — not an error.
 */

//! Example

const resData = {
  data: {
    resname: "Pizza Hut",
    cuisines: ["Italian", "Fast Food"],
    avgRating: 4.2,
  },
};

// Destructuring safely with optional chaining

const { resname, cuisines, avgRating } = resData?.data;

console.log(resname); // Pizza Hut
console.log(cuisines); // ["Italian", "Fast Food"]
console.log(avgRating); // 4.2
