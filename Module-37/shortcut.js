// 1.Truthy Value:- ("alams", 5, true, {}, []) 
// 2.false value:-  ("", 0, false, ,null, undifined )

// check truthy 
let myVar = 5;
if (myVar) {
    myVar = myVar * 5;
}
else {
    myVar = 0;
}

let myMony = 50;
// you check negetive or false anything 
if (!myMony) {

}

const mony = 80;
let food;
if (mony > 100) {
    food = 'birani'
}
else {
    food = 'biscut kamu'
}

// ternary 
let food1 = mony > 100 ? 'birani' : 'cha biscut';
console.log(food1);

let drink = (mony > 100 && myVar > 100) ? 'cook' : 'filte water';
console.log(drink);

// Number to string conversation 
const num1 = 43;
const numStr = num1 + '';
console.log(numStr);

// string to number 
const input = '560';
const inputNum = +input;
console.log(input);
console.log(inputNum)

// 
let isActive = false;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
// use && if the left side is true right side will be executed 
isActive && showUser();

// use || if the left side is false then right side will be executive 
isActive || showUser();

// toggle boolean 
isActive = !isActive