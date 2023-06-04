// var num1 = 2345;
// var num2 = 8763;

// function addition() {
//     var add = num1 + num2;
//     console.log(add, "addition")
// }
// addition();
// addition();
// addition();

function subtraction() {
    var sub = num1 - num2;
    // console.log(sub, "subtracctionn")
    if (sub > 0) {
        return sub;
    } else if (sub == 0) {
        return "Sub is gretar than 0"
    } 
    // else {
    //     return "Inside else"
    // }

    return "Sub is not equal to zero or not gretar than 0!"
    // console.log("Loggin after return keyword")
}
var res = subtraction();
console.log(subtraction())
subtraction()






// fucntion

// if(){}






// Q . Find two numbers from given array which addition is equal to target 

// var array = [2, 345, 56, 78, 34, 67, 4, 76, 34, 64, 34, 767];

var target = 105;

var array2 = [23, 345, 565, 65, 40, 40]

// 4 76


function additionOfNumbers(samiksha, somesh) { // 2 step
    // console.log(samiksha,somesh,"insdie function")
    for (var i = 0; i < samiksha.length - 1; i++) {
        for (var j = i + 1; j < samiksha.length; j++) {
            if (samiksha[i] + samiksha[j] == somesh) {
                console.log(samiksha[i], samiksha[j])
            }
        }
    }
}

additionOfNumbers(array2, target); // 1 step


// console.table()
// typeof ()


var num1 = 1234;
var num2 = 9876;

function addition(num1, num2 ){
    console.log(num1 + num2)
}

addition(num1,num2)


