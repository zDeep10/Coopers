import success from "../../../../Assets/icons/icon_success.png";
import success2 from "../../../../Assets/icons/icon_success2.png";
import { useState, useContext } from "react";
import Editable from "../Editable/editable";
import { userContext } from "../../../../Store/userContext";
import { Draggable } from "react-beautiful-dnd";

const Taks = ({ tasks, name }) => {
  // Tasks Context
  const { allTasks, setAllTasks } = useContext(userContext);

  const [updatedTask, setUpdatedTask] = useState("");

  const completeTasks = (id) => {
    // Todo Check
    setAllTasks(
      allTasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete };
        } else {
          return task;
        }
      })
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setAllTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  // Update Task
  const updateTask = (task) => {};

  const checkBoxType = (data) => {
    // Type of checkBox
    if (name == "Done") {
      return <img src={success2} alt="Sucess Icon" loading="lazy" />;
    } else {
      return <img src={success} alt="Sucess Icon" loading="lazy" />;
    }
  };

  return (
    // <Draggable key={tasks.id} draggableId={tasks.id} index={index}>
    //   {(provided) => (
    <div className="card__tasks">
      <div className="flexAdjust">
        {/* CheckBox */}
        <div
          onClick={() => completeTasks(tasks.id)}
          className={`card__checkBox ${name == "Done" ? "greenBorder" : ""} ${
            tasks.complete && "greyBorder"
          }`}
        >
          {tasks.complete && checkBoxType(tasks)}
        </div>

        {/* Task Name */}
        <div className={`card__task ${tasks.complete && "activeTitle"}`}>
          <Editable
            text={updatedTask}
            placeholder={tasks.name}
            allTasks={allTasks}
            setAllTasks={setAllTasks}
            id={tasks.id}
            type="input"
          >
            <input
              type="text"
              name="task"
              placeholder="One more click to edit"
              onChange={(e) => setUpdatedTask(e.target.value)}
            />
          </Editable>
        </div>
      </div>

      {/* Delete */}
      <div onClick={() => deleteTask(tasks.id)} className="card__delete">
        delete
      </div>
    </div>
    //   )}
    // </Draggable>
  );
};

export default Taks;
