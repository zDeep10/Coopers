import React, { useState } from "react";
import "./editable.scss";

const Editable = ({ text, type, placeholder, children, ...props }) => {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event) => {
    const { key } = event;

    if (key == "Enter") {
      setEditing(false);
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
