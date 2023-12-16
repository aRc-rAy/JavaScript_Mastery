const user = {
	username: "Dilip",
	signIn: true,
};

// console.log(user.username);

// constructor functions
function User() {
	this.name = "Dilip";
	this.class = 4;

	return this;
}

const man = new User();

console.log(man);
