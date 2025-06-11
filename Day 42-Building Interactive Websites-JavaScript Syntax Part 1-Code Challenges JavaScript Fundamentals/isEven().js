/*
Coding question

Create a function isEven() that takes a number as its only parameter.
The function should return true if the number is even and false if the number is odd.
*/

// My answer

const isEven = (number) => {
  if (typeof number !== 'number') {
    return 'Entries must be a number'
  };

  if (Number.isInteger(number/2)) {
    return true
  } else {
    return false
  };
}

console.log(isEven(94))