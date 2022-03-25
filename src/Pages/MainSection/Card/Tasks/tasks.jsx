import success from "../../../../Assets/icons/icon_success.png";
import success2 from "../../../../Assets/icons/icon_success2.png";
import { useState, useContext } from "react";
import Editable from "../Editable/editable";
import { userContext } from "../../../../Store/userContext";
import { Draggable } from "react-beautiful-dnd";

const Taks = ({ tasks, name, index }) => {
  // Tasks Context
  const { setTodoTasks, setDoneTasks, todoTasks, doneTasks } =
    useContext(userContext);

  const [task, setTask] = useState("");

  const completeTasks = () => {
    // Todo Check
    if (name == "To-do") {
      setTodoTasks(
        todoTasks.map((todo) => {
          if (todo.id === tasks.id) {
            if (todo.complete == true) {
              todo.complete = false;
            } else {
              todo.complete = true;
            }
          }

          return todo;
        })
      );
    }

    // Done Check
    if (name == "Done") {
      setDoneTasks(
        doneTasks.map((todo) => {
          if (todo.id === tasks.id) {
            if (todo.complete == true) {
              todo.complete = false;
            } else {
              todo.complete = true;
            }
          }

          return todo;
        })
      );
    }
  };

  // Delete Task

  const deleteTask = () => {
    setTodoTasks((todos) => todos.filter((todo) => todo.id !== tasks.id));
    setDoneTasks((todos) => todos.filter((todo) => todo.id !== tasks.id));
  };

  // Update Task

  const updateTask = (e) => {
    setTask(e.target.value);
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
    <Draggable key={tasks.id} draggableId={tasks.id} index={index}>
      {(provided) => (
        <div
          className="card__tasks"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flexAdjust">
            {/* CheckBox */}
            <div
              onClick={completeTasks}
              className={`card__checkBox ${
                name == "Done" ? "greenBorder" : ""
              } ${tasks.complete && "greyBorder"}`}
            >
              {tasks.complete && checkBoxType(tasks)}
            </div>

            {/* Task Name */}
            <div className={`card__task ${tasks.complete && "activeTitle"}`}>
              <Editable text={task} placeholder={tasks.name} type="input">
                <input
                  type="text"
                  name="task"
                  placeholder="One more click to edit"
                  onChange={(e) => updateTask(e)}
                />
              </Editable>
            </div>
          </div>

          {/* Delete */}
          <div onClick={deleteTask} className="card__delete">
            delete
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Taks;
