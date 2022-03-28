import Form from "./Components/Form/form";
import Article from "./Pages/Article/article";
import Footer from "./Pages/Footer/footer";
import Header from "./Pages/Header/header";
import MainSection from "./Pages/MainSection/section";
import "./styles/global.scss";
import bg from "/img/BG.png";
import { useState, useEffect } from "react";
import { userContext } from "./Store/userContext";
import Tarefas from "./Data/Tasks.json";
import Todo from "./Pages/Todo/todo";
import api from "./Services/api";

const App = () => {
  // Authentication
  const [authentication, setAuthentication] = useState("");

  // Show Todo Page

  const [onPage, setOnPage] = useState(false);

  // Tasks Data

  const [allTasks, setAllTasks] = useState([]);

  const fetchTasks = async () => {
    api
      .get("/todos")
      .then((data) => setAllTasks(data.data))
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Render Order
  const renderOrder = () => {
    if (onPage === false) {
      return (
        <>
          {/* BackGround */}
          <img className="headerBG" src={bg} alt="Header Background" />

          {/* Header and Main section */}
          <Header />
          <MainSection />

          {/* Components inside grid */}
          <div className="main__grid">
            <Article />
            <Form />
          </div>

          {/* Footer */}
          <Footer />
        </>
      );
    }

    if (onPage === true) {
      return (
        <>
          <Todo />
        </>
      );
    }
  };

  return (
    <userContext.Provider
      value={{
        authentication,
        setAuthentication,
        allTasks,
        setAllTasks,
        onPage,
        setOnPage,
      }}
    >
      <div className="main__container">{renderOrder()} </div>
    </userContext.Provider>
  );
};

export default App;
