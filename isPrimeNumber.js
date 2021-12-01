function isPrime(num) {
    // prime is greater than 1
    //with only two factors 1 and itself
    //if it has more than two factors it is not a prime number
    let factors = 2

    for (i = 2; i <= 10; i++) {
        //check is the incoming num if moduled and checked by numbers up to ten has a remainder then return false
        //if num is less than 1 return false

        if (num % i == 0) {
            console.log("a factor");
        } else {
            console.log("not a factor");
        }
    }
}


isPrime(4)
//   isPrime(0)
//   isPrime(1)
 // isPrime(73)
//   isPrime(9)