// Write your function here:
const numImaginaryFriends = (x) => {
  if (x === 'number') {
    return 'Entries must a number'
  };
  return Math.ceil(x/4)
};





// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)) // Should print 5
 console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!
