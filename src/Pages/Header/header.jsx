import "./header.scss";
import logo from "/img/Logo.png";
import sala from "/img/02.png";
import arrow from "/icons/icon-scroll.png";
import Modal from "../../Components/Modal/modal";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../Store/userContext";

const Header = () => {
  // Turn page State
  const { setOnPage, authentication } = useContext(userContext);

  // Modal State
  const [showModal, setShowModal] = useState(false);

  // Error State
  const [errorMessage, setErrorMessage] = useState(false);

  // Go to todo list Button
  const pageCall = () => {
    if (authentication) {
      setOnPage(true);
    }

    if (authentication == false) {
      setErrorMessage(true);
    }
  };

  return (
    <div className="main__grid">
      <div className="main__grid">
        <header className="header__container">
          {/* Nav */}
          <nav className="header__nav">
            <img src={logo} alt="Logo Coopers" />

            {authentication ? (
              <h2 className="authentication">
                Welcome <span>{authentication}</span>
              </h2>
            ) : (
              <button onClick={() => setShowModal(true)}>Sign in</button>
            )}
          </nav>

          {/* Modal */}
          <Modal showModal={showModal} setShowModal={setShowModal} setErrorMessage={setErrorMessage} />

          {/* First Block */}
          <div className="header__flex">
            <div className="header__title">
              <h1>Organize</h1>
              <p className="dayle">your daily jobs</p>

              <p className="margin">The only way to get things done</p>

              <button onClick={pageCall}>Go to To-do list</button>
              {errorMessage && <span className="errorMessage">You must be logged</span>}
            </div>

            {/* Second Block */}
            <div className="header__sala">
              <img src={sala} alt="Imagem Sala" />
            </div>
          </div>

          <div className="center">
            <img className="arrowIcon" src={arrow} alt="Arrow Icon" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
