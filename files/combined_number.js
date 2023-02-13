'use strict';

const sortRule = (a, b) => {
    const sa = a.toString();
    const sb = b.toString();
    for (let num = 0; num < sa.length; num++) {
        if (sa[num] !== sb[num]) return Number(sb[num]) - Number(sa[num]);
    }
};

function combined_number(numbers) {
    return numbers
        .sort(sortRule)
        .map(number => number.toString())
        .join('');
}

module.exports = combined_number;
