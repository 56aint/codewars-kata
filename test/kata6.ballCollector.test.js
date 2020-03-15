//import ballCollector from '../src/kata6.ballCollector';
const { ballCollector } = require('../src')

describe('ballCollecto', () => {
  it('should return the sum weight total of just the tennisball', () => {
    expect(ballCollector([58, 68, 62, 69, 58])).toEqual({ weight: 116 });

  });
});

