import { Cat, Horse } from './animal';

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    let result = n1 + n2;

    if(showResult) {
        console.log(phrase + result)
    } else {
        return result
    }
}

let number1 = 5
let number2 = 2.3
let printResult = true
let message = 'Result is: '

add(number1, number2, printResult, message)

// Types Examples

// Number
let num: number = 1 


// String
let str: string = 'LK'


// Boolean
let bool: boolean = true


// Tuple
let tupleType: [number, string] = [1, 'LK']


// Enum
enum Role { ADMIN, READ_ONLY, AUTHOR };

let tempRole = Role.ADMIN


// Array
let tempArr: string[] = ['Cricket', 'Football', 'Tenis']


// Object
let obj = {
    name: 'LK',
    age: 28  
}

// interface MyObject {
//     name: string;
//     age: number;
// }

// let tempObje: MyObject = {
//     name: 'LK',
//     age: 28
// }


// Union
let unType: number | string = 'Lk'


// Literal
let litType: 'as-umber' | 'as-string';
let data = 10
if(litType === 'as-string') {
    console.log('String: ',data.toString())
} else {
    console.log('Number Type', data)
}


// Type aliases
type combined = number | string;

let aliase: combined = 2;


// Function Return & void type
function printVal(param) {
    // console.log(param)
    return num
}

printVal(10)


// Function Type & callbacks
function sum(n1:number, n2: number) {
    return n1 + n2
}
let combinedValues: (a: number, b: number) => number;

combinedValues = sum;

console.log(combinedValues(10,8))


// Function types and callbacks
function sumCall(n1:number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

sumCall(50, 50, (result) => {
    console.log(result)
    return result
})


// Unknown
let userInput: unknown;
let userName: string;

userInput = 5; // OK
userInput = 'LK'; // OK
// userName = userInput // ERROR


// Never

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An error occured!', 500)

// Interface

interface MyObject {
    name: string;
    age: number;
}

let custObj: MyObject = {
    name: 'LK',
    age: 28
}

// Class
class Animal {
    // declare variable
    greeting: string;
    
    // declare variable with static keyword
    static a = 'static';
    
    constructor(message: string) {
        this.greeting = message;
    }
    
    // declare method 
    greet() {
        console.log("Hello " + this.greeting)
    }
    
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

// Inheritance
class Dog extends Animal {
    dogName: string;

    constructor(name: string) {
        super(name)
        super.greet();
        this.dogName = name
    }

    bark() {
        console.log(this.dogName + ': Woof! Woof!');

        // Calling Static Function From Class ItSelf
        Dog.tellMeSomething('Calling Static Function From Class')
    }

    static tellMeSomething(message) {
        console.log(message)
    }
}
    
// Creating object of class
const dog = new Dog('Sam');
    
dog.bark();
dog.move(10);
Dog.tellMeSomething('Calling Static Function From Outside');


// Polymorphism
class Parent {  
    name: string;  
    private myName: string = 'Lakhan'
    constructor(name: string) {  
        this.name = name;  
    }  
    
    processName() {  
        console.log('processName method in parent class',name)  
        console.log(this.myName)
    }  
}  

class Child extends Parent {  
    
    constructor(name: string) {  
        super(name);  
    }  
    
    processName() {  
        console.log('processName method in Child class',name)  
    }  
}  

let myObject = new Child("Kiran");  
myObject.processName()  

let myObject1= new Parent("john");  
myObject1.processName()  


// Primitive vs Reference Type
let a = 10;
let b = a;
console.log(a, b, 'Before') 

a = 20 
console.log(a, b, 'After') 


let obj1 = {
    name: 'lakhan',
    age: 20
}

let obj2 = obj1;

obj2.age = 50
console.log(obj1, obj2)


// Generics
function identity<T>(arg: T): T {
    return arg;
}

let test = identity(1)
let str2 = identity('LK')

console.log(test)
console.log(str2)