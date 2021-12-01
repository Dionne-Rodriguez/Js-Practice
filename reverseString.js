Complete the solution so that it reverses all of the words within the string passed in.


function reverseWords(str){
  var intoArray = str.split(" ")
  var reverseArray = intoArray.reverse()
  var joinArray = reverseArray.join()
    console.log(joinArray)
}
