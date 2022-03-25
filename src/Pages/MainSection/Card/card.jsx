import "./card.scss";
import Button from "../../../Components/Button/button";
import Tasks from "./Tasks/tasks";
import { userContext } from "../../../Store/userContext";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

import success from "../../../Assets/icons/icon_success.png";
import success2 from "../../../Assets/icons/icon_success2.png";
import { useState, useContext } from "react";
import Editable from "./Editable/editable";

const Cards = ({ name }) => {
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
    // Container
    <div className="card__container">
      <div
        className={`card__colorDetail ${name == "Done" ? "green" : ""}`}
      ></div>

      {/* Header */}
      <h3>{name}</h3>
      <p className={name == "Done" ? "newP" : ""}>
        {name == "Done" ? (
          <>
            Congratulions! <br /> <span>You have done 5 tasks</span>
          </>
        ) : (
          "Take a breath. Start doing."
        )}
      </p>

      {/* Tasks */}
      {/* <DragDropContext>
        <Droppable droppableId="tasks">
          {(provided) => {
            {
              name == "Done"
                ? doneTasks.map((tasks, index) => (
                    <Tasks
                      name={name}
                      tasks={tasks}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      index={index}
                    />
                  ))
                : todoTasks.map((tasks, index) => (
                    <Tasks
                      name={name}
                      tasks={tasks}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      index={index}
                    />
                  ));
            }
          }}
        </Droppable>
      </DragDropContext> */}
      {/* <>
      <DragDropContext>
        <Droppable droppableId="tasks">
          {(provided) => (

          )}
        </Droppable>
      </DragDropContext>
      </> */}

      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todoTasks.map((tasks, index) => (
                <Tasks tasks={tasks} name={name} index={index} />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {/* Button */}
      <Button />
    </div>
  );
};

export default Cards;
