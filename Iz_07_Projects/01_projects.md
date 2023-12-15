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
