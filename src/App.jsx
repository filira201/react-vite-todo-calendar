import { useState } from "react";
import CalendarBody from "./components/CalendarBody";
import CalendarHeader from "./components/CalendarHeader";
import ModalTask from "./components/ModalTask";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [taskData, setTaskData] = useLocalStorage([], "taskData");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModalTask, setShowModalTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  const [taskId, setTaskId] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const deleteToTaskArrayStorage = (id) => {
    const newTaskArray = taskData.filter((task) => task.id !== id);

    setTaskData(newTaskArray);
  };

  const restTaskAndModalStates = () => {
    setShowModalTask(false);
    setTaskId(null);
    setTaskTitle("");
    setTaskDescription("");
  };

  const addOrUpdateToTaskArrayStorage = (id, title, description) => {
    const dataArrayIndex = taskData.findIndex((item) => item.id === id);

    const newItem = {
      id: id.split("-", 3).join("-") + `-${Date.now()}`,
      title: title,
      description: description,
    };

    if (dataArrayIndex === -1) {
      setTaskData([...taskData, newItem]);
    } else {
      const newTaskData = [
        ...taskData.slice(0, dataArrayIndex),
        newItem,
        ...taskData.slice(dataArrayIndex + 1),
      ];
      setTaskData(newTaskData);
    }

    restTaskAndModalStates();
  };

  const changeTitle = (value) => {
    setTaskTitle(value);
  };

  const changeDescription = (value) => {
    setTaskDescription(value);
  };

  const handleCloseModal = () => {
    restTaskAndModalStates();
  };

  const handleOpenModalTask = (info, newTask) => {
    if (newTask) {
      setTaskId(`${info.year}-${info.month}-${info.day}`);
      setEditTask(false);
    } else {
      setEditTask(true);
      setTaskId(info.id);
      setTaskTitle(info.title);
      setTaskDescription(info.description);
    }
    setShowModalTask(true);
  };

  const changeCurrentDate = (whatMonthString) => {
    if (whatMonthString === "previous") {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
      );
    } else if (whatMonthString === "next") {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
      );
    } else if (whatMonthString === "currentMonth") {
      setCurrentDate(new Date());
    }
  };

  return (
    <div className="calendar-container">
      <CalendarHeader
        currentDate={currentDate}
        changeCurrentDate={changeCurrentDate}
      />
      <CalendarBody
        currentDate={currentDate}
        handleOpenModalTask={handleOpenModalTask}
        taskData={taskData}
        deleteToTaskArrayStorage={deleteToTaskArrayStorage}
      />
      {showModalTask && (
        <ModalTask
          editTask={editTask}
          changeTitle={changeTitle}
          changeDescription={changeDescription}
          handleCloseModal={handleCloseModal}
          taskTitle={taskTitle}
          taskDescription={taskDescription}
          taskId={taskId}
          addOrUpdateToTaskArrayStorage={addOrUpdateToTaskArrayStorage}
        />
      )}
    </div>
  );
}

export default App;
