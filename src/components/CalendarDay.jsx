import DaysTasksContainer from "./DaysTasksContainer";

const CalendarDay = ({
  handleOpenModalTask,
  taskData,
  deleteToTaskArrayStorage,
  dayInfo,
}) => {
  let numberOfDayClassName = dayInfo.isCurrentMonth ? "" : "inactive";
  numberOfDayClassName += `${dayInfo.isToday ? "today" : ""}`;
  return (
    <li className="calendar-day">
      <div className="calendar-day-header">
        <span
          className="material-symbols-outlined"
          onClick={() => handleOpenModalTask(dayInfo, true)}
        >
          add
        </span>
        <p className={numberOfDayClassName}>{dayInfo.day}</p>
      </div>
      <DaysTasksContainer
        handleOpenModalTask={handleOpenModalTask}
        deleteToTaskArrayStorage={deleteToTaskArrayStorage}
        taskData={taskData}
        dayInfo={dayInfo}
      />
    </li>
  );
};

export default CalendarDay;
