// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 315848494894455n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "zaid",
    age: 21,
}


const myFunction = function() {
    console.log("Hello World");   
}

console.log(typeof outSideTemp);
