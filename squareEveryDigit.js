// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer

var numString = num.toString();
  var results = [];
  for(var i = 0; i < numString.length; i++){
  results.push(Math.pow(numString[i], 2))

  }
  return Number(results.join(''));

}
