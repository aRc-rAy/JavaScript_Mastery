# Projects related to DOM

## Project links

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-xwmnhx?file=index.html)

# Solution code

## Project 1

```javascript
let nodes = document.querySelectorAll(".button");

let canvas = document.querySelector("body");
nodes = Array.from(nodes);

nodes.forEach((node) => {
	node.addEventListener("click", () => {
		canvas.style.backgroundColor = `${node.getAttribute("id")}`;
	});
});
```

## Project 2

```javascript
const ans = document.querySelector("#results");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const height = parseInt(document.querySelector("#height").value);
	const weight = parseInt(document.querySelector("#weight").value);

	if (height === "" || height <= 0 || isNaN(height)) {
		ans.innerHTML = "Please give a valid number";
		return;
	}
	if (weight === "" || weight <= 0 || isNaN(weight)) {
		ans.innerHTML = "Please give a valid number";
		return;
	}

	const answer = (weight / ((height * height) / 10000)).toFixed(2);
	// console.log(answer);
	ans.innerHTML = `<span style="color:blue">${answer}</span>`;
});
```

## Project 3

```javascript
const block = document.getElementById("clock");

setInterval(() => {
	const data = new Date();
	block.innerHTML = data.toLocaleTimeString();
}, 1000);
```

## Project 4

```javascript
const form = document.querySelector("form");

let number = Math.floor(Math.random() * 100) + 1;

const previousGuess = document.querySelector(".guesses");
const lowOrHigh = document.querySelector(".lowOrHi");

const remaining = document.querySelector(".lastResult");

let arr = [];

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const yourNumber = parseInt(document.querySelector("#guessField").value);
	if (
		yourNumber === "" ||
		yourNumber > 100 ||
		yourNumber < 1 ||
		isNaN(yourNumber)
	) {
		alert("Please enter valid number");
		return;
	}
	let moves = parseInt(remaining.innerText);
	if (moves === 0) {
		lowOrHigh.innerHTML =
			"Sorry you have no moves.<br/> Please refresh to start again";
		return;
	}
	if (yourNumber == number) {
		document.querySelector("#guessField").innerHTML = "";
		lowOrHigh.innerHTML = "You find it easily <br/> Continue Playing";
		remaining.innerHTML = `${10}`;
		number = Math.floor(Math.random() * 100) + 1;
		arr = [];
		return;
	} else if (yourNumber < number) {
		lowOrHigh.innerHTML = "You choose low number.";
	} else {
		lowOrHigh.innerHTML = "You choose high number";
	}

	arr.push(yourNumber);
	remaining.innerHTML = `${moves - 1}`;
	previousGuess.innerHTML = `${arr.join()}`;
});
```
