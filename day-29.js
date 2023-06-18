// // async await - 
// function whoTakesTime() {
//     // it will take 5 sec to return 
//     var res = 0;
//     for (var i = 0; i < 1000000000000000; i++) {
//         res = res + 1;
//     }
//     return res;
// }
// async function myFunction() {
//     console.log("Before going for function"); // task 1
//     const res = await whoTakesTime(); // 5 sec  task 2
//     console.log(res, "- res");// task 3
//     console.log("after function"); // task 4
// }
// myFunction();

// const seconds = new Date().getTime() / 1000;
// console.log(seconds)







// var twoSum = function(nums, target) {
//     console.log("Hello")
// };

// function heloo(){}

// const hi = () => {}

// O(n)
// for (){}
// for(){}

// var totalNumber = 0;
// for(var i = 0; i < 10; i++){  // i = 0,1,2,-9
//     for(var j = 0; j < 10; j++){  // 10 * 10
//         totalNumber += 1
//         for 
//     }
// }
// console.log(totalNumber);









// function Awdiz(name, number, age) {
//     this.name = name;
//     this.number = number;
//     this.age = age;
//     this.isFromMumbai = false;
// }

// const student1 = new Awdiz('Swaraj', '897654', 23);

// console.log(student1);


// console.log()







// function swaraj() {
//     var id = '';
//     var length = 125;
//     var secretKey = "ABCDEFGHIJKLMNOPQRSTabcdefghh1234567890"
//     for (var i = 0; i < length; i++) {
//         id += secretKey[Math.floor(Math.random() * secretKey.length)];
//     }
//     return id
// }
// console.log(getRandomId())

// var index = (Math.floor(Math.random() * 30))
// console.log(index, "- index")
// console.log(secretKey[index], "- data")
// console.log(Math.floor(3.7941411198316493))

// 4.00



// 3.82
// 3.81
// 3.80
// 3.79
// 3.78
// 3.77
// 3.76
// 3.75

// 3.00




var res = []; // 1, 2,3,4
var nums = [3,3,3,3,5,5,5,8,8,8,9]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) { //  nums[3] = 2,  nums[4] = 3
        res.push(nums[i])
    }
}
console.log(res);
