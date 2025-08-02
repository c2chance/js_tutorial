// new array() method
console.log("---new array()---");
const arr1 = new Array(); // 空数组
const arr2 = new Array(0); // 空数组
const arr3 = new Array(1); 
const arr4 = new Array(1, 2, 34, 5);

console.log(arr1); 
console.log(arr2);
console.log(arr3);
console.log(arr4);

/*
---new array()---
[]
[]
[ <1 empty item> ]
[ 1, 2, 34, 5 ]
*/

// use array literal
console.log("---[]---");
const arr5 = [];
const arr6 = [0];
const arr7 = [1];
const arr8 = [5, 6, 7, 8];

console.log(arr5);
console.log(arr6);
console.log(arr7);
console.log(arr8);

/*
---[]---
[]
[ 0 ]
[ 1 ]
[ 5, 6, 7, 8 ]
*/

// use Arrary.of()
console.log("---Array.of()---");
const arr10 = Array.of();
const arr11 = Array.of(0);
const arr12 = Array.of(1);
const arr13 = Array.of(10, 21, 12, 13, 14);

console.log(arr10);
console.log(arr11);
console.log(arr12);
console.log(arr13);

/*
[]
[ 0 ]
[ 1 ]
[ 10, 21, 12, 13, 14 ]
*/

const arr20 = ["red", "green", "yellow", "blue"];
console.log(arr20.keys()); // Object [Array Iterator]
console.log(arr20.values());  // Object [Array Iterator]
console.log(arr20.entries()); // Object [Array Iterator]

// arr.keys()
for (let item of arr20.keys()) {
    console.log(item); //0 1 2 3
}

// arr.values()
for (let item of arr20.values()) {
    console.log(item); // red green yellow blue
}

// arr.entries()
for (let item of arr20.entries()) {
    console.log(item); // [0, 'red'],  [1, 'green'], [2, 'yellow'], [3, 'blue']
}

// indexOf()
const str = "hello lvye";
console.log(str.indexOf("lvye")); // 6
console.log(str.indexOf("Lvye")); // -1

const arr31 = ["India", "Malasia", "Vietnam"];
console.log(arr31.indexOf("Vienam")); // -1
console.log(arr31.indexOf("Malasia")); // 1

// includes
console.log(str.includes("lvye")); // true
console.log(str.includes("Lvye")); // false

console.log(arr31.includes("Malasian")); // false
console.log(arr31.includes("Vietnam")); // true

// slice()
console.log(str.slice(6)); // lvye
console.log(arr31.slice(1)); // ['Malasia', 'Vietnam']

// concat()
const str32 = "hello", str33 = " wild world";
console.log(str32.concat(str33)); // hello wild world

const arr32 = ["Indonisia"];
const arr33 = ["Thailand"];
const arr34 = ["Canbodia"];
console.log(arr32.concat(arr33).concat(arr34));
// ['Indonisia', 'Thailand', 'Canbodia']

// find()
const arr40 = [1, 3, 5, 7, 9];
const result = arr40.find( function(value) {
    return value > 5;
});
console.log(result);

const fruitArr = [{name: "apple", price: 8.5},
    {name: "dragon fruit", price: 5}, 
    {name: "duran", price: 24.5},
    {name: "cherry", price: 34}
];
const result2 = fruitArr.find(function(value) {
    return value.price > 20;
});
console.log("> 20.5 fruit is: ", result2.name);

// findIndex()
const result3 = fruitArr.findIndex(function(value) {
    return value.price > 24.5;
});
console.log("> 24.5 fruit is: ", result3)