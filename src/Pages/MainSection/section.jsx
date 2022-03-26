import Cards from "./Card/card";
import "./section.scss";
import graphism from "../../Assets/img/grafismos.png";
import { useState } from "react";
import CreateModal from "../../Components/CreateTask/Modal/createModal";

const MainSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="section__container">
      {/* BackGround */}
      <div className="section__bg">
        <h2 className="section__title">To-do List</h2>
        <div className="line"></div>
        <p className="section__description">
          Drag and drop to set your main priorities, check when done and create
          what's new.
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <CreateModal setShowModal={setShowModal} />
        </>
      )}

      <img
        className="graphismIMG"
        src={graphism}
        alt="Grafismo"
        loading="lazy"
      />

      {/* Todo Cards  */}
      <div className="section__cards">
        <Cards name={"To-do"} />
        <Cards name={"Done"} />
      </div>
      <button
        className="section__createButton"
        onClick={() => setShowModal(true)}
      >
        New Task
      </button>
    </section>
  );
};

export default MainSection;
