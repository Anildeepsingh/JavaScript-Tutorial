//1:- javascript array

//create an array like so:
// var colors = ["red", "blue", "green"];

//you can loop through an array like this:
for (var i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
}

//2:- one dimensional array in javascript

var colors = ["red", "blue", "green"];
for (var i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
}

//3:- js array two dimensional

// declaration of a two-dimensional array
// 5 is the number of rows and 4 is the number of columns.
const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));

// console.log(matrix[0][0]); // 0

// 4:-multi-dimensional array js
// a:-
var array = [
  ["0, 0", "1, 0", "2, 0", "3, 0", "4, 0"],
  ["0, 1", "1, 1", "2, 1", "3, 1", "4, 1"],
  ["0, 2", "1, 2", "2, 2", "3, 2", "4, 2"],
  ["0, 3", "1, 3", "2, 3", "3, 3", "4, 3"],
  ["0, 4", "1, 4", "2, 4", "3, 4", "4, 4"],
]; // Think of it as coordinates, array[x, y] x = 0; y = 0; is "0, 0" on
// this grid

// console.log(array[3][3]); // returns "3, 3"
// If you use graphics (ex: p5js or JS Canvas) then this will be a 5x5 map.
// Useful for roguelikes and/or raycasters.

// b:-
let studentsData = [
  ["Jack", 24],
  ["Sara", 23],
  ["Peter", 24],
];
// console.log(studentsData);
