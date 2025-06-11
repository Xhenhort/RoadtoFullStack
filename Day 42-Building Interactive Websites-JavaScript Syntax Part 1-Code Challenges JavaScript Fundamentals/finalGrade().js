// Write your function here:
const finalGrade = (number1, number2, number3) => {
  if (
    typeof number1 !== "number" ||
    typeof number2 !== "number" ||
    typeof number3 !== "number"
  ) {
    return "All enteries must be numbers";
  } else if (
    number1 < 0 ||
    number2 < 0 ||
    number3 < 0 ||
    number1 > 100 ||
    number2 > 100 ||
    number3 > 100
  ) {
    return "All eneries must not exceed 100 and be a positive number (ex:-4 is invalid)";
  }
  const average = (number1 + number2 + number3) / 3;

  if (average <= 59) {
    return "F";
  } else if (average <= 69) {
    return "D";
  } else if (average <= 79) {
    return "C";
  } else if (average <= 89) {
    return "B";
  } else if (average <= 100) {
    return "A";
  }
};

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
