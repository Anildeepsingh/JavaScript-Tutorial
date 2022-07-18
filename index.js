//1. Ways to print in JavaScript
//   console.log("Hello World");
//   alert("me");
//   document.write("this is document write");

//2. Javascript console API(Application programming interface)
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

//3. Javascript Variables
//What are variables? - Containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// Number
var num1 = 455;
var num2 = 56.76;

// String
var srt1 = "This is String";
var str2 = "This is also a string";

// console.log(num1);
// console.log(num2);
// console.log(srt1);
// console.log(str2);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// Undefined
// var und = undefined;
var und;
// console.log(und);
// wo chiz jiske andar koi value ni hai, is known as undefined.
// variable bna kr chod diya hai or usme kuh dala ni hai (undefined)

// Null
var n = null;
// console.log(n);
// jiske andar kuch na ho or jiske andar kuch na dalna ho(null)

/*
At a very high level,there are two types of data types
in JavaScript
1. Primitive data types: Number, String, Booleans, Undefined, Null, Symbol
2. Reference data types: Objects and Arrays

*/

// Objects
var marks = {
  anil: 34,
  siddhant: 78,
  vikash: 99.977,
};

// console.log(marks);

// Arrays
var arr = [1, 2, 3, "anil", 5];
// console.log(arr[3]);
// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr);

// Operators in JavaScript
// Arithmetic Operators
var a = 34;
var b = 56;
console.log("The value of a + b is", a + b);
console.log("The value of a - b is", a - b);
console.log("The value of a * b is", a * b);
console.log("The value of a / b is", a / b);

// Assingment Operators
var c = b;
c += 2;
c;
console.log(c);
