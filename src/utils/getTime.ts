const getTime = (date: Date) => {
  if (date) {
    const newDate = new Date(date);
    const h = newDate.getHours();
    const m = newDate.getMinutes();
    return `${h}:${m}`;
  }
  return null;
};

export default getTime;
