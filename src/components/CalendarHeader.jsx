import NavigationPanel from "./NavigationPanel";

function CalendarHeader({ currentDate, changeCurrentDate }) {
  const currentMonth = currentDate.toLocaleString("en-US", { month: "long" });
  const currentYear = currentDate.getFullYear();

  return (
    <nav className="calendar-header">
      <p className="current-date">
        {currentMonth} {currentYear}
      </p>
      <NavigationPanel changeCurrentDate={changeCurrentDate} />
    </nav>
  );
}

export default CalendarHeader;
