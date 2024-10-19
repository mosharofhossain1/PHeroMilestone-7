/* 
    1. How to Declare a varibale using let , const
*/
const fatherName = 'Arnold';
let season = 'winter';
season = 'rainy';


/* 
    2. six basic conditions :-  <,>,=>,<=,===, !===,
    *Multiple conditions :- &&, ||
*/

if (fatherName === 'arnold' || season === 'winter') {

}
else if (fatherName === 'Arnold') {

}
else {
    console.log('')
}

/* 
    3. array declear 
    // index, length,push
*/
const numbers = [45, 89, 45, 23];
numbers[2] = 35

/* 
    4. loops 
*/

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

/* 
    5. declear function 
*/
function add(a, b) {
    const total = a + b;
    return total
}

const result = add(34, 45);
console.log(result);

/*
    6. Object 
    // 3 way access property by name  
 */

const student = {
    name: 'sakib khan',
    age: 23,
    movie: ['Number 1', 'Priya re ', 'Nobab']
}

const myVariable = 'age';
console.log(student[myVariable]); // access via property name in a variable 
console.log(student.age); // direct access via property name 
console.log(student['age']) // access via property name string 
