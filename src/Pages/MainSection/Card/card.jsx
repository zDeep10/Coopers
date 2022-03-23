import "./card.scss";
import Button from "../../../Components/Button/button";
import TodoTasks from "../../../Data/TodoTasks.json";
import DoneTasks from "../../../Data/DoneTasks.json";
import Tasks from "./Tasks/tasks";

const Cards = ({ name }) => {
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
      {name == "Done"
        ? DoneTasks.map((tasks) => <Tasks name={name} tasks={tasks} />)
        : TodoTasks.map((tasks) => <Tasks name={name} tasks={tasks} />)}

      {/* Button */}
      <Button />
    </div>
  );
};

export default Cards;
