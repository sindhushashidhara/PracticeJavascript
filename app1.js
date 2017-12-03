//Javascript and Hoisting
b();
console.log(a);

var a = "Hello World";
console.log(a);

function b() {
   console.log("Called b!");
}



//Javascript and undefined
if(a === undefined) {
    console.log('a is undefined');
    
}

else {
    console.log(' a is defined')
}


// Funtion Invocation and Execution Stack
function b(){
    
}

funtion a() {
    b();
}

a();


//Variable Environments

function b() {
    var index;
    console.log(index);
}

function a() {
    var index = 2;
    console.log(index);
    b();
}

var index = 1;
console.log(index);
a();
console.log(index);


//Scope
function b() {
    console.log(index);
}

function a() {
    var index = 2;
    b();
}

var index = 1;
a();

//-----------------------

function a() {
    
    function b() {
        console.log(index);
    }
    
    var index = 2;
    b();
}

var index = 1;
a();


//let and ES6
if(a > b) {
    let c = true;
}

//Asynchronous callbacks

funtion waitforthreeseconds(){
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms) {}
    console.log('Finished Function');
}

function clickHandler() {
    console.log('click event!');
}

document.addEventListener('click' , clickHandler);

waitforthreeseconds();

console.log('Finished execution');


//Dynamic Typing

var myVar = 'Alexa';

myVar = 1;

/*
Primitive Types
undefined, null, number,  boolean, string, symbol - ES6
*/

//Operators

var a = 1 + 2;

console.log(a);

//Operator Precedence

var a = 3 + 4 * 5;

//-------

var a =2, b = 3, c = 4;

a = b= c;

console.log(a);
console.log(b);
console.log(c);

