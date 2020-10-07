//8 Kata 10/3/20
//given a boolean if true return "Yes" string if false return "No"

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
/////
function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

/////
let boolToWord = (bool) => (bool ? "Yes" : "No");
/////
var boolToWord = function boolToWord() {
  //compile
  var result = compile(Array.prototype.slice.call(arguments, 0)[0]);
  //finish
  return result;
};

function compile(input) {
  var iterator = 0,
    input = input.toString(),
    output = [];
  for (; iterator < input.length; iterator++) {
    output[iterator] = input[iterator];
  }
  switch (output.join("")) {
    case "true":
      return "Yes";
      break;
    case "false":
      return "No";
      break;
    case "maybe":
      return "Maybe";
      break;
    default:
      throw new Error("Input was not recognized");
  }
}
