const student = {
    name: 'sakib khan',
    age: 23,
    movies: ['Number 1', 'Priya re ', 'Nobab']
}

// 1. JSON use case
// const studentJson = JSON.stringify(student);
// console.log(studentJson);

// const studentParse = JSON.parse(student);
// console.log(studentParse);


// 2. fetch 
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data))

// keys, values 
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [3, 4, 6, 8, 23];
numbers.forEach(n => console.log(n));

// for of use on array
// for in use on object 


// add or remove from an array 
const products = [
    { name: 'laptop', price: 32000, brand: 'Hp', color: 'sliver' },
    { name: 'phone', price: 7000, brand: 'Iphone', color: 'golden' },
    { name: 'watch', price: 600, brand: 'casio', color: 'Black' },
    { name: 'sungless', price: 300, brand: 'ribon', color: 'skyblue' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
]

const newProduct = { name: 'webcame', price: 400, brand: 'lal' };

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item 
// remove phone means create a new array without the phone 

const remaing = products.filter(p => p.name != 'phone');
console.log(remaing);

