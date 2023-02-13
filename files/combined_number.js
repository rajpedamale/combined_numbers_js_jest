'use strict';

function combined_number(numbers) {
    return numbers
        .sort((a, b) => b-a)
        .map(number => number.toString())
        .join('');
}

module.exports = combined_number;
