//import removeChar from '../src/kata3.removeChar';
const { removeChar} = require('../src');

describe('removeChar', () => {
  it('should remove the first and last characters of a string', () => {
    expect(removeChar('eloquent')).toBe('loquen');
  });
});