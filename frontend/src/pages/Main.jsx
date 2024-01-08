import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WelcomeBlock from "../components/WelcomeBlock.jsx";
import AboutBlock from "../components/AboutBlock.jsx";
import ContactFormBlock from "../components/ContactFormBlock.jsx";
import GitAuthService from "../API/gitAuthService";
import Cookies from "js-cookie";

const Main = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GitAuthService.justRequest(
          "http://127.0.0.1:8000/api_auth/get_users/",
          {},
          { Authorization: `Bearer ${Cookies.get("access_token")}` }
        );

        // Доступ к данным в response.data
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="wrapper">
      <Header theme={"dark"} />
      <main className="main">
        <div className="main__block-link block-link">
          <div className="block-link__wrapper">
            <WelcomeBlock />
            <AboutBlock />
          </div>
          <div className="block-link__background">
            <img src="./img/main/background.png" alt="bg" />
          </div>
        </div>
        <ContactFormBlock />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
