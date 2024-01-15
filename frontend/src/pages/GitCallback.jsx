import React, { useEffect, useState } from "react";
import GitAuthService from "../API/gitAuthService";

const GitCallback = () => {
  const [canRedirect, setCanRedirect] = useState();
  // get params
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await GitAuthService.setAccessToken(
          "http://127.0.0.1:8000/api_auth/authorize/"
        );
        setCanRedirect(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (canRedirect) {
      window.location.href = "http://127.0.0.1:3000/";
    }
  }, [canRedirect]);

  return <></>;
};

export default GitCallback;
