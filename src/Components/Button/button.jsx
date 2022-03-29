import "./button.scss";
import { useContext } from "react";
import { userContext } from "../../Store/userContext";
import api from "../../Services/api";

const Button = ({ name }) => {
  const { allTasks, setAllTasks, user, authentication } =
    useContext(userContext);

  const eraseAll = async () => {
    if (authentication) {
      if (name === "Done") {
        await api.delete("/deleteAll/done/" + user._id);
      }

      if (name === "To-do") {
        await api.delete("/deleteAll/todo/" + user._id);
      }
    }

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
