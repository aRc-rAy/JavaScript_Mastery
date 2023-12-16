class User {
	constructor(username) {
		this.username = username;
	}

	logMe() {
		console.log(`Username is ${this.username}`);
	}

	//to generate a unique id for each object of this class
	static createID() {
		//do not want to used by object
		return `123`; //assume unique
	}
}

const dilip = new User("Dilip");
// console.log(dilip.createID());


// console.log(dilip);

class Teacher extends User {
	constructor(username, email) {
		super(username);
		this.email = email;
	}
}

const jhtka = new Teacher("Jhatka", "jhatka@gmail.com");
// console.log(jhtka.createID());
