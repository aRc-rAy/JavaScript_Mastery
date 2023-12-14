// stack and heap memory

// stack hold premitive data types and copies are sent in response
let fnum = 100;

// heap hold non-premitive data and references are sent in response
let AlianOb = {
	name: "Gaitonde",
	add: "gol ghar murabba gali Gorakhpur , Mars",
};

// stack
let myname = "Dilip";

let anotherName = myname;
anotherName = "Jen";

console.log(myname);
console.log(anotherName);

let obj = {
	name: "Hello",
	tame: "Sello",
};

console.log(obj);

let object2 = obj;
object2.name = "Sello";

console.log(obj);
