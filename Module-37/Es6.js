
const numbers = [45, 89, 45, 23];
const student = {
    name: 'sakib khan',
    age: 23,
    movie: ['Number 1', 'Priya re ', 'Nobab']
}

// Template string

const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movie[1]}`;
console.log(about);

// arrow function 
const arrowFunc = () => 55;
const addNumber = num => num + 45;
const isEven = x => x % 2 === 0;
const addThree = (a, b, c) => a + b + c;
const multilineArrowFunc = (num1, num2) => {
    const sum = num1 * num2;
    return sum
}

// spread oprator 
const newNumbers = [...numbers];
numbers.push(100)
console.log(numbers)
console.log(newNumbers);

// create a new array from an older array and add an element 
const currentNumber = [...numbers, 55];
console.log(currentNumber);
