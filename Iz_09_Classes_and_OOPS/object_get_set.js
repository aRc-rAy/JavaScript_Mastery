const User = {
	_email: "Email",
	_class: 12,

	get email() {
		return this._email.toUpperCase();
	},
	set email(value) {
		this._email = value;
	},
};

// console.log(User.email);

const tea = Object.create(User);
console.log(tea.email);
