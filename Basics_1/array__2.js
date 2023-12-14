let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5];

// console.log(arr1.push(arr2));
// console.log(arr1);

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// const allvalue = [...arr1, ...arr2];
// console.log(allvalue);

// const nestedArray = [
// 	1,
// 	23,
// 	4,
// 	[2, 3, 4, 5, [3, 4, 5, 5, [23, 23, 23232, 2323, [32423]]]],
// ];
// console.log(nestedArray.flat(Infinity));

console.log(Array.isArray("Dilip"));
console.log(Array.from("Dilip Kumar Yadav"));

console.log(Array.from({ name: "Dilip" })); //will give empty
console.log(Array.of(100, 100, 1000));
