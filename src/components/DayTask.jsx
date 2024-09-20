const DayTask = ({
  taskInfo,
  deleteToTaskArrayStorage,
  handleOpenModalTask,
}) => {
  return (
    <li className="task-container">
      <p
        onClick={() => handleOpenModalTask(taskInfo, false)}
        className="task-container-title"
      >
        {taskInfo.title}
      </p>
      <span
        className="material-symbols-outlined"
        onClick={() => deleteToTaskArrayStorage(taskInfo.id)}
      >
        close
      </span>
    </li>
  );
};

export default DayTask;
