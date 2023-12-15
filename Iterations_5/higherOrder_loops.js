const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];
// arr.forEach((item, id, arr) => {
// 	console.log(item);
// });
// console.log(arr2);

let arrMaped = arr.map((item, id) => item * id);
// console.log(arrMaped);

let arrFiltered = arr.filter((item, id) => id % 2 == 1);
// console.log(arrFiltered);

let arrSum = arr.reduce((total, item, id) => {
	// console.log(arr[id]);
	return (total += 0);
}, 0);
console.log(arrSum);
