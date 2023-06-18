



// functions 

function NameOfFunction (props) {
    console.log(props)
}
NameOfFunction("hii");

var NameOfFunction2 = (props) => {
    console.log(props)
}
NameOfFunction2("Hello")

// const NameOfFunction3 = props => {
//     console.log(props)
// }
// const NameOfFunction4 = (props, props2) => console.log(props);

// NameOfFunction4("ji", "hello");



// varibles]

// var 
// let 
// const


var myName = "Awdiz"; // assign 
myName = "Hello"; // re - assign 
var myName = 'Swaraj'; //re-declare
console.log(myName) 
// re-declare and re-assign is possible


 let myAge = 25; // assign 
 myAge = 23; //  re - assign 
 let myAge = 987; // re - declearation not possible
console.log(myAge)
// re - assign is possible but re - declearation is NOT 


const myCity = "mumbai"; // assign 
myCity = "Pune"; //  re - assign is not possible
const myCity = "Pune" // re - declare is not possible
console.log(myCity);
// re-assign and re-declare is NOT possible....




myName = "Awdiz"; //  assign
console.log(myName)

// Hoisting

var myName
// const myName;  // declare





// Closure 



function outerFunction() {
    var myMarks = 40;
    console.log("Inside outer function");
    function innerFunction() {
        console.log("Inside inner Function", myMarks)
    }
    return innerFunction;
}
const res = outerFunction();
// res();
console.log(res())

// secret - res ke under function store hoga with varible call myMarks

// console.log(res())



w

