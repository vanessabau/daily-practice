//10/5/20 Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.The output should be two capital letters with a dot separating them. It should look like this: Sam Harris => S.H ||  Patrick Feeney => P.F

//passed 209, failed 0, 30 minutes
name = "John Doe";

function abbrevName(name) {
  var parts = name.split(" ");
  var initials = "";
  console.log(parts);

  var newArray = [];

  for (i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== "") {
      newArray.push(parts[i][0].toUpperCase());
    }
  }
  return newArray.join(".");
}

abbrevName(name);

///////////////// Additional Solutions
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
///////////////
function abbrevName(name) {
  return name
    .split(" ")
    .map((x) => x.substr(0, 1).toUpperCase())
    .join(".");
}
///////////////
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
//////////////////
const abbrevName = (name) => name.match(/\b\w/g).join(".").toUpperCase();
/////////////////
function abbrevName(name) {
  if (typeof name === "string") {
    let names = name.split(" ");
    return `${names[0][0]}.${names[1][0]}`.toUpperCase();
  }
  console.log(arguments.callee.name + ": Argument must be string!");
}
