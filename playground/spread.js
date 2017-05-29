// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 2));
//
// var toAdd = [9, 6];
// console.log(add(...toAdd));
//
//
// var groupA = ['Tuty', 'BaoLi', 'TingWei'];
// var groupB = ['Yao Min', 'Su Fen', 'Ng Yao Min'];
//
// var final = [...groupB, ...groupA];
//
// console.log(final);

var personOne = ['Yao Min', 34];
var personTwo = ['Tuty', 36];

function greet (name, age) {
  console.log('hi ' + name + ', you are ' + age);
}

greet(...personOne);
greet(...personTwo);

var names = ['Bao Li', 'Su Fen'];
var final = [...names, 'Yao Min'];

final.forEach(function (name) {
  console.log('hi ' + name);

});
