// 1. array destructuring 
const numbers = [34, 56, 7, 8, 99, 78];
// const x = numbers[1];
// const y = numbers[2];

// const [x,y] = [23,45]
const [x, y] = numbers;

function boxify(a, b) {
    const total = [a, b];
    return total;
}
// const [first,second] = [56,78]
const [first, second] = boxify(89, 67)


// console.log(boxify(45,99));

const student = {
    name: 'sakib khan',
    age: 23,
    movies: ['Number 1', 'Priya re ', 'Nobab']
}
// const [firstMovie,secondMovie, thirdMovie] = ['Number 1', 'Priya re ', 'Nobab'];
const [firstMovie, secondMovie, thirdMovie] = student.movies;



// object destructring 

// const {name,age} = {name:'alue', age:23};
const { name, age, salary } = { id: 1, name: 'alue', age: 23, salary: 45000 };

const employee = {
    id: 'VS Code',
    designation: 'developer',
    machine: 'apple',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 34,
        address: 'kumrkali',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmi'
        }
    }

}
const { machine, id } = employee;
const { weight, address } = employee.specification;
const { brand } = employee.specification.watch
console.log(employee);
