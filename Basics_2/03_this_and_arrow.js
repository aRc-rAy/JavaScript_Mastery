const user = {
	name: "Hitman",
	price: 5000,
	welcome: function () {
		console.log(`${this.name} welcome to  website`);
		console.log(this);
	},
};

// user.welcome();
user.name = "Harshal";
// user.welcome();

// console.log(this);

// function Chai() {
// 	const name = "Dilip";
// 	// console.log(this);
// 	console.log(this.name);
// }

// Chai();
//
//
//
// const chai = function () {
// 	const name = "Dilip";
// 	console.log(this);
// 	// console.log(this.name);
// };
// chai();
//
//
//
//
//
// const chai = () => {
// 	const name = "Dilip";
// 	console.log(this.name);
// 	console.log(this);
// 	// console.log(this.name);
// };
// chai();
//
//
//
//
//
//
// const addNumbers = (num, num2) => num + num2;
// const addNumbers = (num, num2) => num + num2 + num + num + num2;
// console.log(addNumbers(22, 33));
//
//
//
//
