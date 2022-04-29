


/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
 var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    if (tomatoSlices % 2 !== 0) {
        return [];
    }

    let totalJumbo = tomatoSlices / 2 - cheeseSlices;
    let totalSmall = cheeseSlices - tomatoSlices;

    if (totalJumbo < 0 || totalSmall < 0) {
        return [];
    }

    return [totalJumbo, totalSmall];
};

console.log(numOfBurgers(2385088, 164763));