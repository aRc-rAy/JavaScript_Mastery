class React {
	constructor() {
		this.library = "React";
		this.server = "https://localhost:3000";

		// requirement
		document
			.querySelector("button")
			.addEventListener("click", this.handleClick.bind(this));
	}

	handleClick() {
		console.log(`Button is being clicked`);
		console.log(`${this.server} has running this project`);
	}
}

console.log("App has been created");
const app = new React();
