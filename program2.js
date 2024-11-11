const decodeTheRing = function (message, pattern) {
  let messageIndex = 0, patternIndex = 0;
  let starIndex = -1, matchIndex = 0;

  while (messageIndex < message.length) {
    
    if (patternIndex < pattern.length &&
        (pattern[patternIndex] === message[messageIndex] || pattern[patternIndex] === '?')) {
      messageIndex++;
      patternIndex++;
    }
    
    else if (patternIndex < pattern.length && pattern[patternIndex] === '*') {
      starIndex = patternIndex;
      matchIndex = messageIndex;
      patternIndex++;
    }
    
    else if (starIndex !== -1) {
      patternIndex = starIndex + 1;
      matchIndex++;
      messageIndex = matchIndex;
    }
    else {
      return false;
    }
  }

  while (patternIndex < pattern.length && pattern[patternIndex] === '*') {
    patternIndex++;
  }

  return patternIndex === pattern.length;
};

module.exports = decodeTheRing;
