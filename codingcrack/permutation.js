//1.2 Given two strings write a method to decide if one is a permutation of the other.

//STEPS:
//1. count characters of each string. If not equal return "false"
//2. Convert both strings to arrays
//3. Sort both arrays
//4. Compare arrays at each character
//5. If they match at each index return "true", if a mis-match is found return "false"

//Testing
function countchar(str) {
  console.log(str.length);
}
countchar("Hello u");

//function to sort characters
function sortChar(text) {
  const sortedArr = text.split("").sort().join("");
  console.log(sortedArr);
  return sortedArr;
}

function isPerm(str1, str2) {
  //error handling to confirm both input are strings here. If they are both strings, continue

  if (str1.length != str2.length) {
    console.log("Not permutation");
    return false;
  } else {
    console.log("result: " + sortChar(str1) + " and " + sortChar(str2));
    const sorted1 = sortChar(str1).toString();
    const sorted2 = sortChar(str2).toString();
    console.log("sorted " + sorted1 + sorted2);

    for (i = 0; i < sorted1.length; i++) {
      console.log(sorted1.charAt(i) + " line 36 " + sorted2.charAt(i));

      if (sorted1.charAt(i) == sorted2.charAt(i)) {
        console.log(sorted1.charAt(i) + " Permutation! " + sorted2.charAt(i));
        console.log("true");
      } else {
        if (sorted1.charAt(i) != sorted2.charAt(i)) console.log("Not a match!");
        //     return false;
      }
    }
  }
}

isPerm("Hello u", "Hello b");
