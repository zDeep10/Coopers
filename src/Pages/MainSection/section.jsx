import Cards from "./Card/card";
import "./section.scss";
import graphism from "../../Assets/img/grafismos.png";
import { useState, useEffect } from "react";

const MainSection = () => {
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, []);

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

      <img
        className="graphismIMG"
        src={graphism}
        alt="Grafismo"
        loading="lazy"
      />

      {/* Todo Cards  */}

      <div className="section__cards">
        {winReady ? <Cards name={"To-do"} /> : null}

        {/* <Cards name={"Done"} /> */}
      </div>
    </section>
  );
};

export default MainSection;
