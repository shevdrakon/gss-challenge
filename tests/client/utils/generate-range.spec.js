import generateRange from '../../../src/client/utils/generate-range';

describe('Generate range', () => {
  it('should throw an error if no min value', () => {
    expect(() => generateRange(null, 1)).toThrowError('Passed min arg value has to a number.');
  });

  it('should throw an error if no max value', () => {
    expect(() => generateRange(1)).toThrowError('Passed max arg value has to a number.');
  });

  it('should throw an error if min > max', () => {
    expect(() => generateRange(10, 1)).toThrowError('min arg has to be less then max.');
  });

  it('should generate a proper range', () => {
    const range = generateRange(1, 3);

    expect(range).toEqual([1, 2, 3]);
  });

  it('should generate a proper range with one value if min=max', () => {
    const range = generateRange(2, 2);

    expect(range).toEqual([2]);
  });
});
