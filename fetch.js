// JSON --> stringify, parse

const student = {
    name: 'King Khan',
    age: 53,
    movies: ['DDLJ', 'Don']
}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [65, 41, 96, 45];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2)

// for of on array like object
// loop on an object suing for in


// add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'HP', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'raybon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'iCam' };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(pd => pd.name !== 'phone');