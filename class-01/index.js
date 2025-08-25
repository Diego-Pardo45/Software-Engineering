console.log("Hello World");

const number = 1;
const text = 'Hello';
const big_number = 25n;
const boolean = true;
const undefined_value = undefined;
const null_value = null;
const no_number = NaN;
const simbol_value = Symbol;

// console.log(typeof number);
// console.log(typeof text);
// console.log(typeof big_number);
// console.log(typeof boolean);
// console.log(typeof no_number);
// console.log(typeof simbol_value);

const array = [];
const object = {};

console.log(typeof array);
console.log(typeof object);

const array_02 = [1, 2, '3', 4, 5];
console.log(array_02);

const object_02 = {
    'name': 'John doe',
    'grade': 'F', // John doe may study more :c
}

console.log(object_02);

console.log(array_02[0]);

console.log(object_02.name);

if (1 < 2) {
    console.log('Is true');
} else {
    console.log('Is false');
}

let sum = 0;
for (let index = 0; index < array_02.length; index++) {
    const element = array_02[index];
    sum += element;
    console.log('element: ' + element + 'sum: ' + sum);
}

grade = 'F';
console.log('My grade is ' + grade)

sum = 0;
array_02.forEach((element) => {
    sum = element + sum;
    console.log('element: ' + element + 'sum: ' + sum);
})

function my_function() {
    return 'Hello from my function';
}

function my_function_with_params(param) {
    return 'Hello from my function' + param;
}

const my_arrow_function = () => {
    return 'Hello from my arrow function';
}

console.log(my_function());
console.log(my_function_with_params('with params'));

console.log(my_arrow_function());

console.log(typeof my_function);
console.log(typeof my_arrow_function);