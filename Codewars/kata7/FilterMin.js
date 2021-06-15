//Filter min from an array, if array has no elements return empty array, if min number occurs more than once just filter the first instance of the number

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(
    Math.min(...numbers)
  );
  return [
    ...numbers.slice(0, indexOfMin),
    ...numbers.slice(indexOfMin + 1),
  ];
}

////////////////
function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter(
    (num, idx, arr) => idx !== arr.indexOf(min)
  );
}

///////////
const removeSmallest = (numbers) =>
  numbers.filter(
    (n, i) =>
      i !== numbers.indexOf(Math.min(...numbers))
  );

/////////////////
function removeSmallest(numbers) {
  var smallest;
  var newNums = [];
  numbers.forEach(function (num) {
    if (
      smallest > num ||
      smallest === undefined
    ) {
      smallest = num;
    }
  });
  var index = numbers.indexOf(smallest);
  numbers.forEach(function (n, i) {
    if (i !== index) {
      newNums.push(n);
    }
  });
  return newNums;
}

///////////////////////
function removeSmallest(numbers) {
  numbers = numbers.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}
