//8Kata
//Given an array of integers.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.If the input array is empty or null, return an empty array.

//Example For
let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//, you should return [10, -65].
function countPositivesSumNegatives(input) {
  var count = 0;
  var sum = 0;
  var arr = [];

  if (input == [] || null) {
    arr = [];
    return arr;
  } else {
    for (i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count++;
      }
      console.log("input: " + input[i] + "count: " + count);
    }

    for (j = 0; j < input.length; j++) {
      const negInput = input[j];
      if (input[j] < 0) {
        console.log(input[j]);
        console.log("line 22 " + negInput);
        sum = sum + input[j];
      }
      console.log("input: " + negInput + "sum: " + sum);
    }
    console.log(count + ", " + sum);
    arr.push(count);
    arr.push(sum);
    console.log("arr: " + arr);
    return arr;
  }
}

countPositivesSumNegatives(input1);

///////////// Final Answer passed 103 of 104 tests:

function countPositivesSumNegatives(input) {
  function countPositivesSumNegatives(input) {
    var count = 0;
    var sum = 0;
    var arr = [];

    if (input == [] || input == null) {
      return [];
    } else if (input !== null) {
      for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          count++;
        }
      }
      for (j = 0; j < input.length; j++) {
        const negInput = input[j];
        if (input[j] < 0) {
          sum = sum + negInput;
        }
      }
      arr.push(count);
      arr.push(sum);
      return arr;
    }
  }
}

////////// fully functioning answers
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}

////////
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}
/////////
function countPositivesSumNegatives(input) {
  return input && input.length
    ? input.reduce(
        function (p, c, i, s) {
          c <= 0 ? (p[1] += c) : (p[0] += 1);
          return p;
        },
        [0, 0]
      )
    : [];
}
///////
function countPositivesSumNegatives(input) {
  var newArr = [];
  var positiveNumber = 0;
  var negativeNumber = 0;

  // Validate Input
  if (input === null || input.length === 0) return newArr;

  // Loop through array of Numbers
  for (var i = 0; i < input.length; i++) {
    if (input[i] == 0) continue;
    // Count positives
    else if (input[i] > 0) positiveNumber++;
    // Sum negatives
    else if (input[i] < 0) negativeNumber += input[i];
  }

  // Prepare Output
  newArr.push(positiveNumber);
  newArr.push(negativeNumber);

  return newArr;
}
