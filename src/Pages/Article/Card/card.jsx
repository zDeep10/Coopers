import cooIcon from "../../../Assets/icons/icon-coopers.png";
import bitmap from "../../../Assets/img/bitmap2.png";

const Card = ({ item }) => {
  return (
    <div className="article__card">
      <div className="article__img">
        <img className="radius" src={bitmap} alt="Daily jobs" />
        <img className="position" src={cooIcon} alt="Coopers Icon" />
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
