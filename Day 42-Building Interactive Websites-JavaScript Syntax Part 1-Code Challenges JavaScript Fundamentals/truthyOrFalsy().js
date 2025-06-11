// Write your function here:
const truthyOrFalsy = (x) => {
  if (
    x === false ||
    x === 0 ||
    x === -0 ||
    x === "" ||
    x === null ||
    x === undefined ||
    Number.isNaN(x)
  ) {
    return false;
  } else {
    return true;
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(NaN)); // Should print false

// We encourage you to add more function calls of your own to test your code!
