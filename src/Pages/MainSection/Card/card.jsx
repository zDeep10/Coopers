import "./card.scss";
import Button from "../../../Components/Button/button";
import Tasks from "./Tasks/tasks";
import { userContext } from "../../../Store/userContext";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { useState, useContext } from "react";

const Cards = ({ name }) => {
  // Tasks Context
  const { allTasks, setAllTasks } = useContext(userContext);

  const doneTasks = allTasks.filter((task) => task.complete);

  const todoTasks = allTasks.filter((task) => !task.complete);

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
            {doneTasks.length > 0 && "Congratulions!"} <br />
            <span>You have done {doneTasks.length} tasks</span>
          </>
        ) : (
          "Take a breath. Start doing."
        )}
      </p>

      {/* Tasks */}
      <DragDropContext>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {name == "Done"
                ? doneTasks.map((task, index) => (
                    <Tasks
                      index={index}
                      name={name}
                      tasks={task}
                      doneTasks={doneTasks}
                    />
                  ))
                : todoTasks.map((task, index) => (
                    <Tasks
                      index={index}
                      name={name}
                      tasks={task}
                      todoTasks={todoTasks}
                    />
                  ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <Button name={name} />
    </div>
  );
};

export default Cards;
