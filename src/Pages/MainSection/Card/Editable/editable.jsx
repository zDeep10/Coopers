import React, { useContext, useState } from "react";
import { userContext } from "../../../../Store/userContext";
import "./editable.scss";

const Editable = ({
  text,
  placeholder,
  children,
  id,
  allTasks,
  setAllTasks,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event) => {
    const { key } = event;

    if (key == "Enter") {
      setEditing(false);

      setAllTasks(
        allTasks.map((task) => {
          if (task.id === id) {
            return { ...task, name: text };
          } else {
            return task;
          }
        })
      );
    }
  };

  return (
    <section {...props} className="Editable">
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e)}
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
