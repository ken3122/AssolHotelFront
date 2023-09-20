import React from "react";
import "./App.css";

export const MyNavbar = () => {
  return (
    <div className="navbar-flex-container">
      <div className="logo">Гостевой дом Ассоль</div>
      <ul>
        <li>
          <a href="#home">Главная</a>
        </li>
        <li>
          <a href="#pricing">Контакты</a>
        </li>
        <li>
          <a href="#pricing">Расположение</a>
        </li>
      </ul>
    </div>
  );
};
