import "./header.scss";
import logo from "../../Assets/img/Logo.png";
import sala from "../../Assets/img/02.png";
import arrow from "../../Assets/icons/icon-scroll.png";

const Header = () => {
  return (
    <div className="main__grid">
      <div className="main__grid">
        <header className="header__container">
          {/* Nav */}
          <nav className="header__nav">
            <img src={logo} alt="Logo Coopers" />
            <button>Entrar</button>
          </nav>

          {/* First Block */}
          <div className="header__flex">
            <div className="header__title">
              <h1>Organize</h1>
              <p className="dayle">your daily jobs</p>

              <p className="margin">The only way to get things done</p>

              <button>Go to TO-do list</button>
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
