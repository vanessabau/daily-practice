//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
  let pc = p0;
  let needYears = 0;
  while (pc < p) {
    pc = pc + (pc * percent) / 100 + aug;
    needYears++;
  }
  return needYears;
}
/////////////////////

function nbYear(p0, percent, aug, p) {
  for (var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}
////////////
function nbYear(p0, percent, aug, p) {
  var count = 0;
  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    count++;
  }
  return count;
}
//////////////
function nbYear(p0, percent, aug, p) {
  if (p0 >= p) {
    return 0;
  } else {
    return 1 + nbYear(p0 * (1 + percent / 100) + aug, percent, aug, p);
  }
}
///////////////
function nbYear(p0, percent, aug, p) {
  var year = 0;
  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    year++;
  }
  return year;
}
////////////////
function nbYear(p0, percent, aug, p, years = 0) {
  return p0 < p
    ? nbYear(p0 + (p0 * percent) / 100 + aug, percent, aug, p, years + 1)
    : years;
}
////////////////
function nbYear(p0, percent, aug, p) {
  // variables needed
  var years = 1,
    percent = percent / 100,
    pCalc = p0 * (1 + percent) + aug;

  // loop while calculated population is less than
  // projected population and increment year and run
  // formula again.
  while (pCalc < p) {
    years++;
    pCalc = pCalc * (1 + percent) + aug;
  }

  // somehow i feel this funtion is highly inefficient
  return years;
}
/////////////////////
function nbYear(p0, percent, aug, p) {
  y = 0;
  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    y++;
  }
  return y;
}
