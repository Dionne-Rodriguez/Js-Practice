/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// function twoSums(numbers, target) {
//     const map = new Map();
//     for (let i = 0; i < numbers.length; ++i) {
//         if (map.has(target - numbers[i])) {
//             return [map.get(target - numbers[i]), i];
//         } else {
//             map.set(numbers[i], i);
//         }
//     }
// }

/**
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]
 */

// function twoSums(nums, target) {
//     const map = new Map()
//     for(let i = 0; i < nums.length; i++) {
//         if(map.has(target - nums[i])) {
//             return [map.get(target - nums[i]), i]
//         } else {
//             map.set(nums[i], i)
//         }
//     }
// }
//console.log(twoSums([3,2,4], 6))

//take in a string
//determine if the length of the string is odd
//if odd the last char of the string should contain an "_" and be returned in an array in a pair of two
// else return the string in an array structure split in pair of two

// function solution(str){
//    const strLength = str.length
//    const formattedStr = (strLength % 2 == 0) ? str.match(/.{1,2}/g) : () => { console.log("function call")str.match(/.{1,2}/g).slice(-1) }
//    return formattedStr
// }

// function solution(str) {
//   const strLength = str.length;
//   if (strLength == 0) {
//     return [];
//   }
//   if (strLength % 2 == 0) {
//     return str.match(/.{1,2}/g);
//   } else {
//     str = str + "_";
//     let splitOddChars = str.match(/.{1,2}/g);
//     return splitOddChars;
//   } 
// }

// function solution (s) {
//     return (s+"_").match(/.{2}/g)||[]
// }

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));
