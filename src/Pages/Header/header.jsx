import "./header.scss";
import logo from "../../Assets/img/Logo.png";
import sala from "../../Assets/img/02.png";

const Header = () => {
  return (
    <header className="header__container">
      <nav className="nav__container">
        <img src={logo} alt="Logo Coopers" />
        <button>Entrar</button>
      </nav>
      <div className="header__flex">
        <div className="header__title">
          <h1>Organize</h1>
          <p>your daily jobs</p>

          <p>The only way to get things done</p>

          <button>Go to TO-do list</button>
        </div>
        <div className="header__sala">
          <img src={sala} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
