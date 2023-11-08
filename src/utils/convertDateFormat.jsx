const convertDateFormat = (inputDateString) => {
  const inputDate = new Date(inputDateString);

  const year = inputDate.getUTCFullYear() + 1;
  const month = 2;
  const day = 10;
  const hours = 0;
  const minutes = 0;
  const seconds = 0;

  const outputDate = new Date(
    Date.UTC(year, month, day, hours, minutes, seconds)
  );

  const outputDateString = outputDate.toISOString();

  return outputDateString;
};

export default convertDateFormat;
