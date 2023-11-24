import React, { useEffect } from "react";
import GitAuthService from "../API/gitAuthService";

const CodeRedirect = () => {
  // get params
  useEffect(() => {
    GitAuthService.getParamCode("http://127.0.0.1:8000/api_auth/authorize/");
  }, []);

  return <></>;
};

export default CodeRedirect;
