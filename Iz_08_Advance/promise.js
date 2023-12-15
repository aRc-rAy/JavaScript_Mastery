const promise = new Promise((resolve, reject) => {
	if (true) resolve("Hello");
	else reject("Sello");
});

// promise
// 	.then((res) => console.log(res))
// 	.catch((res) => console.log("Error :-", res))
// 	.finally(() => console.log("Finally "));

const promise5 = new Promise((resolve, reject) => {
	let error = false;
	if (error) {
		resolve({
			name: "Dilip",
			age: 16,
		});
	} else {
		reject("Something went wrong");
	}
});

// promise5.then((res) => console.log(res)).catch((res) => console.log(res));

const handlePromise = async () => {
	try {
		const response = await promise5;
	} catch (error) {
		console.log(error);
	}
};
handlePromise();
