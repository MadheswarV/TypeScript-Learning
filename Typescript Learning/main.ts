export{}   //to make the script as module we will write an empty export
let message ='Welcome back';
console.log(message);

let isBeginner: boolean=true; //boolean type
let total:number=0; //number type
let name:string='Madhes'; //string type

let sentence:string=`I am ${name} ,am a beginner in TS`; //using a sentence along with a string type variable inside of it
//remember ``for writing sentence
console.log(sentence);  //for printing the sentence in the console

let n:null=null;
let u:undefined=undefined;

// let isNew: boolean=null;
// let myName: string=undefined;

let list1:number[]=[1,2,3]; //number array
let list2:Array<number>=[1,2,3]; //number array both are same so thats upto us what to use

let person1:[string,number]=['Madhes',23]; 
//tuple //order of datatypes should be matched //cant add extra values

enum Color{Red,Green,Blue}; //initializing enum values with name color-starts with 0
enum Color1{Red=5,Green,Blue} //intializing enum values but with giving a index value of our

let c:Color=Color.Green;  //initializing the enum value to 'c'
let c1:Color1=Color1.Green; //6
console.log(c1);


let randomValue:any=10;
randomValue=true;
randomValue='Madhes';
//with 'any' keyword we can assign any value to that variable without any error

let myVariable:any=10;
//console.log(myVariable.name);
//myVariable(); //calling it as function
//myVariable.toUpperCase();

let myVariable1:unknown=10;

//function 
function hasName(obj:any):obj is{name:string}{
    return !!obj && 
    typeof obj=="object" &&
    "name" in obj
}
if(hasName(myVariable1)){
console.log(myVariable1.name);
}
//myVariable1(); //calling it as function
//(myVariable as string).toUpperCase(); 
//since we declared the myVariable1 as unknown we are typecasting it to string using as.


let a;
a=10;
a=true;

let multiType:number| boolean;
multiType=23;
multiType=true; //we can use intelli support

let anyType:any;
anyType=23;
anyType=true;

//functions in typescript               //return type
function add(num1:number,num2:number=3):number{
    if(num2)                         //hardcoded value
    return num1+num2;
    else
    return num1;
}
add(10,3);  //calling the function with 2 parameters
add(10); //calling the function with 1 parameter


//Before Interface
function fullName(person:{firstName:string,lastName:string}){
    console.log(`${person.firstName}${person.lastName}`);
}

let p={ //we are passing the values for firstName and lastName inside p 
    firstName:'Madhes',
    lastName:'war'
};
//passing the values using 'p'
fullName(p);

//After Interface
interface Person{
    firstName:string;
    lastName:string;
}
function fullName1(person:Person){
    console.log(`${person.firstName}${person.lastName}`);
}

let p1={ //we are passing the values for firstName and lastName inside p1
    firstName:'Madhes',
    lastName:'war'
};
//passing the values using 'p1'
fullName1(p1);


//TS class
class Employee{
    employeeName:string;

    constructor(name:string){
        this.employeeName=name; //we are saying that employeeName is equal to name inside constructor
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1=new Employee('Madhesss');
console.log(emp1.employeeName);
emp1.greet();

//Inheritance
class Manager extends Employee{
    constructor(managerName :string){
        super(managerName);
    }
    delegateWork(){
            console.log(`Manager delegating tasks`);
    }
}
let m1=new Manager('Madhes');
m1.delegateWork;
m1.greet
console.log(m1.employeeName);

//Access Specifier
//public: everywhere
//private: only within the class
//protected: Inside the class and the classes derived from it 