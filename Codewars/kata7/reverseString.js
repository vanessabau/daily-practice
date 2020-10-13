//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//My solution
function reverseWords(str) {
  var newString = str.split(" ");
  console.log(newString);
  var finalArr = [];

  newString.forEach(function (item, index) {
    console.log(item, index);
    var splitString = item.split("");
    finalArr.push(splitString.reverse().join(""));
  });
  console.log(finalArr.join(" "));
  return finalArr.join(" ");
}

reverseWords("double space");
