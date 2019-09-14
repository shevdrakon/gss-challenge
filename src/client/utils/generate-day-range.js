import moment from "moment";

const generateDayRange = (data) => {
  if (!data) throw new Error(`Passed data arg has to be specified.`);

  const startDate = moment(data);
  if (!startDate.isValid()) throw new Error(`Passed data arg not a date.`);

  return new Array(7)
    .fill(null)
    .map((v, index) => moment(startDate).add(index, 'days'))
    .filter(v => v.isoWeekday() < 6);
}

export default generateDayRange;
