import "./button.scss";
import { useContext } from "react";
import { userContext } from "../../Store/userContext";

const Button = ({ name }) => {
  const { allTasks, setAllTasks } = useContext(userContext);

  const eraseAll = () => {
    setAllTasks(
      allTasks.filter((task) => {
        if (name == "Done") {
          return !task.complete;
        } else {
          return task.complete;
        }
      })
    );
  };

  return (
    <button onClick={eraseAll} className="button__container">
      erase all
    </button>
  );
};

export default Button;
