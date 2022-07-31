// one dimensional array in javascript

var colors = ["red", "blue", "green"];
for (var i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
}

// js array two dimensional

// declaration of a two-dimensional array
// 5 is the number of rows and 4 is the number of columns.
const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));

console.log(matrix[0][0]); // 0
