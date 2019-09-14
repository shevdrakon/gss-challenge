const generateRange = (min, max) => {
  if (min === null || min === undefined || isNaN(min))
    throw new Error(`Passed min arg value has to a number.`);

  if (max === null || max === undefined || isNaN(max))
    throw new Error(`Passed max arg value has to a number.`);

  if (min > max)
    throw new Error(`min arg has to be less then max.`);

  return new Array(max - min + 1)
    .fill(null)
    .map((v, index) => min + index);
}

export default generateRange;
