//import xo from '../src/kata7.XO';
//import xo from '../src/kata7.XO';
const { xo } = require('../src')

describe('xo', () => {
  it('', () => {
    expect(xo('xo')).toBe(true);
    expect(xo('xxOo')).toBe(true);
    expect(xo('xxxm')).toBe(false);
    expect(xo('Oo')).toBe(false);
    expect(xo('ooom')).toBe(false);
  });
});