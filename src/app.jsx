import Form from "./Components/Form/form";
import Article from "./Pages/Article/article";
import Footer from "./Pages/Footer/footer";
import Header from "./Pages/Header/header";
import MainSection from "./Pages/MainSection/section";
import "./styles/global.scss";
import bg from "./Assets/img/BG.png";
import { useState, useEffect } from "react";
import { userContext } from "./Store/userContext";
import TodoTasks from "./Data/TodoTasks.json";
import DoneTasks from "./Data/DoneTasks.json";

const App = () => {
  // Authentication
  const [authentication, setAuthentication] = useState("");

  // Tasks Data
  const [todoTasks, setTodoTasks] = useState(TodoTasks);
  const [doneTasks, setDoneTasks] = useState(DoneTasks);

  

  return (
    <div className="main__container">
      <userContext.Provider
        value={{
          authentication,
          setAuthentication,
          todoTasks,
          setTodoTasks,
          doneTasks,
          setDoneTasks,
        }}
      >
        <img className="headerBG" src={bg} alt="Header Background" />
        <Header />
        <MainSection />
        {/* Components inside grid */}
        <div className="main__grid">
          <Article />
          <Form />
        </div>
        <Footer />
      </userContext.Provider>
    </div>
  );
};

export default App;
