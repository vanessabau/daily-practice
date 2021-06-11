// Find the index of the middle element of a triplet in an array

// Solutions
function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

///////////
var gimme = function (inputArray) {
  return inputArray.indexOf(
    inputArray.slice(0).sort(function (a, b) {
      return a - b;
    })[1]
  );
};
/////////////
var gimme = function (inputArray) {
  if (
    (inputArray[0] < inputArray[1] &&
      inputArray[0] > inputArray[2]) ||
    (inputArray[0] > inputArray[1] &&
      inputArray[0] < inputArray[2])
  )
    return 0;

  if (
    (inputArray[1] < inputArray[0] &&
      inputArray[1] > inputArray[2]) ||
    (inputArray[1] > inputArray[0] &&
      inputArray[1] < inputArray[2])
  )
    return 1;

  if (
    (inputArray[2] < inputArray[0] &&
      inputArray[2] > inputArray[1]) ||
    (inputArray[2] > inputArray[0] &&
      inputArray[2] < inputArray[1])
  )
    return 2;
};
