/**
 * Roman to Integer
 * 
 * Related Topics: Hash Table, Math, String
 * 
 */

/**
 * Traverse from left to right.
 * 
 * If ther is I, X, C. Count one more.
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,    
        "IV": 4,
        "IX": 9,   
        "XL": 40,
        "XC": 90,        
        "CD": 400,
        "CM": 900
    }
     
    var substractionMappting = ["I", "X", "C"]

    let i = 0;
    let values = [];
    while (i < s.length) {
        if (substractionMappting.includes(s[i]) && i+1 < s.length && isPair(s[i], s[i + 1])) {
            values.push(map[`${s[i]}${s[i+1]}`]);
            i += 2;
            continue;
        }
        values.push(map[s[i++]]);
    }
    return sum(values);
};

var isPair = function (a, b) {
   if (a === "I" && (b === "V" || b === "X")) {
       return true;
   }
   
   if (a === "X" && (b === "L" || b === "C")) {
       return true;
   }

   if (a === "C" && (b === "D" || b === "M")) {
       return true;
   }

   return false;
}

var sum = function (array) {
    var summary = 0;
    for (var item of array) {
        summary += item;
    }

    return summary;
}

console.log(romanToInt("MDCCCLXXXIV"));