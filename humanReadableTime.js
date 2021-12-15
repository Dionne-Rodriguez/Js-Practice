// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// const strictEqual = require("chai").assert.strictEqual;

// describe('tests', function() {
//     it('should format correctly', function() {
//       strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
//       strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
//       strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
//       strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
//       strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
//       strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
//       strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
//       strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//       strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
//       strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//     });
//   });


function humanReadable (timeSeconds) {
    return `${format(Math.floor((timeSeconds / 3600)))}:${format(Math.floor(((timeSeconds % 3600) / 60)))}:${format(Math.floor((((timeSeconds % 3600) % 60) % 60)))}`;
 }

function format(value) {
    return value === 0 ? "00" : value <= 9 ? `0${value}` : value
   }

  
console.log(humanReadable(34953));
console.log(humanReadable(3600));