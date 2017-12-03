//ES6 and Classes

//Person is an Object
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    greet() {
        return "Hi" + firstname;
    }
}

var John = new Person("John" , "Dow");



