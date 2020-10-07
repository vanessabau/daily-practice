//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//10/6 35 mins

n = 35231;

function digitize(n) {
  const digits = n.toString().split("");
  let reverseNums = [];
  if (n >= 0) {
    arr = digits.reverse();
    reverseNums = arr.map(Number);
  }

  return reverseNums;
}
