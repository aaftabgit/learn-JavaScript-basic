// ******** primitive  ****************************

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.33;

const isLoggedI = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = symbol('123');

//console.log(id === anotherId);

const bigNumber = 54516415415n;



// ********** non-primitive (reference) ****************[datatypes-function]

// Array, Objects, Functions

const heros = ["aftab", "faiz", "saddm"];
let myObj = { 
    name : "abc",
    age : 33,
}

const myFunction = function (){
    console.log("hello word");
}

// to check datatypes*******

console.log(typeof outsideTemp);

// for more study of (typeof)  with ECMAscript