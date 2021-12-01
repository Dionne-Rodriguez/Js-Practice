//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0){
    number = number * 8
    return number
    }
    else {
     number = number * 9
      return number
  }
}
