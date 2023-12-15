const user = {};
user.id = "232";

user.name = "Ramu";
user.isLoggedin = false;

// console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

console.log(Object.entries(user)); //returns array of array

console.log(user.hasOwnProperty("isLoggedin"));
