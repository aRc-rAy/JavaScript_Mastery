// console.log(Math.PI);
Math.PT = 5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const chai = {
	name: "ginger chai",
	price: 250,
	isAvailable: true,
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
	value: "adrak chai",
	writable: false,
	enumerable: false,
	configurable: false,
});

console.log("====================================");
console.log("Object property define");
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log("====================================");
