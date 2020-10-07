//8Kata 10/3/20 937 ms

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total");

//My solution:
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var count = 0;
  for (var i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) count++;
  }
  return count;
}

//Additional solutions:
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
///////
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}
///////
function countSheeps(arrayOfSheep) {
  var count = 0;

  arrayOfSheep.forEach(function (sheep) {
    if (sheep) count++;
  });

  return count;
}
///////
let countSheeps = (x) => x.filter((s) => s).length;
//////
function countSheeps(arrayOfSheep) {
  var array = arrayOfSheep.reduce((a, b) => a + (b === true ? 1 : 0), 0);
  return array;
}
