import "./form.scss";
import icoEmail from "../../Assets/icons/icon-mail.png";
import avatar from "../../Assets/img/image_avatar.png";

const Form = () => {
  return (
    <div className="form__container">
      {/* Header */}
      <div className="greenDetail"></div>
      <img className="position" src={avatar} alt="Imagem avatar" loading="lazy" />

      {/* Icon and Title */}
      <div className="form__getInTouch">
        <img src={icoEmail} alt="Email Icon" loading="lazy" />
        <h3>
          Get in <span>Thouch</span>
        </h3>
      </div>

      {/* Form */}
      <form className="form__block" action="#">
        {/* Name input */}
        <div className="form__name">
          <label>Your name</label>
          <input type="text" placeholder="type your name here" />
        </div>

        {/* Email and Telephone input */}
        <div className="form__emailTelephone">
          {/* Email */}
          <div className="size">
            <label>Email*</label>
            <input type="email" required placeholder="example@example.com" />
          </div>

          {/* Telephone */}
          <div className="size">
            <label>Telephone*</label>
            <input type="text" required placeholder="(  ) ____-____" />
          </div>
        </div>

        {/* Message input */}
        <div className="form__message">
          <label>Message*</label>
          <textarea required placeholder="Type what you want to say to us" />
        </div>
        <button>Send Now</button>
      </form>
    </div>
  );
};

export default Form;
