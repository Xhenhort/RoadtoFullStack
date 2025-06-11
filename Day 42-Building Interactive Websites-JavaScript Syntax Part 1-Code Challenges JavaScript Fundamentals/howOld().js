// Write your function here:
const howOld = (age, year) => {
  if (typeof age !== 'number' || typeof year !== 'number') {
    return 'All entries must be numbers'
  };
  const birthyear = 2025 - age;
  if (year > 2025) {
    return `You will be ${year - birthyear} years old in the year ${year}`
  } else if (year < birthyear) {
    return `The year ${year} was ${birthyear - year} years before you were born`
  } else if (year < 2025 && birthyear <= year) {
    return `You were ${year - birthyear } years old in the year ${year}`
  };
}




// Once your function is written, write function calls to test your code!
console.log(howOld(24, 2034))