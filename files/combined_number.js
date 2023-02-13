'use strict';

const sortRule = (a, b) => {
    const sa = a.toString();
    const sb = b.toString();
    for (let num = 0; num < sa.length; num++) {
        if (sa[num] !== sb[num]) return Number(b) - Number(a);
    }
};

function combined_number(numbers) {
    return numbers
        .sort(sortRule)
        .map(number => number.toString())
        .join('');
}

module.exports = combined_number;
