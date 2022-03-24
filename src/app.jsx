import Form from "./Components/Form/form";
import Article from "./Pages/Article/article";
import Footer from "./Pages/Footer/footer";
import Header from "./Pages/Header/header";
import MainSection from "./Pages/MainSection/section";
import "./styles/global.scss";
import bg from "./Assets/img/BG.png";

const App = () => {
  return (
    <div className="main__container">
      <img className="headerBG" src={bg} alt="Header Background" />
      <Header />
      <MainSection />
      {/* Elements inside grid */}
      <div className="main__grid">
        <Article />
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default App;
