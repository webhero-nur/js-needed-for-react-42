// 1. How to declare a variable using let and const
const fatherName = 'Chawdhuri Khan';
let fatherAge = 55;
fatherAge = 56;

// 6 basic conditions >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if (fatherName === 'Chawdhuri Khan' && fatherAge === 56) {

}
else if (fatherName === 'Khan Chawdhuri' || fatherAge === 56) {

}
else {

}

// 3. array declare
// index, 
// length, push
const numbers = [65, 49, 84, 16, 54, 16, 95];
numbers[0] = 56;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(55, 45);

// 6. Object
const student = {
    name: 'King Khan',
    age: 53,
    movies: ['DDLJ', 'Don']
}

const myVariable = age;

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable