var reverseWords = function(input) {
  input.reverse();

  for (let i = 0; i < input.length;) {
    let j = i + 1;
    while(j < input.length) {
      if (input[j] === ' ') {
        let left = i;
        let right = j - 1;
        while (left < right) {
          [input[left], input[right]] = [input[right], input[left]];
          left++;
          right--;
        }
        // TODO: swap, than jump out
        break;
      }
      j++;
    }
    i = j + 1;
  }

  return input;
}

console.log(reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]));