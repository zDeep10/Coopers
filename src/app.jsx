import Form from "./Components/Form/form";
import Article from "./Pages/Article/article";
import Footer from "./Pages/Footer/footer";
import Header from "./Pages/Header/header";
import MainSection from "./Pages/MainSection/section";
import "./styles/global.scss";
import bg from "./Assets/img/BG.png";
import { useState } from "react";
import { userContext } from "./Store/userContext";

const App = () => {
  const [authentication, setAuthentication] = useState("");

  return (
    <div className="main__container">
      <userContext.Provider value={{ authentication, setAuthentication }}>
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
