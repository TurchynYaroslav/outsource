import React, { useEffect, useState } from "react";
import GitAuthService from "../../../API/gitAuthService";

const SocialAuthBtn = () => {
  const [gitHubUrl, setGitHubUrl] = useState("");
  // get right url with clientID
  const fetchGitHubUrl = async () => {
    try {
      // request on server
      const response = await GitAuthService.justRequest(
        "http://127.0.0.1:8000/api_auth/get_client_url/"
      );

      // set <<gitHubUrl>>
      if (response.data && response.data.url) {
        setGitHubUrl(response.data.url);
      } else {
        throw new Error("Invalid response format or missing URL.");
      }
    } catch (error) {
      console.error("Error fetching GitHub URL:", error.message);
    }
  };

  useEffect(() => {
    // redirect to the resulting URL if <<gitLab Url>> is not empty
    if (gitHubUrl) {
      window.location.href = gitHubUrl;
    }
  }, [gitHubUrl]);
  return (
    <div className="form__social-connect social-connect">
      <div className="social-connect__description">
        You can fill in faster with:
      </div>
      <button className="social-connect__button">
        <img src="./img/registration/google.svg" alt="" />
      </button>
      <button
        onClick={() => {
          fetchGitHubUrl();
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
