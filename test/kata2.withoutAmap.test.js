//import withoutAmap from '../src/kata2.withoutAmap';
const { withoutAmap } = require('../src');

describe('withoutAmap', () => {
  it('should return a new array with each value doubled', () => {
    expect(withoutAmap([1, 2, 3])).toStrictEqual([2, 4, 6]);
    expect(withoutAmap([2, 2, 2, 2, 2, 2])).toStrictEqual([4, 4, 4, 4, 4, 4]);
  });
});