const products = [
    { name: 'laptop', price: 32000, brand: 'Hp', color: 'sliver' },
    { name: 'phone', price: 7000, brand: 'Iphone', color: 'golden' },
    { name: 'watch', price: 600, brand: 'casio', color: 'Black' },
    { name: 'sungless', price: 300, brand: 'ribon', color: 'skyblue' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
]
// use map() method 
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices)

// use forEach() method 
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
products.forEach(product => {

})


// use filter() method 

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);


// use includes() method 
const specificeName = products.filter(p => p.name.includes('n'));
console.log(specificeName);

// Use find() Method 
const specal = products.find(p => p.name.includes('n'))
console.log(specal);
