import CalendarDay from "./CalendarDay";
import { getDataArray } from "../utils/getDataArray";
import { useMemo } from "react";

function CalendarBody({
  currentDate,
  handleOpenModalTask,
  deleteToTaskArrayStorage,
  taskData,
}) {
  const weeksArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const daysArray = useMemo(() => {
    return getDataArray(currentDate);
  }, [currentDate]);

  return (
    <div className="calendar-body">
      <ul className="calendar-weeks">
        {weeksArray.map((week, index) => (
          <li key={index}>{week}</li>
        ))}
      </ul>
      <ul className="calendar-days">
        {daysArray.map((day, index) => (
          <CalendarDay
            deleteToTaskArrayStorage={deleteToTaskArrayStorage}
            handleOpenModalTask={handleOpenModalTask}
            taskData={taskData}
            dayInfo={daysArray[index]}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default CalendarBody;
