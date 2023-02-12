'use strict';

const combined_number = require('./combined_number');

describe('Combined Number', () => {
  it('should return a string', () => {
    expect(typeof combined_number('')).toEqual('string');
  });
});
