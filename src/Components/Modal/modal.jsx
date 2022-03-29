import { motion, AnimatePresence } from "framer-motion";
import "./modal.scss";
import modalImg from "/img/sign-in-img.png";
import userSchema from "../../Validation/modalValidation";
import { useState, useContext, useEffect } from "react";
import { userContext } from "../../Store/userContext";
import api from "../../Services/api";

const Modal = ({ showModal, setShowModal, name }) => {
  // States for handling erros
  const [passwordError, setPasswordError] = useState(null);
  const [userError, setUserError] = useState(null);

  // STATE PARA ARMAZENAR USUARIOS JÁ CADASTRADOS
  const [userInfo, setUserInfo] = useState([]);

  // User Context
  const { setAuthentication } = useContext(userContext);

  // SEARCHING FOR USERS DATA

  let userAuthentication = false;

  const getUsers = async () => {
    await api.get("/users").then((data) => setUserInfo(data.data));
  };

  useEffect(() => {
    getUsers();
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Storing inputs data
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    // Form Validation
    try {
      const isValid = await userSchema.validate(formData);

      // SIGN IN MODAL
      if (name === "sign-in") {
        userAuthentication = false;

        for (let i = 0; i < userInfo.length; i++) {
          if (isValid.user === userInfo[i].user) {
            userAuthentication = true;
            break;
          }
        }

        if (userAuthentication) {
          setUserError("This user is already being used");
        } else {
          // SENDING DATA TO THE BACK-END
          const headers = {
            "Content-type": "application/json",
            accept: "application/json",
          };

          const body = JSON.stringify(isValid);

          api.post("/users/new", body, { headers });

          // DESABILITANDO BOTÃO E APGANDO MENSAGENS DE ERRO
          setUserError(null);
          setPasswordError(null);
          setShowModal(false);
        }
      }

      // login MODAL
      if (name === "login") {
        userAuthentication = false;

        for (let i = 0; i < userInfo.length; i++) {
          if (
            isValid.user === userInfo[i].user &&
            userInfo[i].password === isValid.password
          ) {
            userAuthentication = true;
            break;
          }
        }

        if (userAuthentication) {
          setAuthentication(isValid.user);

          // DESABILITANDO BOTÃO E APGANDO MENSAGENS DE ERRO
          setUserError(null);
          setPasswordError(null);
          setShowModal(false);
        } else {
          setUserError("Invalid email or password");
          setPasswordError("Invalid email or password");
        }
      }
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
              {name === "login" ? (
                <h1>
                  Login <br />
                  <span>to access your list</span>
                </h1>
              ) : (
                <h1>
                  Sign in <br />
                  <span>to access your list</span>
                </h1>
              )}
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="modal__form">
              <label>User:</label>
              <input name="user" type="text" />
              {userError && <span className="error">{userError}</span>}

              <label className="reSize">Password:</label>
              <input type="password" name="password" />
              {passwordError && <span className="error">{passwordError}</span>}

              <button>{name === "login" ? "Login" : "Sign in"}</button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
