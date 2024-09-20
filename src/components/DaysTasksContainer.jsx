import DayTask from "./DayTask";

const DaysTasksContainer = ({
  deleteToTaskArrayStorage,
  taskData,
  dayInfo,
  handleOpenModalTask,
}) => {
  const tasksOfTheDay = taskData.filter((task) => {
    const taskID = task.id.split("-", 3).join("-");
    return taskID === `${dayInfo.year}-${dayInfo.month}-${dayInfo.day}`;
  });
  return (
    <ul className="days-tasks-container">
      {tasksOfTheDay.map((task, index) => {
        return (
          <DayTask
            key={index}
            taskInfo={task}
            deleteToTaskArrayStorage={deleteToTaskArrayStorage}
            handleOpenModalTask={handleOpenModalTask}
          />
        );
      })}
    </ul>
  );
};

export default DaysTasksContainer;
