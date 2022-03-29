import success from "/icons/icon_success.png";
import success2 from "/icons/icon_success2.png";
import { useState, useContext } from "react";
import Editable from "../Editable/editable";
import { userContext } from "../../../../Store/userContext";
import { Draggable } from "react-beautiful-dnd";
import api from "../../../../Services/api";

const Taks = ({ tasks, name, index }) => {
  // Tasks Context
  const { allTasks, setAllTasks } = useContext(userContext);

  const [updatedTask, setUpdatedTask] = useState("");

  // Completing Task
  const completeTasks = async (id) => {
    const data = await api.put("todos/complete/" + id).then((res) => res.data);

    setAllTasks(
      allTasks.map((task) => {
        if (task._id === data._id) {
          return { ...task, complete: !task.complete };
        } else {
          return task;
        }
      })
    );
  };

  // Delete Task
  const deleteTask = async (id) => {
    const data = await api.delete("todos/delete/" + id).then((res) => res.data);

    setAllTasks((tasks) => tasks.filter((task) => task._id !== data._id));
  };

  const checkBoxType = (data) => {
    // Type of checkBox
    if (name == "Done") {
      return <img src={success2} alt="Sucess Icon" loading="lazy" />;
    } else {
      return <img src={success} alt="Sucess Icon" loading="lazy" />;
    }
  };

  return (
    <Draggable key={tasks._id} draggableId={tasks._id} index={index}>
      {(provided) => (
        <li
          className="card__tasks"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flexAdjust">
            {/* CheckBox */}
            <div
              onClick={() => completeTasks(tasks._id)}
              className={`card__checkBox ${
                name == "Done" ? "greenBorder" : ""
              } ${tasks.complete && "greyBorder"}`}
            >
              {tasks.complete && checkBoxType(tasks)}
            </div>

            {/* Task Name */}
            <div className={`card__task ${tasks.complete && "activeTitle"}`}>
              <Editable
                text={updatedTask}
                placeholder={tasks.text}
                allTasks={allTasks}
                setAllTasks={setAllTasks}
                task={tasks}
                type="input"
                setUpdatedTask={setUpdatedTask}
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
          <div onClick={() => deleteTask(tasks._id)} className="card__delete">
            delete
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Taks;
