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
      {name == "Done"
        ? doneTasks.map((task) => (
            <Tasks
              name={name}
              tasks={task}
              key={task.id}
              doneTasks={doneTasks}
            />
          ))
        : todoTasks.map((task) => (
            <Tasks
              name={name}
              tasks={task}
              key={task.id}
              todoTasks={todoTasks}
            />
          ))}

      <Button name={name} />
    </div>
  );
};

export default Cards;
