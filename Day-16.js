// datatypes
// string , number, Boolean  
// varibles 
// console.log(); 
// typeof();
// Condition statment - if else 
// && || 
// + - * /
// = == ===
// ++
// < > <= >= 


var myName ; // Decleration
console.log(myName);
console.log(typeof(myName));

myName = "Swaraj" ; // assign
console.log(myName,"- again")


// Array 
var hii = "Hello"
var kuchBhi = ["Swaraj","XYZ",98765, true, "false",hii];
console.log(kuchBhi[0]);
console.log(kuchBhi.length)


// Loops - for
// Q. Print numbers from 1- 10;
var i = 1;
i++;
console.log(i)

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for

// if(){}
// for (initial condition; ending condition; steps ) { code to be execute }

// for (var i = 1001; 1001 <= 1000; i++ ) { print("execute") }


for (var i = 1; i <= 100; i++) {
    console.log("Hello", i);
}
for (var i = 1; i <= 100; i = i + 2) {
    console.log("Hello", i);
}
for (var i = 234; i <= 765; i++) {
    console.log("Hello", i);
}
for (var i = 50; i <= 230; i = i * 2) {
    console.log("Hello", i);
}
for (var i = 1; i <= 1000; i = i + 6) {
    console.log("Hello", i);
}
for (var i = 8976; i <= 87658; i++) {
    console.log("Hello", i);
}
for (var i = 5; i <= 1000; i = i ** 2) {
    console.log("Hello", i);
}


// Q. Print number from 10 -1; 


for(var i = 10; i >= 1 ; i--){
    console.log(i)
}

for(var i = 100; i >= 54 ; i--){
    console.log(i)
}

for(var i = 100; i >= 1 ; i = i - 2){
    console.log(i)
}

for(var i = 1000; i >= 1 ; i = i - 10){
    console.log(i)
}

for(var i = 1000/2; i >= 1 ; i = i - 10){
    console.log(i)
}


var remote = ["S", 'A', "B", "c", "y", "p", 87, 897, true];


console.log(remote[0])
console.log(remote[1])
console.log(remote[2])
console.log(remote[3])
console.log(remote[4])

for (var i = 0; i < remote.length; i++) {
    console.log(remote[i])
}
