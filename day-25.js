// var swaraj = [2, 3, 45, 6];

// swaraj.push(23)
// swaraj.push(24)
// swaraj.push(25)
// swaraj.push(26)
// swaraj.push("Hiii")

// console.log(swaraj, "swaraj")
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato', "Somhedsh"];

// plants.pop()
// plants.pop()

// console.log(plants.pop());\


// const array1 = [1, 2, 3];
// array1.shift()
// array1.shift()
// array1.shift()
// console.log(array1)


// const array1 = [1, 2, 3];
// array1.unshift(234567, 98765);
// array1.unshift(9876);
// array1.unshift("jhg");
// console.log(array1)


// Q. Find the numbers who divisible by 5 from given range and return the array of those number... 

// var start = 9876;
// var end = 10234;

// function diviBY5(start, end) {
//     var result = [];
//     for (var i = start; i <= end; i++) {
//         if (i % 5 == 0) {
//             result.push(i)
//             // console.log(i)
//         }
//     }
//     console.log(result,"- res")
// }
// diviBY5(start, end)



var givenArray = [23, 45, 56, 67, 23, 56, 68, 34, 4556, 78, 655, 23, 568787, 89845, 343, 54576, 7873, 323, 54, 636, 6836, 575];

// find numbers who odd from given array and return array with those number... 



function helo(array) {

    var oddNumberArray = [];

    for (var i = 0; i < array.length; i++) {
        // console.log(array[i])
        if (array[i] % 2 == 1) {
            oddNumberArray.push(array[i])
        }
    }

    console.log(oddNumberArray, "- oddNumberArray")

}
helo(givenArray);


Q.Find numbers who are divisible by 2, 5, and 10 from given range,
    then use that array to make new array with second element of array.
(note - use reverse for loop)

    var start = 8723;
var end = 6567;
// 2, 5, and 10

function twoStage() { }


var filteredArray = [100, 110, 120, 130, 140, 150]  //  2, 5, and 10 = 100

var result = [110, 130, 150]