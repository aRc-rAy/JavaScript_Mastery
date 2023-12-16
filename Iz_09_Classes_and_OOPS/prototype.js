let myname = "Dilip    ";

// console.log(myname.length);
// console.log(myname.trueLength);

let myHero = ["thor", "spiderman"];

let heropower = {
	thor: "hammer",
	spiderman: "sling",

	getSpiderPower: function () {
		console.log(`Spidy power is ${this.spiderman}`);
	},
};

Object.prototype.dilip = function () {
	console.log(`I have been added to all the object`);
};
// myHero.dilip();

Array.prototype.nDilip = function () {
	console.log(`This is again added to only array`);
};
// myHero.nDilip();
// heropower.nDilip(); // not added to object
// console.log("====================================");
// console.log("Prototypal Inheritance");
// console.log("====================================");
const User = {
	name: "Dilip",
	age: 21,
};

const Student = {
	roll: 88,
	class: 12,
};

// Student.__proto__ = User;
// console.log(Student.age);

// console.log("====================================");
// console.log("Modern methods to inherrit property");
// Object.setPrototypeOf(Student, User);
// console.log(Student.age);
// console.log("====================================");

console.log("====================================");
console.log("String prototype");
String.prototype.trueLength = function () {
	console.log(`${this}`);
	console.log(`True length is ${this.trim().length}`);
};
"Dilip   ".trueLength();
console.log("====================================");
