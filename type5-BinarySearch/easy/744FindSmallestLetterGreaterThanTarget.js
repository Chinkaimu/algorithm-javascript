/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length - 1;

    // Error 1: 边界情况考虑
    if (target >= letters[end]) {
        return letters[0];
    }

    if (target < letters[0]) {
        return letters[0];
    }

    while (start < end) {
        let pivot = Math.floor((start + end) / 2);

        if (letters[pivot] > target) {
            end = pivot - 1;
        } else if (letters[pivot] == target) {
            let i = pivot + 1;

            // Error 2: 没想到连续相等字母的 case
            while (i <= end && letters[i] == target) {
                i++;
            }

            // i == end || letters[i] > target;
            if (letters[i] > target) {
                return letters[i];
            } else {
                start = i;
            }
        }
        else {
            start = pivot + 1;
        }
    }

    if (start === end){
        if (letters[start] > target) {
            return letters[start];
        }

        return letters[start + 1];
    }
};

let input1 = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let input2 = "c";

let input3 = ["l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","l","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o"];
let input4 = "a";

console.log(nextGreatestLetter(input3, input4));
console.log(nextGreatestLetter(["a", "b"], "z"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["c", "f", "j"], "d"));
console.log(nextGreatestLetter(["a", "c", "f", "j"], "a"));
console.log(nextGreatestLetter(["a", "c", "f", "j"], "j"));
console.log(nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"], "e"));

// test cases:
/**
 * 1. target < letters[0]   ["c", "f", "j"], "a"
 * 2. target >= letters[end] ["c", "f", "j"], "j" | "k"
 * 3. target in letters ["a", "b", "c", "e", "f"], "c"   => find "e"
 * 4. target not in letters ["a", "b", "c", "e", "f"], "d" => can't find "d", 
 * 5. target multiple in letters ["e","e","e","e","e","e","n","n","n","n"], "e"
 */


