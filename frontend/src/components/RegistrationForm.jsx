import React from "react";
import DefaultButton from "./UI/DefaultButton/DefaultButton";
import SocialAuthBtn from "./UI/socialAuthBtn/socialAuthBtn";

const RegistrationForm = () => {
  return (
    <form action="">
      <div className="form__inputs">
        <input type="text" className="form__input" placeholder="Your Name" />
        <input
          type="password"
          className="form__input"
          placeholder="Your Password"
        />
        <input type="phone" className="form__input" placeholder="Your Phone" />
        <input
          type="password"
          className="form__input"
          placeholder="Repeat Password"
        />
        <input type="email" className="form__input" placeholder="Your Email" />
      </div>
      <div className="form__decoration" />
      <SocialAuthBtn />
      <DefaultButton text={"Sign up"} />
    </form>
  );
};

export default RegistrationForm;
