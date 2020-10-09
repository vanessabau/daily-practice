//We want an array, but not just any old array, an array with contents! Write a function that produces an array with the numbers 0 to N-1 in it. For example, the following code will result in an array containing the numbers 0 to 4:

function arr(n) {
  var newArr = [];
  for (var i = 0; i < n; i++) {
    newArr.push(i);
  }
  return newArr;
}
//////////////additional solutions

const arr = (n) => Array.from({ length: n }, (_, i) => i);

///////////
arr = (n) => (n ? [...Array(n).keys()] : []);
///////////
const arr = (N) => Array.from({ length: N }, (_, i) => i);
