import React from "react";
import DefaultButton from "./UI/DefaultButton/DefaultButton";
import SocialAuthBtn from "./UI/socialAuthBtn/socialAuthBtn";

const LoginForm = () => {
  return (
    <form action="">
      <div className="form__inputs">
        <input type="text" className="form__input" placeholder="Your Name" />
        <input
          type="password"
          className="form__input"
          placeholder="Your Password"
        />
        <input type="email" className="form__input" placeholder="Your Email" />
      </div>
      <div className="form__decoration" />
      <SocialAuthBtn />
      <DefaultButton text={"Log in"} />
    </form>
  );
};

export default LoginForm;
