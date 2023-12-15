// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

function addTwoNumbers(num1, num2) {
	console.log(num1 + num2);

	return num1 + num2;
}
// console.log(console.log("22"));
// addTwoNumbers(122, 222);
// addTwoNumbers(122, "222");
// addTwoNumbers(122, null);

function loginUser(userName) {
	if (!userName) {
		console.log("Please enter the correct name");
		return;
	}
	return `${userName} just logged in`;
}

function calculateCartPrice(...num1) {
	return num1;
}
console.log(calculateCartPrice(2));
console.log(calculateCartPrice(2, 23, 32, 23));
console.log(calculateCartPrice(2, 2323232));
