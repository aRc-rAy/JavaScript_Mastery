const course = {
	name: "JS in hindi",
	price: 99999,
	instructor: "Hitesh sir",
};

console.log(course.instructor);

// destructor
const { instructor: ins } = course;
const { instructor } = course;

console.log(ins);
console.log(instructor);


