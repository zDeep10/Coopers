// import cooIcon from "../../../Assets/icons/icon-coopers.png";
// import cardsImg from "../../../Data/CardsData.json"

const Card = ({ item }) => {
  const imgPath = "./public/img" + item.img;
  return (
    <div className="article__card">
      <div className="article__img">
        <img className="radius" src={imgPath} alt="Daily jobs" loading="lazy" />

        <img className="position" src={""} alt="Coopers Icon" loading="lazy" />
      </div>

      <div className="article__info">
        <div>function</div>
        <p>{item.description}</p>
        <a href="">read more</a>
      </div>
    </div>
  );
};

export default Card;
