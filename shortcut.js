// 'someString', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}

const money = 500;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha buscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);

// number to string conversion
const num1 = 55;
console.log(num1);
const numStr = num1 + ''; // add an empty string (concatinate)
console.log(numStr);

// string to number
const input = '650';
const inputNum = +input; // add '+' before the string variable
console.log(inputNum);

//
let isActive = false
const showUser = () => console.log('display user');
const hideUser = () => console.log('hidden user');
isActive ? showUser() : hideUser(); // calling function depending on condition using ternary operator
isActive && showUser(); // use && if the left side is true then right side will be executed
isActive || hideUser(); // use || if the left side is false then right side will be executed

// toggle boolean
isActive = !isActive;