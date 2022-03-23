import "./article.scss";
import Card from "./Card/card";
import CardsData from "../../Data/CardsData.json";

const Article = () => {
  return (
    <article className="article__container">
      {/* Title */}
      <h2>good things</h2>

      {/* Cards */}
      <div className="article__cardContainer">
        {CardsData.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </article>
  );
};

export default Article;
