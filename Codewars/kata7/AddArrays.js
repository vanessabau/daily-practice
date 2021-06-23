// All Star Code Challenge #20

// Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.

// addArrays([1,2],[4,5]); // => [5,7]
// addArrays([1,2,3],[4,5]); // => Error
// Note:
// Expect array input to either contain numbers or strings only
// The function should also allow for concatenating string

// addArrays(["a"],["b"]) // => ["ab"]

function addArrays(array1, array2) {
  //code here
  const newArray = [];
  if (array1.length !== array2.length) {
    console.log(array1.length, array2.length);
    throw "Error";
  } else {
    array1.forEach((num1, index) => {
      const num2 = array2[index];
      newArray.push(num1 + num2);
    });

    return newArray;
  }
}

///Other solutions
function addArrays(array1, array2) {
  if (array1.length != array2.length)
    throw new Error();
  return array1.map(
    (a, i) => array1[i] + array2[i]
  );
}

///////
addArrays = (a, b) => {
  if (a.length != b.length) throw "Error";
  return a.map((e, i) => e + b[i]);
};

///////
const addArrays = (array1, array2) =>
  array1.length === array2.length
    ? array1.map(($, i) => $ + array2[i])
    : error;

///////
function addArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    throw new Error("You done goof'd");
  }
  var sum = [];
  for (var i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
}

///////////////////
function addArrays(array1, array2) {
  if (array1.length !== array2.length)
    throw Error();
  return array1.map((a, b) => a + array2[b]);
}
