const ModalTask = ({
  handleCloseModal,
  taskTitle,
  taskDescription,
  addOrUpdateToTaskArrayStorage,
  taskId,
  editTask,
  changeTitle,
  changeDescription,
}) => {
  return (
    <div className="overlay">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addOrUpdateToTaskArrayStorage(taskId, taskTitle, taskDescription);
        }}
        className="modal-task-form"
      >
        <div className="modal-task-header">
          <p>{editTask ? "Edit" : "Add"} your task</p>
          <span
            onClick={handleCloseModal}
            className="material-symbols-outlined"
          >
            close
          </span>
        </div>
        <div className="modal-task-body">
          <label htmlFor="modal-task-body-input">Title</label>
          <input
            value={taskTitle}
            onChange={(e) => changeTitle(e.target.value)}
            required
            type="text"
            id="modal-task-body-input"
          />
          <label htmlFor="modal-task-body-description">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => changeDescription(e.target.value)}
            required
            id="modal-task-body-description"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button type="submit">{editTask ? "Edit Task" : "Add Task"}</button>
      </form>
    </div>
  );
};

export default ModalTask;
