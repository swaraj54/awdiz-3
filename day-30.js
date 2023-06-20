var array = [{ id: 1, name: "Rahul", age: 23, surname: "xyz" },
{ id: 2, name: "Rakesh", age: 24, surname: "xyz" },
{ id: 3, name: "Swaraj", age: 25, surname: "xyz" },
{ id: 4, name: 'abc', age: 29, surname: "xyz" }];

array.map((object) => {
    console.log(object)
})

var userName = 'ujnbhhajkndwahdakndbahwjd';
var index = array.findIndex((object) => object.name == userName);
console.log(index)

var userName = 'Swaraj';
var selectedUser = array.find((kuchBhi) => kuchBhi.name == userName);
console.log(selectedUser)

var userId = 2;
// find user from array by id
var selectedUser = array.find((swaraj) => swaraj.id == userId)
console.log(selectedUser);
var userAge = 25;
var selectedUser = array.find((object) => object.age == userAge);
console.log(selectedUser)


var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort())

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => b - a))

var numbers = [1, 8, 9, 15, 3, 7, 37, 2, 6, 1, 6, 7, 9];
console.log(numbers.sort((a, b) => a - b))

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length < 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]