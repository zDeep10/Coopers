import success from "../../../../Assets/icons/icon_success.png";
import success2 from "../../../../Assets/icons/icon_success2.png";

const Taks = ({ tasks, name }) => {
  console.log(tasks);

  const checkBoxType = (data) => {
    // Type of checkBox
    if (name == "Done") {
      return <img src={success2} alt="Sucess Icon" loading="lazy"/>;
    } else {
      return <img src={success} alt="Sucess Icon"loading="lazy" />;
    }
  };
  return (
    <div className="card__tasks">
      <div className="flexAdjust">
        {/* CheckBox */}
        <div
          className={`card__checkBox ${name == "Done" ? "greenBorder" : ""} ${
            tasks.complete && "greyBorder"
          }`}
        >
          {tasks.complete && checkBoxType(tasks)}
        </div>

        {/* Task Name */}
        <div className={`card__task ${tasks.complete && "activeTitle"}`}>
          {tasks.name}
        </div>
      </div>

      <picture></picture>

      {/* Delete */}
      <div className="card__delete">delete</div>
    </div>
  );
};

export default Taks;
