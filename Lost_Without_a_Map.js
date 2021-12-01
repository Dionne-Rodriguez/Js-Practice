Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

function maps (arr) {
    var doubled = [];
    for (var i = 0; i < arr.length; i++) {
        doubled.push(arr[i] * 2);
    }
    return doubled;
}
