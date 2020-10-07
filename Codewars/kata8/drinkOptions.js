//10/6 20 minutes

//getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
//  "Programmer"	 "Hipster Craft Beer"
//  "Bike Gang Member"	"Moonshine"
//  "Politician"	"Your tax dollars"
//  "Rapper"	"Cristal"
//  *anything else*	"Beer"

function getDrinkByProfession(param) {
  let text;

  switch (param.toLowerCase()) {
    case "jabroni":
      text = "Patron Tequila";
      break;
    case "school counselor":
      text = "Anything with Alcohol";
      break;
    case "programmer":
      text = "Hipster Craft Beer";
      break;
    case "bike gang member":
      text = "Moonshine";
      break;
    case "politician":
      text = "Your tax dollars";
      break;
    case "rapper":
      text = "Cristal";
      break;
    default:
      text = "Beer";
  }
  return text;
}

/////////////Other solutions

function getDrinkByProfession(param) {
  param = param.toLowerCase();

  switch (param) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

/////////////
const drinks = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

const getDrinkByProfession = (profession) =>
  drinks[profession.toLowerCase()] || "Beer";

//////////////////
function getDrinkByProfession(param) {
  let map = new Map([
    ["jabroni", "Patron Tequila"],
    ["school counselor", "Anything with Alcohol"],
    ["programmer", "Hipster Craft Beer"],
    ["bike gang member", "Moonshine"],
    ["politician", "Your tax dollars"],
    ["rapper", "Cristal"],
  ]);

  let normal = param.toLowerCase();
  return map.has(normal) ? map.get(normal) : "Beer";
}
//////////////////////
function getDrinkByProfession(param) {
  var list = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };
  return list[param.toLowerCase()] || "Beer";
}
//////////////////
function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}
//////////////////////
function getDrinkByProfession(param) {
  var obj = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };
  return obj[param.toLowerCase()] || "Beer";
}
///////////////////
const getDrinkByProfession = (param) =>
  ({
    jabroni: `Patron Tequila`,
    "school counselor": `Anything with Alcohol`,
    programmer: `Hipster Craft Beer`,
    "bike gang member": `Moonshine`,
    politician: `Your tax dollars`,
    rapper: `Cristal`,
  }[param.toLowerCase()] || `Beer`);
