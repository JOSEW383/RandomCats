export function shortenSentence(sentence, max) {
    if (sentence.length <= max) {
      return sentence;
    }
    const words = sentence.split(" ");
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
      if (result.length + words[i].length + 1 <= max) {
        result += " " + words[i];
      } else {
        break;
      }
    }
    return result;
  }