function multiplyBy5(num) {
	return num * 5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

// In JavaScript, prototype is an object that is
//  associated with every function and object by default.
//  It is used to add new properties and methods to objects
//  and object constructors

function createUser(username, score) {
	this.username = username;
	this.score = score;
}

createUser.prototype.increment = function () {
	this.score++;
};

createUser.prototype.printMe = function () {
	console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

/* 
new keyword basically instruct to create object.
and object gets associated to prototype object
this way chai is getting increment prototype function 
*/

chai.printMe();
