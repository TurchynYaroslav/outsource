import React, { useEffect } from "react";
import GitAuthService from "../../../API/gitAuthService";
const SocialAuthBtn = () => {
  const getUrl = async () => {
    const response = await GitAuthService.justRequest(
      "http://127.0.0.1:8000/api_auth/get_client_url/"
    );
    window.open(
      await response.data.url,
      "_blank",
      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    );
    return response.data.url;
  };
  return (
    <div className="form__social-connect social-connect">
      <div className="social-connect__description">
        You can fill in faster with:
      </div>
      <button className="social-connect__button">
        <img src="./img/registration/google.svg" alt="" />
      </button>
      <button
        onClick={async (e) => {
          e.preventDefault();
          getUrl();
        }}
        className="social-connect__button"
      >
        <img src="./img/registration/gitHub.svg" alt="" />
      </button>
      <button className="social-connect__button">
        <img src="./img/registration/microsoft.svg" alt="" />
      </button>
    </div>
  );
};

export default SocialAuthBtn;
