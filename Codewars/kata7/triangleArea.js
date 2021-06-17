// Given dot triangles find the area

// Basic logic
function tArea(tStr) {
  const spacesArr = tStr.split("\n");
  const dotsAndSpaces =
    spacesArr[spacesArr.length - 2];
  const numOfSpaces = dotsAndSpaces.split(" ");
  const sideLength = numOfSpaces.length - 1;

  return sideLength * sideLength * 0.5;
}

//Refactored
function tArea(tStr) {
  const spacesArr = tStr.split("\n");
  const sideLength =
    spacesArr[spacesArr.length - 2].split(" ")
      .length - 1;

  return sideLength * sideLength * 0.5;
}

// Other solutions
function tArea(tStr) {
  const side = tStr.split("\n").length - 3;
  return (side * side) / 2;
}

////////////////
function tArea(tStr) {
  return (tStr.split`\n`.length - 3) ** 2 / 2;
}

/////////////////////
const tArea = (t) =>
  Math.pow(t.split("\n").length - 3, 2) / 2;

///////////////////
function tArea(tStr) {
  let count = 0;
  for (let i = 0; i < tStr.length; i++) {
    if (tStr[i] === "\n") count++;
  }
  const area = (count - 2) ** 2 / 2;
  return area;
}

////////////////////////////////////
const tArea = (tStr) =>
  (tStr.split("\n").length - 3) ** 2 / 2;
