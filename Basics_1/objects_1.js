// singlton
// ---------------> created by using Object.create

// Object literals
// -------------what we generally see<------------------------
// we will use object literals

const mySymbol = Symbol("Key");

const obj = {
	name: "Dilip",
	age: 21,
	add: "deo",
	[mySymbol]: "value of key",
	"special way": "This is accessed in a special manner",
};

console.log(obj.name);
console.log(obj[mySymbol]);

console.log(obj["special way"]);

const third = Object.assign({ name: "rmmmmmm" }, obj);

console.log(third);
