'use strict';

const combined_number = require('./combined_number');

describe('Combined Number', () => {
  it('should return a string', () => {
    expect(typeof combined_number([])).toEqual('string');
  });

  it('should return a string of the number for a single number', () => {
    expect(combined_number([0])).toEqual('0');
  });
});
