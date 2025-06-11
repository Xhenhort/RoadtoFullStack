// Write your function here:
const toEmoticon = (emote) => {
  if (typeof emote !== 'string') {
    return 'Entries must be texts'
  };
  if (emote === 'shrug') {
    return '|_{"}_|'
  } else if (emote === 'smiley face') {
    return ':)'
  } else if (emote === 'frowny face') {
    return ':('
  } else if (emote === 'winky face') {
    return ';)'
  } else if (emote === 'heart') {
    return '<3'
  } else {
    return '|_(* ~ *)_|'
  }
}


// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
