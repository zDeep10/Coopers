import cooIcon from "../../../Assets/icons/icon-coopers.png";
import cardsImg from "../../../Data/CardsData.json"

const Card = ({ item }) => {

  console.log(cardsImg)
  return (
    <div className="article__card">
      <div className="article__img">
        <img
          className="radius"
          src={"./src/img" + item.img}
          alt="Daily jobs"
          loading="lazy"
        />

        <img
          className="position"
          src={cooIcon}
          alt="Coopers Icon"
          loading="lazy"
        />
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
