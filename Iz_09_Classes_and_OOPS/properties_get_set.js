function User(username, email) {
	this.username = username;
	this.email = email;

	Object.defineProperty(this, email, {
		get: function () {
			return this._email.toUpperCase();
		},
		set: function (value) {
			this._email = value;
		},
	});

	Object.defineProperty(this, username, {
		get: function () {
			return this._username.toUpperCase();
		},
		set: function (value) {
			this._username = value;
		},
	});
}

const user = new User("dilip", "dilip@gmail.com");
console.log(user);
console.log(user.email);
