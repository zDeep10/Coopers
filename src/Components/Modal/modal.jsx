import { motion, AnimatePresence } from "framer-motion";
import "./modal.scss";
import modalImg from "../../img/sign-in-img.png";
import userSchema from "../../Validation/modalValidation";
import { useState, useContext } from "react";
import { userContext } from "../../Store/userContext";

const Modal = ({ showModal, setShowModal, setErrorMessage }) => {
  // States for handling erros
  const [passwordError, setPasswordError] = useState(null);
  const [userError, setUserError] = useState(null);

  // User Context
  const { setAuthentication } = useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Storing inputs data
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    // Form Validation
    try {
      const isValid = await userSchema.validate(formData);
      setUserError(null);
      setPasswordError(null);
      setShowModal(false);
      setErrorMessage(false);

      setAuthentication(isValid.user);
    } catch (err) {
      if (err.message.includes("user") || err.message.includes("password")) {
        if (err.message.includes("user")) {
          setUserError(err.message);
          setPasswordError(null);
        }

        if (err.message.includes("password")) {
          setPasswordError(err.message);
          setUserError(null);
        }

        if (err.message.includes("user") && err.message.includes("password")) {
          setUserError(err.message);
          setPasswordError(err.message);
        }
      }
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <div className="modal__container">
          {/* Dark Background */}
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>

          {/*  Modal */}
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src={modalImg} alt="Sign in Image" />

            {/* Close Button */}
            <div
              onClick={() => {
                setShowModal(false);
                setUserError(null);
                setPasswordError(null);
              }}
              className="modal__close"
            >
              Close
            </div>
            {/* Modal Header */}
            <div className="modal__header">
              <h1>
                Sign in <br />
                <span>to access your list</span>
              </h1>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="modal__form">
              <label>User:</label>
              <input name="user" type="text" />
              {userError && <span className="error">{userError}</span>}

              <label className="reSize">Password:</label>
              <input type="password" name="password" />
              {passwordError && <span className="error">{passwordError}</span>}

              <button>Sign in</button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
