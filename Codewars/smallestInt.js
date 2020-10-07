//Find smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

////////////
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}

/////////////
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function (a, b) {
      return a - b;
    });
    return args[0];
  }
}

//////////////
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

////////////
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(Math, args);
  }
}
