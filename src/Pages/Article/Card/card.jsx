import cooIcon from "../../../Assets/icons/icon-coopers.png";

const Card = ({ item }) => {
  let imgPath = "/img" + item.img;

  console.log(imgPath)

  return (
    <div className="article__card">
      <div className="article__img">
        <img className="radius" src={imgPath} alt="Daily jobs" loading="lazy" />

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
