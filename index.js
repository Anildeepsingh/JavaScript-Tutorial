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
// var arr = [1, 2, 3, "anil", 5];
// console.log(arr[3]);
// console.log(arr[0]);
// console.log(arr[4]);
// console.log(arr);

//5. Operators in JavaScript
// Arithmetic Operators
var a = 34;
var b = 56;
// console.log("The value of a + b is", a + b);
// console.log("The value of a - b is", a - b);
// console.log("The value of a * b is", a * b);
// console.log("The value of a / b is", a / b);

// Assingment Operators
var c = b;
// c += 2; // c = c + 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical operators

// Logica and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not
// console.log(!false);
// console.log(!true);

//6. Function in javascript

function avg(a, b) {
  return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// or we can also write it on different way like

function avg(a, b) {
  c = (a + b) / 2;
  return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

//7. Conditionals in javascript
/*
var age = 41;
// Single if statement:-
// if (age > 18) {
//   console.log("you can drink");
// }
// if-else statement:-
// if (age > 18) {
//   console.log("you can drink");
// } else {
//   console.log("you cannot drink");
// }
// if-else ladder:-
if (age > 32) {
  console.log("bachhe ni ho");
} else if (age > 26) {
  console.log("bacche nahi rahe");
} else if (age > 22) {
  console.log("yes bacche nahi rahe");
} else if (age > 18) {
  console.log("18 bacche nahi rahe");
} else {
  console.log("bacche rahe");
}
console.log("end of ladder");
*/

//8. For loop

// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//9. while loop
/*
var arr = [1, 2, 3, 4, 5, 6, 7];
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}
*/

//10. Break statement or continue statement

// var arr = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     // break; /*array length 2 k baad kuch bhi print ni hoga*/
//     continue; /*array length m no. 2 place holder (i.e:-3) ko chod kr sb print hoga*/
//   }
//   console.log(arr[i]);
// }

//11.  Array methods

// let myArr = ["Fan", "Camera", 34, null, true];
// // Methods are:-
// console.log(myArr.length);
// // myArr.pop(); /*array m se last element nikal sckta hai*/
// // myArr.push("anil"); /*array k last m add kr sckte hai*/
// // myArr.shift(); /*array m se phela element nikal sckte hai*/
// myArr.unshift("Anil"); /*array k starting m element add kr sckte hai*/
// /* unshift k baad agar new length dekhi ho toh :-
// const newLen = myArr.unshift("Anil");
// console.log(newLen);*/
// console.log(myArr);
