'use strict';

const sortRule = (a, b) => b-a;

function combined_number(numbers) {
    return numbers
        .sort(sortRule)
        .map(number => number.toString())
        .join('');
}

module.exports = combined_number;
