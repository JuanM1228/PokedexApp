import React, { useState } from "react";
import user_photo from "../assets/pokeball.svg";
import "../StyleSheets/Login.css";
import { useDispatch } from "react-redux";
import { changeUsername } from "../features/login/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [validation, setValidation] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexCharacteres = /^[A-Za-z\s]{3,20}$/g;
    const charactersOk = regexCharacteres.test(username);

    if (charactersOk && username.trim().length !== 0) {
      console.log(username);
      dispatch(changeUsername(username));
      localStorage.setItem("username", username.toString());
      navigate("/pokemon");
    } else {
      setValidation(false);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <img src={user_photo} alt="" width="50%" />
      <h2>WELCOME</h2>
      <input
        type="text"
        placeholder="Please enter your name"
        required
        className={validation ? "valid-input" : "invalid-input"}
        onChange={handleChange}
      />
      {validation ? (
        ""
      ) : (
        <p className="mensagge-error">
          Only 3-20 alphabetic characters are allowed
        </p>
      )}
      <button>LOGIN</button>
    </form>
  );
};
