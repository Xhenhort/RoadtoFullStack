// Write your function here:
const tipCalculator = (quality, total) => {
  if (typeof quality !== 'string' || typeof total !== 'number') {
    return 'The first entry which is the quality of the service must be a text and the second entry which is the total cost must be a number'
  };
  if (quality === 'bad') {
    return total * 0.05
  } else if (quality === 'ok') {
    return total * 0.15
  } else if (quality === 'good') {
    return total * 0.2
  } else if (quality === 'excellent') {
    return total * 0.3
  } else {
    return total * 0.18
  };
}





// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!