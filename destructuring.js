// 1. array destructuring
const numbers = [55, 22];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [55, 22];


const [x, y] = numbers;

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [11, 88];
const [first, second] = boxify(11, 88);

// console.log(boxify(11, 88));
const student = {
    name: 'King Khan',
    age: 53,
    movies: ['DDLJ', 'Don']
}

const [firstMovie, secondMovie] = student.movies;
// console.log(firstMovie, secondMovie);


// object destructuring
const { name, age } = { name: 'ali', age: 43 };
const { id, salary } = { id: 11, name: 'ali', salary: 34000, age: 43 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'MAC',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 71,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch; // accessing value, using optional chaining