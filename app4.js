//Object

var person = new Object();
person['firstname'] = "Tony";

console.log(person);

person.address = new Object();

person.address.street = "101 Main Street";


//Object Literal
var person = {
    firstname = "Tony",
    lastname = 'Alice',
    address = {
        street = "101 Main street",
        city = "New York",
        state = "NY"
    }
    
};

function greet(person) {
    console.log('Hi' + person.firstname);
}

greet(Tony);

//JSON and Object Literals

var obj = {
    firstname : "Tony",
    isProgrammer : true
}

console.log(JSON.stringify(obj));

var jsonvalue = JSON.parse('{"firstname":"Tony", "isProgrammer":true}');

console.log(jsonvalue);

//Functions are objects

function greet(){
    
    console.log('Hi');
}

greet.language = "Kannada";

console.log(greet.language);


//Function Expressions - Not Hoisted

funcExp(); //Gives error

var funcExp = function() {
    console.log("Hi");
}


//Object, Functions and this

 var c = {
     name: "C object",
     log: function(){
         
            var self = this,
            self.name = "Updated c object";
            console.log(self);
         
            var setname = function(newname) {
                name = newname;
            }
            
            setname("updated again");
            console.log(self);
     }     

 }

 
 //Arrays
 
 var arr[] = [1,2, 3];

var arr = [
    1, 
    false,
    {
        name:"Tony"
    },
    function(name) {
        var greeting = "hello";
    }
];

console.log(arr[3](arr[2].name);
            
            
//Function Overloading
            
function greet(firstname, lastname, language) {
    
    language = language || "en";
    if(language === "en" )
        console.log("Hello " + firstname + " " + ;lastname);
    
    if(language === "es" )
        console.log("Hello " + firstname + " " + ;lastname);
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, "en");
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, "es");
}


greetEnglish("john" , "Dow");
greetSpanish("john" , "Dow");

//Immediately Invoked Function Expression

var greeting = function(name){
    console.log("hello" + name);
}("John");

console.log(greeting);

//Function Expression
 (function(name){
    return "hello" + name;
});


//Closures
function greet(whattosay) {
    return function(name) {
        console.log(whattosay + " " + name);
    }
}

var sayHi = greet("hi");
sayHi("Tony");

function buildFunctions() {
    var arr[];
    
    for(var i = 0; i < 3; i++){
        arr.push(
            funtion() {
                console.log(i);
            }
        )
    }

return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

Output 

3
3
3

//--------------------------------
Closures

function greet(whattosay) {
    return function(name) {
        console.log(whattosay + " " + name);
    }
}

var sayHi = greet("hi");
sayHi("Tony");

function buildFunctions() {
    var arr[];
    
    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }         
            }(i))    
        )
    }

return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();


//Output
0 
1
2


//Closures and Callbacks

function sayHi(){
    var greeting = "Hi";
    setTimeout(function(){
        console.log(greeting;)
    }, 3000);
}

sayHi();

//Function Programming

function mapForEach(arr, fn) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(
            fun(arr[i])
        )
    };
    
    return newArr;
}

var arr1 = [1, 2, 3];

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});

console.log(arr2);

