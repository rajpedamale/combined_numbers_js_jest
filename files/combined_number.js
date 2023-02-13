'use strict';

const sortRule = (a, b) => {
    const sa = a.toString();
    const sb = b.toString();
    for (let num = 0; num < Math.max(sa.length, sb.length); num++) {
        if (typeof sa[num] === 'undefined' && typeof sb[num] === 'undefined' ) return 0;
        if (typeof sa[num] === 'undefined') {
            const compareValue = Number(sb[num]) - Number(sa[0]);
            return compareValue === 0 ? 1 : compareValue;
        }
        if (typeof sb[num] === 'undefined') {
            const compareValue = Number(sb[0]) - Number(sa[num]);
            return compareValue === 0 ? -1 : compareValue;
        }
        if (sa[num] !== sb[num]) return Number(sb[num]) - Number(sa[num]);
    }
    return 0;
};

function combined_number(numbers) {
    return numbers
        .sort(sortRule)
        .map(number => number.toString())
        .join('');
}

module.exports = combined_number;
