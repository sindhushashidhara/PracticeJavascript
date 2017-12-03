//Coercion

var a = 1 + '2';
console.log(a);

//Comparispn Operators

console.log(3 < 2 < 1);

//--------------

var a = 0;

var b = false;

if(a === b) {
    console.log("they are equal");
}

else {
    console.log("Nope, not equal");
}

//Default values

function greet() {
    name = name || '<Your name here>';
    console.log("hello" + name);
}

greet('Tony');
greet();



//Framework Aside - Default values

console.log(libraryName);

