// for of loop
// const arr = [1, 2, 3, 4, 5, 6, 6, 7];
// for (const num of arr) {
// 	// console.log(num);
// }

// const greetings = "Hello world!";
// for (let ch of greetings) {
// 	console.log(ch);
// }
//
//
//
// const map = new Map();
// map.set("name", "Dilip");
// map.set("price", 500);
// map.set("cost", 5);
// map.set("lastName", "Yadav");
// // console.log(map);
// for (const key of map) {
// 	// console.log(key);
// }
// for (const [key, value] of map) {
// 	console.log(key, " -> ", value);
// }
// for (const key in map) {
// 	console.log(map[key]);
// }
//
//
//
//
// const obj = {
// 	name: "dilip",
// 	roll: "20145102",
// 	hostel: "C V Raman Hostel",
// };
// for (const [key, value] of Object.entries(obj)) {
// 	// console.log(ent);
// 	console.log(key, " -> ", value);
// }
// for (const key in obj) {
// 	console.log(key);
// }
//
//
//
//
const arr = ["12213", "434324", "Hellowwewe"];
// for (const key in arr) {
// 	// console.log(key);
// }
// for (const key in arr) {
// 	console.log(arr[key]);
// }
arr.forEach((item, id, arr) => {
	console.log(item, id);
});
