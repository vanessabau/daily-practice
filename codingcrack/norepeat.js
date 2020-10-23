//1.1 Is Unique : implement and algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  for (i = 0; i < str.length - 1; i++) {
    //loop through all characters in the string
    for (j = i + 1; j < str.length; j++) {
      //for each character loop through subsequent characters to see if they match.
      console.log("comparisons: " + str.charAt(i) + " and " + str.charAt(j));
      if (str.charAt(i) == str.charAt(j)) {
        console.log("isUnique = false"); //If any two comparisons match return "false"
        return false;
        // } else if (str.charAt(i) != str.charAt(j)) {
        //   //   console.log(true);
      }
    }
  }
  console.log("isUnique = true");
  return true; //Otherwise return "true"
}

isUnique("buml");
