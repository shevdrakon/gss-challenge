import moment from 'moment';
import generateDayRange from '../../../src/client/utils/generate-day-range';

describe('Generate day range', () => {
  it('should throw an error if no data', () => {
    expect(() => generateDayRange()).toThrowError('Passed data arg has to be specified.');
  });

  it('should throw an error if data not a valid date', () => {
    expect(() => generateDayRange('string')).toThrowError('Passed data arg not a date.');
  });

  it('should generate a proper range', () => {
    const range = generateDayRange(moment('13/09/2019', 'DD/MM/YYYY'))
      .map(x => x.format('dddd'));

    expect(range).toEqual(['Friday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']);
  });
});
