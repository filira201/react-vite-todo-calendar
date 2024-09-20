export const getDataArray = (currentDate) => {
  const currentDaysOnTable = 42;
  const numberDayInWeek = [6, 0, 1, 2, 3, 4, 5];

  const lastDateOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth =
    numberDayInWeek[
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
    ];

  const lastDateOfPreviousMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  const occupiedCells = currentDaysOnTable - firstDayOfMonth - lastDateOfMonth;

  const daysArray = [];

  for (let i = firstDayOfMonth; i > 0; i--) {
    daysArray.push({
      year: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        lastDateOfPreviousMonth - i + 1
      ).getFullYear(),
      month: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        lastDateOfPreviousMonth - i + 1
      ).getMonth(),
      day: lastDateOfPreviousMonth - i + 1,
      isCurrentMonth: false,
      isToday: false,
    });
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    daysArray.push({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      day: i,
      isCurrentMonth: true,
      isToday:
        new Date().getDate() === i &&
        new Date().getFullYear() === currentDate.getFullYear() &&
        new Date().getMonth() === currentDate.getMonth(),
    });
  }
  for (let i = 1; i <= occupiedCells; i++) {
    daysArray.push({
      year: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i
      ).getFullYear(),
      month: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i
      ).getMonth(),
      day: i,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  return daysArray;
};
