//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

/////////////additional solutions
function generateRange(min, max, step) {
  for (var res = []; min <= max; min += step) res.push(min);
  return res;
}

//////////////////
function generateRange(min, max, step) {
  var arr = [];
  while (min <= max) {
    arr.push(min);
    min += step;
  }
  return arr;
}

//////////////////////
function generateRange(min, max, step) {
  return [...rangeGenerator(min, max, step)];
}

function* rangeGenerator(min, max, step) {
  while (min <= max) {
    yield min;
    min += step;
  }
}

/////////////////
function generateRange(min, max, step) {
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}
