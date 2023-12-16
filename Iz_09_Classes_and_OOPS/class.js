// ES 6
// class User {
// 	constructor(username, email, password) {
// 		this.username = username;
// 		this.email = email;
// 		this.password = password;
// 	}

// 	encryptPassword() {
// 		return `${this.password}abc`;
// 	}

// 	changeUserName() {
// 		return `${this.username.toUpperCase()}`;
// 	}
// }

// const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the scene
function User(username, email, password) {
	this.username = username;
	this.email = email;
	this.password = password;
}

User.prototype.encryptPassword = function () {
	return `${this.changeUserName.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmailcom", "12345");
console.log("====================================");
console.log("Same working as class");
console.log(tea);
console.log("====================================");
