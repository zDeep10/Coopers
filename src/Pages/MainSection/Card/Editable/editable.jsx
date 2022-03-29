import React, { useState } from "react";
import "./editable.scss";
import api from "../../../../Services/api";

const Editable = ({
  text,
  placeholder,
  children,
  task,
  allTasks,
  setAllTasks,
  setUpdatedTask,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = async (event, id) => {
    const { key } = event;

    if (key == "Enter") {
      setEditing(false);

      // ENVIANDO TAREFA
      const headers = {
        "Content-type": "application/json",
        accept: "application/json",
      };
      const body = {
        text: text,
      };
      const data = await api
        .put("todos/update/" + id, body, { headers })
        .then((res) => res.data);

      // DANDO UPDATE NO STATE
      setAllTasks(
        allTasks.map((task) => {
          if (task._id === data._id) {
            return { ...task, text };
          }
          return task;
        })
      );

      setUpdatedTask("");
    }
  };

  return (
    <section {...props} className="Editable">
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, task._id)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{text || placeholder || "Task Name"}</span>
        </div>
      )}
    </section>
  );
};

export default Editable;
