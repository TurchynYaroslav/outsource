import React from "react";
import { Link } from "react-router-dom";
import DefaultButton from "../DefaultButton/DefaultButton";
import "./Menu.css";

const Menu = () => {
  function menuActive() {
    document.body.classList.toggle("active");
  }

  return (
    <div className="header__menu menu">
      <button
        onClick={menuActive}
        type="button"
        className="menu__icon icon-menu"
      >
        <span></span>
      </button>
      <nav className="menu__body">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/" className="menu__link">
              Main
            </Link>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">
              About us
            </a>
          </li>
          <li className="menu__item">
            <a href="" className="menu__link">
              Chat with us 
            </a>
          </li>
          <li className="menu__item">
            <Link to="/login" className="menu__link">
              Log in
            </Link>
          </li>
          <li className="menu__item">
            <DefaultButton text={"Get started"} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
