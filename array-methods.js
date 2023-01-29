const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'raybon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

// 1. map (used to travars through array element and need something from that array as return)
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

// 2. forEach (used to travars through array element and no need for any return)
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

// multiline
products.forEach(product => {
    // some
    // multi
    // line
    // code
});

// 3. filter (used to travars through array and return an array of elements that full-fill a condition)
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

// 4. find (used to travars through array and return a single result that match the condition)
const special = products.find(p => p.name.includes('n'));
console.log(special);