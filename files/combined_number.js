'use strict';

function combined_number(numbers) {
  return numbers.map(number => number.toString()).join();
}

module.exports = combined_number;
