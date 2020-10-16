//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
// Test.assertSimilar( isIsogram("isogram"), true );
// Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
// Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
// Test.assertSimilar( isIsogram("isIsogram"), false );
// Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );

/////My solution : look for not an single character matches a single character one time with the .test() and look fo it in the str.toLowerCase
function isIsogram(str) {
  return !/(.).*\1/.test(str.toLowerCase());
}

//////other solutions
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
///////////////
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
  return true;
}

//////////////////
function isIsogram(str) {
  // Downcase everything, split on letters.
  str_lc = str.toLowerCase();
  var letters = str_lc.split("");

  // Utility: checks whether the given "value" at "index" is actually
  // first encountered at this "index" position within a string ("self").
  // Expected to be used with Array#filter.
  var check4uniqueness = function (value, index, self) {
    return self.indexOf(value) === index;
  };

  // An isogram string contains no duplicate, hence must have the same
  // length than the array composed of unique letters from that string.
  return letters.filter(check4uniqueness).length == str.length;
}
////////////////
function isIsogram(str) {
  return !str || str.length === new Set(str.toLowerCase()).size;
}
//////////////////
function isIsogram(str) {
  str = str.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false;
    }
  }

  return true;
}
//////////////////////
function isIsogram(str) {
  var map = {};
  var result = true;
  str.split("").forEach(function (char) {
    if (map[char.toUpperCase()] === undefined) {
      map[char.toUpperCase()] = 1;
    } else {
      result = false;
    }
  });
  return result;
}
//////////////////////
Azuaron;
function isIsogram(str) {
  return (
    !str ||
    str
      .toLowerCase()
      .split("")
      .every(function (v, i, arr) {
        return arr.indexOf(v) == i;
      })
  );
}
//////////////////////
function isIsogram(str) {
  //Create array from string and make it uppercased
  var arr = str.split("").map(function (el) {
    return el.toUpperCase();
  });
  //Test each value for duplicates.
  return arr.every(function (el) {
    return arr.indexOf(el) == arr.lastIndexOf(el);
  });
}
//////////////////
function isIsogram(word) {
  word = word.toLowerCase().split("").sort();
  for (var i = 0; i < word.length - 1; i++) {
    if (word[i] == word[i + 1]) return false;
  }
  return true;
}
/////////////////////
function isIsogram(str) {
  str = str.toLowerCase();

  for (first = 0; first < str.length - 1; first++) {
    for (second = first + 1; second < str.length; second++) {
      if (str[first] === str[second]) {
        return false;
      }
    }
  }

  return true;
}
