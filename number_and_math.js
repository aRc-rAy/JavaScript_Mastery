// Number

const score = 400;

const balance = new Number(400000);

// console.log(score);
// console.log(balance);
// console.log(balance.toFixed(3));

const otherNumber = 24.2222;

// console.log(otherNumber.toPrecision(3));
// console.log(balance.toLocaleString());
// console.log(balance.toLocaleString());

// Math====================================================>Math<===================

// console.log(Math.abs(-44));
// console.log(Math.round(4.56));
// console.log(Math.ceil(4.11));
// console.log(Math.floor(4.99));
// console.log(Math.min(2, 3, 4, 4, 4, 5, 11));

// console.log(Math.random());

const min = 10;
const max = 20;

for (let i = 0; i < 10; i++) {
	const range = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(range);
}
