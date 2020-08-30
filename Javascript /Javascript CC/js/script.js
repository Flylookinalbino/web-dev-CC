/*
// Console output

 console.log('Console Logging');
 console.error('Console error setting');
 console.warn('Console warning')

// Let, Const (ES6)

// let you can reassign values
 let num = 30;
 num = "Hello World";
 console.log(num + " <- let value changed from Number to String");

// Const is for fixed values
 const score = 40;
// score = 30; // will give error
 console.log(score + " <- Const value cannot be changed");

// Data Types

// String
const name = 'Khan';
console.log(typeof name + " <- Data type of name -> " + name);

// Numbers
const age = 30;
console.log(typeof age + " <- Data type of age -> " + age);
const rating =  4.5;
console.log(typeof rating + " <- Data type of rating -> " + rating);

// Boolean
const isCool = true;
console.log(typeof isCool + " <- Data type of isCool -> " + isCool);

// null
const x = null;
console.log(typeof x + " <- Data type should be null for x -> " + x);

// undefined
const y = undefined;
console.log(typeof y + " <- Data type of y -> " + y);
let z
console.log(typeof z + " <- Data type of z -> " + z);

// Concatenation old way
console.log("Using Concatenation -> My name is " + name + " and i am " + age);

// Template String part of ES6
const hello = `Using Template String -> My name is ${name} and I am ${age}`;
console.log(hello);

// Properties & Methods & Strings 
const s1 = `Hello World!`;
const s2 = `technology, computers, it, code`;

// String length, toUpperCase(), substring(start, end), split('unique id')
console.log(s1.length); // Properties
console.log(s1.toUpperCase()); // Methods
console.log(s1.substring(0,5).toUpperCase() + " <- substring(start, end) to create a substring of s ->" + s1);
console.log(s1.split('') + " <- split('') a string into an array s ->" + s1);
console.log(s2.split(', ') + " <- split(', ') a string based on an identifier into an array s2 ->" + s2);

// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers + " <- array of numbers");

const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);

// Access Array elements
console.log(fruits[1]);

// Add to any location in the array
fruits[5] = 'grapes';
console.log(fruits); 

// Add to the end of the array
fruits.push('mangos');
console.log(fruits);

// Add to the start of the array
fruits.unshift('strawberries');
console.log(fruits);

// Remove last element
fruits.pop();
console.log(fruits);

// Check if array
console.log(Array.isArray(fruits));
console.log(Array.isArray(s1));

// Find index of Element in array
console.log(fruits.indexOf(10)); 

// Object Litterals
const person ={
    firstName: 'Akik',
    lastNmae: 'Kikoman',
    age: 30,
    skills: ['HTML5', 'CSS3/Flexbox/Grid', 'Javascript'],
    address:{
        street: '4 Jameson Court',
        city: 'Benalla',
        state: 'Victoria',
        postalCode: 3672
    }
}

// Access Objects Attributes and Elements
console.log(person);
console.log(person.firstName, person.lastNmae);
console.log(person.skills[1]);
console.log(person.address.city);

// Access Object Attributes and Elements with Deconstructor ES6
const {firstName, lastNmae, skills:[e1,e2,e3],  address:{city}} = person;
console.log(firstName);
console.log(city);
console.log(e1);
console.log(e2);
console.log(e3);

// Add Properties into object
person.emails = "email@gmail.com";
console.log(person);

// Arrays of Objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);

// Accessing Object in Array elements
const [,,{id, text, isCompleted}] = todos
console.log(id);
console.log(text);
console.log(isCompleted);

// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For Loops
for(let i = 0; i < todos.length; i++){
    console.log(`For Loop Through Todos Array Objects id = ${todos[i].id}, text = ${todos[i].text}, isComplete = ${todos[i].isCompleted}`);
}

// While Loops
let i = 0;
while( i <= 10 ){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// For of
for (let todo of todos){
    console.log(todo.text);
}

// High order Array Methods
// forEach loop through Array
todos.forEach(function(todo){
    console.log(todo.id);
});

//map will return values to create another array of values
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

// filter returns array based on filters
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

// Using multiple high order array methods together
const todoCompletedText = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompletedText);

// Conditionals
// == will be true even if a is a string '10'
// === matches the data type
const a = 10;

if(a === 10){
    console.log(`a is 10`);
}else if(a > 10){
    console.log(`a is greater than 10`);

}else{
    console.log(`a is less than 10`);
}

const b = 10;

if(a > 5 || b > 10){
    console.log(`x is more than 5 or y is more than 10`);
}

if(a > 5 && b > 5){
    console.log(`x is more than 5 and y is more than 5`);
}

// ternary operator
const c = 5;
const color = (c > 10) ? 'red' : (c == 10) ? 'blue' : 'green';
console.log(color);

// Switches
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break
}

// Functions
function addNums(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}
addNums(5, 5)

function subNums(num1 = 1, num2 = 1){
    return num1 - num2;
}

const num1 = subNums(5,2);
console.log(num1);

// Arrow Function ES6
const multiNum = (num1 = 1, num2 = 1) => num1 * num2;
console.log(multiNum(5,5));

*/

// OOP Javascript
// Constructor Function
// function Person(firstName, lastName, Dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.Dob = new Date(Dob);
//     this.getBirthYear = function(){
//         return this.Dob.getFullYear();
//     }
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// function Person(firstName, lastName, Dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.Dob = new Date(Dob);
// }

// // Prototype
// Person.prototype.getBirthYear = function (){
//     return this.Dob.getFullYear();
// }
// Person.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`;
// }

// Class 
/* 
class Person{
    constructor(firstName, lastName, Dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.Dob = new Date(Dob);
    }
    getBirthYear(){return this.Dob.getFullYear();}
    getFullName(){return `${this.firstName} ${this.lastName}`;}
}

// Instantiate Object
const person1 = new Person('Akik', "Kikala", '1-1-1992');
const person2 = new Person('Flylookin', 'Albino', "1-2-1992")

console.log(person1);
console.log(person2.Dob);
console.log(person1.getBirthYear());
console.log(person2.getFullName());
*/

// DOM 
/*
console.log(window);

// Selecting things in the DOM
// Single Element Selector
console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('h1'));

// Multiple Element Selector
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));
console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

//Changing things in the DOM
const ul = document.querySelector('.items');

// Remove elements
// ul.remove();
// ul.lastElementChild.remove();

// Changing content
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Kiko";
ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

// Changing styling
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events in DOM

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = "<h1>Hello</h1>"
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = "<h1>Hello</h1>"
// });

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = "<h1>Hello</h1>"
// });
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = "Please enter all field";
        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}