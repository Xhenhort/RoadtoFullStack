/*
Coding question

Create a function numberDigits() that takes the variable x as its only parameter.

If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:

'One digit: 5'

If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:

'Two digits: 12'

Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

'The number is: -202'

Feel free to test out your code below the function definition.
*/

// My code answer

const numberDigits = (x) => {
  if (typeof x !== 'number') {
    return 'Entries must be a number'
  };

  if (x <= 9 && x >= 0) {
    return `One digit: ${x}`
  } else if (x <= 99 && x > 0) {
    return `Two digits: ${x}`
  } else {
    return `The number is: ${x}`
  }
};

console.log(numberDigits(-1))