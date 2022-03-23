import Article from "./Pages/Article/article";
import Header from "./Pages/Header/header";
import MainSection from "./Pages/MainSection/section";
import './styles/global.scss'



const App = () => {
  return (
    <div className="main__container">
      <div className="main__grid">
        {/* <Header /> */}
        {/* <MainSection/> */}
        <Article/>
      </div>
    </div>
  );
};

export default App;
