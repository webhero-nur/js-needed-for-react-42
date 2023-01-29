const numbers = [65, 49, 84, 16, 54, 16, 95];
const student = {
    name: 'King Khan',
    age: 53,
    movies: ['DDLJ', 'Don']
}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];


numbers.push(78);
numbers.push(78);
numbers.push(78);


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);