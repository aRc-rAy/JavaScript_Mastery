const main = document.querySelector(".main");

const URL = `https://api.github.com/users/aRc-rAy`;

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onreadystatechange = () => {
	console.log(xhr.readyState);
	if (xhr.readyState === 4) {
		const data = JSON.parse(xhr.responseText);
		main.innerHTML = `
      <img src=${data.avatar_url} />
      <h1>Followers count : ${data.followers}</h1>
      `;
		console.log(data);
	}
};

xhr.send();
