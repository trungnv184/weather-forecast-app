export const getTemperatureFormat = (temp) => {
  return temp ? Number(temp).toFixed(1) : "Unknown Temp";
};

export const getWeekDay = (date) => {
  try {
    return date
      ? new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(new Date(date))
      : "Unknown";
  } catch (error) {
    return "Unknown";
  }
};
