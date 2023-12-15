// falsy values
false, 0, -0, 0n, "", null, undefined, NaN;
//
//
//
//
// truthy values
"0", "false", " ", [], {}, function () {};

//

// const obj = {
// 	name: "Dilip",
// };
// console.log(Object.keys(obj).length);
// if (Object.keys(obj).length) {
// 	console.log("there is something in the object");
// }
//
//
//
//
// ==========================>Nullish Coalescing Operator (??):null undefined <========================================
let val1;
// val1 = 10 ?? 100;
val1 = null ?? 1000;
val1 = undefined ?? null;
val1 = null ?? undefined ?? 10 ?? null;
console.log(val1);
