'use strict';

const combined_number = require('./combined_number');

describe('Combined Number', () => {
  it('should return a string', () => {
    expect(typeof combined_number([])).toEqual('string');
  });

  it('should return a string of the number for a single number', () => {
    expect(combined_number([0])).toEqual('0');
  });

  it('should return "42" for [2, 4]', () => {
    expect(combined_number([2, 4])).toEqual('42');
  });

  it('should return "42120" for [21, 20, 4]', () => {
    expect(combined_number([21, 20, 4])).toEqual('42120');
  });

  it('should return "95021" for [50, 2, 1, 9]', () => {
    expect(combined_number([50, 2, 1, 9])).toEqual('95021');
  });

  it('should return "56550" for [5, 50, 56]', () => {
    expect(combined_number([5, 50, 56])).toEqual('56550');
  });

  it('should return "42423420" for [420, 42, 423]', () => {
    expect(combined_number([420, 42, 423])).toEqual('42423420');
  });
});
