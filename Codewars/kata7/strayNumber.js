//You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number. The input array will always be valid! (odd-length >= 3)

// [1, 1, 2] ==> 2
const numbers = [1, 1, 2];
//[17, 17, 3, 17, 17, 17, 17];
//==> 3

//////////////Final solution
var strayNum;

if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
  console.log(numbers[0]);
  strayNum = numbers[0];
} else {
  numbers.forEach(function (item, index) {
    if (numbers[0] !== numbers[index]) {
      console.log(numbers[index]);
      strayNum = numbers[index];
    }
  });
}
return strayNum;

///////////////Solution below worked in vs code but not in codewars

function stray(numbers) {
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    console.log(numbers[0]);
    return numbers[0];
  } else {
    numbers.forEach(function (item, index) {
      if (numbers[0] !== numbers[index]) {
        console.log(numbers[index]);
        return numbers[index];
      }
    });
  }
}

stray(numbers);
